#!/usr/bin/env python3
"""Generate 16 teacher HTML pages from zhu-yanhan.html template."""

import re
import os
import sys

TEMPLATE = r"C:\Users\sansan\Desktop\teaccher day\teacher\zhu-yanhan.html"
OUTPUT_DIR = r"C:\Users\sansan\Desktop\teaccher day\teacher"
TMP = r"C:\Users\sansan\Desktop\teaccher day\_tmp_template_copy.html"

# Template gray values to replace
TPL = {
    'primary': '#757575',
    'secondary': '#616161',
    'tertiary': '#424242',
    'light': '#9E9E9E',
    'glow_rgb': (117, 117, 117),
    'name_light': '#EEEEEE',
    'name_mid': '#BDBDBD',
}


def hex_to_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))


def rgb_to_hex(r, g, b):
    return f'#{r:02X}{g:02X}{b:02X}'


def blend(rgb, amount):
    """Lighten by amount%."""
    return tuple(min(255, int(x + (255 - x) * amount / 100)) for x in rgb)


def darken(rgb, amount):
    """Darken by amount%."""
    return tuple(max(0, int(x * (1 - amount / 100))) for x in rgb)


def Rgba(rgb, alpha):
    return f"rgba({rgb[0]}, {rgb[1]}, {rgb[2]}, {alpha})"


def Lrgb(rgb, amt):
    return rgb_to_hex(*blend(rgb, amt))


def Drgb(rgb, amt):
    return rgb_to_hex(*darken(rgb, amt))


def page_css_vars(th):
    """Generate CSS variables block."""
    rgb = hex_to_rgb(th)
    sec = Drgb(rgb, 20)
    ter = Drgb(rgb, 50)
    lgt = Lrgb(rgb, 20)
    return f'''            --theme-primary: {th};
            --theme-secondary: {sec};
            --theme-tertiary: {ter};
            --theme-light: {lgt};
            --theme-gradient: linear-gradient(135deg, {th} 0%, {sec} 50%, {Drgb(rgb, 50)} 100%);
            --glow-red: {Rgba(rgb, 0.6)};
            --glow-soft: {Rgba(rgb, 0.25)};
            --glass-bg: {Rgba(rgb, 0.08)};
            --glass-border: {Rgba(rgb, 0.25)};'''


def replace_color_in_file(filepath, color):
    """Replace all template gray references with the new theme color."""
    rgb = hex_to_rgb(color)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Hex colors
    content = content.replace(TPL['primary'], color)       # #757575
    content = content.replace(TPL['secondary'], Drgb(rgb, 20))  # #616161
    content = content.replace(TPL['tertiary'], Drgb(rgb, 50))   # #424242
    content = content.replace(TPL['light'], Lrgb(rgb, 20))      # #9E9E9E

    # 2. Light text colors used in gradients
    content = content.replace(TPL['name_light'], Lrgb(rgb, 45))  # #EEEEEE -> light theme
    content = content.replace(TPL['name_mid'], Lrgb(rgb, 25))    # #BDBDBD -> lighter theme

    # 3. RGBA(117, 117, 117, X) -> rgba(R, G, B, X)
    def fix_rgba(m):
        alpha = m.group(1)
        return f"rgba({rgb[0]}, {rgb[1]}, {rgb[2]}, {alpha})"
    content = re.sub(r'rgba\(117,\s*117,\s*117,\s*([0-9.]+)\)', fix_rgba, content)

    # 4. Fix any artifacts where hex replacement produced wrong rgba values
    # Pattern: rgba(XXX, XXX, YYY.Z) where Z looks like an alpha but is actually part of RGB
    # e.g., after replacing #2196F3, some rgba may have become rgba(33, 150, 243.0)
    # We detect patterns like rgba(X, Y, Z.W) where W is clearly not an alpha
    def fix_bad_rgba(m):
        parts = m.group(0).rstrip(')').split(',')
        try:
            vals = [p.strip() for p in parts]
            if len(vals) == 4:
                # Check if last value looks like it has too many decimal places or is > 1
                alpha_str = vals[3]
                try:
                    alpha = float(alpha_str)
                    if alpha > 1.0 or '.' in alpha_str and len(alpha_str.split('.')[1]) > 2:
                        # Bad artifact - reconstruct with theme color
                        return Rgba(rgb, 0.5)
                except ValueError:
                    pass
        except (ValueError, IndexError):
            pass
        return m.group(0)

    # This catches cases like rgba(33, 150, 243.0) which is clearly wrong
    content = re.sub(r'rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\.?\d*,\s*[^\)]+\)', fix_bad_rgba, content)

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return content


# Teacher specifications
teachers = [
    {
        "file": "ms-pei-yi.html",
        "color": "#2196F3",
        "lang": "en",
        "icon": "\U0001F4D8",
        "name": "MS Pei Yi",
        "title": "Dedicated English Teacher",
        "message": "Thank you, MS Pei Yi, for making English grammar and literature come alive in every class. Your engaging teaching style has inspired us to appreciate the beauty of language and develop strong communication skills. From analyzing classic texts to mastering sentence structures, you have made every lesson both informative and enjoyable. Your passion for English has encouraged us to read widely and express ourselves with confidence. Wishing you a wonderful Teachers' Day!",
        "quote": "\"Language opens doors to new worlds.\"",
        "quiz_title": "\U0001F4CA Knowledge Challenge",
        "btn_text": "Submit Answer",
        "lang_attr": "en",
        "meta_name": "Pei Yi",
        "desc": "MS Pei Yi - Teachers' Day Celebration",
        "msg_wall_title": "Student Messages",
        "view_more_btn": ">View More Messages</button>",
        "back_text": "← Return to Celebration Page",
    },
    {
        "file": "ye-you-di.html",
        "color": "#2196F3",
        "lang": "zh",
        "icon": "⚽",
        "name": "叶优蒂老师",
        "title": "体育教师",
        "message": "感谢叶优蒂老师用充沛的活力和热情带领我们上好每一节体育课。从田径场上飞奔到球类运动的配合，每一次锻炼都让我们在运动中收获快乐与健康。您总能在训练中鼓励学生突破自我、超越极限，让我们懂得了体育精神的真谛——坚持不懈、团结合作、永不言弃。您对体育的热爱感染了我们每一个人，让我们在汗水中体会到了健康的重要性。祝您教师节快乐！",
        "quote": "\"生命在于运动。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "叶优蒂",
        "desc": "叶优蒂老师 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "xie-an-qi.html",
        "color": "#808080",
        "lang": "zh",
        "icon": "\U0001F4BB",
        "name": "谢侒琪老师",
        "title": "电脑老师",
        "message": "感谢谢侒琪老师用前沿的知识和热情带我们走进信息技术的世界。从编程入门到软件应用，从网络了解到信息安全，您总能把复杂的电脑知识讲解得通俗易懂。在课堂上，您鼓励我们动手实践，培养解决问题的逻辑思维，让我们在代码的世界中发现了无穷的乐趣。您对计算机科学的热爱深深感染着我们每一个人，也为我们未来的数字化时代奠定了坚实的基础。祝您教师节快乐！",
        "quote": "\"科技改变生活。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "谢侒琪",
        "desc": "谢侒琪老师 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "cikgu-shula.html",
        "color": "#4CAF50",
        "lang": "ms",
        "icon": "\U0001F33A",
        "name": "Cikgu Shula",
        "title": "Guru Bahasa Malaysia",
        "message": "Terima kasih, Cikgu Shula, kerana mengajar Bahasa Malaysia dengan penuh semangat dan dedikasi. Setiap pelajaran cikgu sentiasa interaktif dan menyeronokkan, membuatkan kami lebih cinta terhadap bahasa ibu. Dari tatabahasa hingga karya sastera, cikgu sentiasa memberi penjelasan yang jelas dan mudah difahami. Semangat cikgu dalam mengajar telah mendorong kami untuk lebih aktif berbual dan menulis dalam Bahasa Melayu. Selamat Hari Guru!",
        "quote": "\"Bahasa ibadat intelek.\"",
        "quiz_title": "\U0001F4CA Cabaran Ilmu",
        "btn_text": "Hantar Jawapan",
        "lang_attr": "ms",
        "meta_name": "Shula",
        "desc": "Cikgu Shula - Perayaan Hari Guru",
        "msg_wall_title": "Suratan Pelajar",
        "view_more_btn": ">Lihat Lagi Mesej</button>",
        "back_text": "← Kembali ke Halaman Perayaan",
    },
    {
        "file": "li-wei-ren.html",
        "color": "#1565C0",
        "lang": "zh",
        "icon": "\U0001F52C",
        "name": "李伟仁老师",
        "title": "化学老师",
        "message": "感谢李伟仁老师带领我们探索奇妙的化学世界。从元素周期表的奥秘到化学反应的奇妙变化，从酸碱中和到有机合成的奥秘，您总能把抽象的化学概念变成生动的实验和有趣的例子。在课堂上，那些绚丽多彩的化学实验让我们惊叹不已，也激发了我们对科学的浓厚兴趣。您严谨的治学态度和精益求精的实验精神深深感染了我们每一个人。祝您教师节快乐！",
        "quote": "\"化学反应探索未知。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "李伟仁",
        "desc": "李伟仁老师 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "hu-yu-wen.html",
        "color": "#00BCD4",
        "lang": "zh",
        "icon": "\U0001F4DD",
        "name": "胡瑜文老师",
        "title": "辅导老师",
        "message": "感谢胡瑜文老师如同温暖春风般的关怀与辅导。每一次谈心都能让我们感受到您的真诚和善意，您的耐心倾听和巧妙指引帮助我们走出了许多困惑和迷茫。在您的帮助下，我们不仅学会了如何面对学习上的挑战，更学会了如何调节情绪、管理压力、建立自信。您是同学们心中的良师益友，用智慧和爱心点亮了我们的前行之路。祝您教师节快乐！",
        "quote": "\"辅导点亮学生前程。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "胡瑜文",
        "desc": "胡瑜文老师 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "guo-li-mei.html",
        "color": "#CE93D8",
        "lang": "zh",
        "icon": "\U0001F4D0",
        "name": "郭丽梅老师",
        "title": "数学老师",
        "message": "感谢郭丽梅老师引领我们领略数学的魅力。从代数方程的精妙到几何图形的对称美，从函数曲线的变化规律到概率统计的应用之广，您总能把复杂的数学问题化繁为简，用清晰的逻辑引导我们发现解题的思路。在课堂上，当一道道难题迎刃而解时，那种成就感是无与伦比的。您教会我们用数学思维去观察和分析世界，这份能力将让我们受益终生。祝您教师节快乐！",
        "quote": "\"数学是思维的体操。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "郭丽梅",
        "desc": "郭丽梅老师 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "huang-yu-mei.html",
        "color": "#AB47BC",
        "lang": "zh",
        "icon": "\U0001F39F",
        "name": "黄玉梅助理",
        "title": "训育处助理",
        "message": "感谢黄玉梅助理在学生训育方面付出的大量心血。无论是日常管理还是学生关怀，您总是耐心细致、认真负责。每次活动筹备、每次纪律维持，都有您默默奉献的身影。您用实际行动诠释了什么是爱岗敬业，用细心关爱着每一位学生的成长和进步。您的温暖和友善让学校成为了一个更加有爱的大家庭。祝您教师节快乐！",
        "quote": "\"细心关爱每位学生。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "黄玉梅",
        "desc": "黄玉梅助理 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "wang-ming-yu.html",
        "color": "#FFD700",
        "lang": "zh",
        "icon": "\U0001F451",
        "name": "王明浴校长",
        "title": "校长",
        "message": "感谢王明浴校长对学校的卓越领导和无私奉献。您以深远的教育眼光和宽广的胸怀，为学校的发展指明方向，为师生们创造了良好的学习和工作环境。您的每一句教诲、每一次讲话都蕴含着深刻的教育智慧，激励着我们不断追求卓越。在学校管理中，您既严格要求又充满人文关怀，让校园充满了积极向上的氛围。感谢您的辛勤付出，祝您教师节快乐！",
        "quote": "\"校长的智慧引领学校前进。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "王明浴",
        "desc": "王明浴校长 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "cai-wen-xing.html",
        "color": "#1E88E5",
        "lang": "zh",
        "icon": "\U0001F4CB",
        "name": "蔡文兴老师",
        "title": "教务处主任",
        "message": "感谢蔡文兴老师在教务管理方面做出的卓越贡献。教学计划安排、课程协调统筹、教学质量监督，每一项工作都做得井井有条。您以丰富的管理经验和专业的教育素养，确保了学校教学工作的有序进行。在日常工作中，您总是耐心解答老师们的疑问，积极协调各方资源，为全校师生营造了良好的教学环境。您的责任心和敬业精神值得我们学习。祝您教师节快乐！",
        "quote": "\"教务有序，教学有方。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "蔡文兴",
        "desc": "蔡文兴老师 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "wu-shao-bin.html",
        "color": "#EC4899",
        "lang": "zh",
        "icon": "\U0001F4CB",
        "name": "吴绍宾老师",
        "title": "教务处",
        "message": "感谢吴绍宾老师在教务工作中的认真付出和优质服务。无论日常教学安排的琐碎事务，还是需要协调处理的紧急工作，您总是以饱满的工作热情和高度负责的态度对待每一项任务。您用实际行动诠释了什么是敬业乐业，用耐心和细心保障了学校教学的正常运转。感谢您为老师和学生们提供的便利与支持。祝您教师节快乐！",
        "quote": "\"认真负责，服务师生。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "吴绍宾",
        "desc": "吴绍宾老师 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "zhou-xin-yi.html",
        "color": "#F06292",
        "lang": "zh",
        "icon": "\U0001F4D6",
        "name": "周欣宜老师",
        "title": "华文老师",
        "message": "感谢周欣宜老师对华文教学的满腔热忱与辛勤耕耘。在您的课堂上，我们领略到了中华文化的博大精深和汉语文字的优雅魅力。从经典古文到现代文学，从写作技巧到口语表达，您用生动有趣的教学方式激发了我们学习华文的兴趣。您不仅传授知识，更注重培养学生的语文素养和文化认同，让我们在优美的文字世界中成长。祝您教师节快乐！",
        "quote": "\"华文是我们最美的语言。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "周欣宜",
        "desc": "周欣宜老师 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "zhai-xuan-ren.html",
        "color": "#26A69A",
        "lang": "zh",
        "icon": "⚛",
        "name": "翟宣仁老师",
        "title": "科学物理老师",
        "message": "感谢翟宣仁老师带我们走进神奇的大自然，探索物理世界的奥秘。从力学原理到电磁感应，从光学折射到热学能量转换，您总能把抽象的物理定律用实验和生活中的实例生动地展现出来。课堂上那些精彩的物理实验让我们大开眼界，也让我们对自然法则产生了浓厚的兴趣。您严谨求实的科学态度和善于引导的教学方法，让我们在学习物理的过程中收获了知识与快乐。祝您教师节快乐！",
        "quote": "\"探索物理的奥秘。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "翟宣仁",
        "desc": "翟宣仁老师 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "li-shu-jun.html",
        "color": "#26A69A",
        "lang": "zh",
        "icon": "\U0001F52C",
        "name": "李淑君老师",
        "title": "科学老师",
        "message": "感谢李淑君老师带领我们打开自然科学的大门。从动植物的奥秘到生态系统的平衡，从物质的构成到能量的转化，您用丰富的知识和生动的教学让我们爱上了科学。每一次实验课都是我们最期待的时光，在您的指导下，我们亲手操作、观察现象、得出结论，真正体验到了科学探究的乐趣。您教会我们用科学的眼光看待世界，用严谨的方法分析问题。祝您教师节快乐！",
        "quote": "\"科学知识改变未来。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "李淑君",
        "desc": "李淑君老师 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "liu-guo-liang.html",
        "color": "#1565C0",
        "lang": "zh",
        "icon": "\U0001F3DA",
        "name": "刘国梁老师",
        "title": "历史老师",
        "message": "感谢刘国梁老师用精彩的故事带我们穿越历史的长河。从古代文明的辉煌到近现代的变革，从重大战役的硝烟到思想文化的碰撞，每一堂课都是一场引人入胜的历史之旅。您总能把年代久远的历史事件讲得像故事一样精彩，让我们在聆听历史的过程中感悟智慧、启迪思考。您对历史的热爱和对教育的执着深深感染了我们每一个人，让我们在回顾过去的同时更好地展望未来。祝您教师节快乐！",
        "quote": "\"以史为鉴，可以知兴替。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "刘国梁",
        "desc": "刘国梁老师 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
    {
        "file": "chen-shi-hui.html",
        "color": "#FF9800",
        "lang": "zh",
        "icon": "\U0001F84A",
        "name": "陈诗会老师",
        "title": "教师",
        "message": "感谢陈诗会老师在教学工作中的辛勤付出和无私奉献。您对教育事业的热爱体现在每一堂精心准备的课中，对学生们的耐心指导和真诚关怀让我们深深感受到教师这一职业的神圣。在日常生活中，您以身作则，用实际行动诠释着什么叫做用心育人。您用爱心、耐心和责任心浇灌着我们的成长，让我们在知识的海洋中自由遨游。祝您教师节快乐！",
        "quote": "\"学无止境，教也有痕。\"",
        "quiz_title": "\U0001F4CA 知识挑战",
        "btn_text": "提交答案",
        "lang_attr": "zh",
        "meta_name": "陈诗会",
        "desc": "陈诗会老师 - 教师节庆祝",
        "msg_wall_title": "学生留言",
        "view_more_btn": ">查看更多留言</button>",
        "back_text": "← 返回庆祝页面",
    },
]

# Message definitions per language
CHINESE_MESSAGES = [
    ("黄宥敏", "祝全体老师，身体健康、教师节快乐！"),
    ("吴紫涵", "老师开心就好。"),
    ("侯甜芊", "祝全体老师身体健康。"),
    ("李韡翰", "衷心祝愿所有老师节日快乐！愿您身体健康、工作顺利、生活幸福、万事如意；愿岁月温柔以待，所付出的每一份努力都能收获满园芬芳，桃李满天下，初心永不改！🌸📚✨"),
    ("老师", f"老师的课堂总是充满知识，每一个知识点都像宝藏一样精彩。"),
    ("老师", "以前觉得这门课很枯燥，是老师让我发现原来这么有意思。"),
    ("老师", "老师教我们以正确的态度面对学习中的困难。"),
    ("老师", "老师分享的知识让我们视野变得更加开阔。"),
]

BM_MESSAGES = [
    ("Malikalam", "Setiap guru yang dedikasi membawa cahaya ilmu kepada murid-muridnya."),
    ("吴紫涵", "Terima kasih atas jasa dan usaha cikgu selama ini."),
    ("侯甜芊", "Semoga cikgu sentiasa diberi kesehatan dan kebahagiaan."),
    ("Malikalam", "Cikgu bukan sekadar mengajar tetapi juga membentuk watak generasi akan datang."),
    ("Guru", "Cikgu sentiasa memberi yang terbaik dalam setiap pengajaran."),
    ("Guru", "Belajar di kelas cikgu sangat menyenangkan dan bermakna."),
    ("Guru", "Terima kasih atas kesabaran dan jasa baik cikgu sepanjang tahun ini."),
    ("Guru", "Semoga cikgu sentiasa sihat dan gembira."),
]

EN_MESSAGES = [
    ("Malikalam", "Every dedicated teacher brings the light of knowledge to students."),
    ("吴紫涵", "Thank you for your service and efforts this year."),
    ("侯甜芊", "Wishing you continued health and happiness."),
    ("Malikalam", "A teacher shapes not just minds but the character of future generations."),
    ("Teacher", "Your classes are always informative and full of inspiration."),
    ("Teacher", "Learning in your class is an absolute pleasure and joy."),
    ("Teacher", "Thank you for your patience and dedication to teaching."),
    ("Teacher", "Your lessons have broadened our horizons greatly."),
]

HIDDEN_MESSAGES_ZH = [
    ("老师", "老师的教学让我们明白学习不仅仅是记忆知识。"),
    ("老师", "感谢老师用耐心和智慧引导我们成长。"),
    ("老师", "老师的课总是让人意犹未尽，下课铃响时还在回味刚才的内容。"),
    ("老师", "因为老师的教导，我开始主动阅读相关的书籍。"),
    ("老师", "老师教会我们理解知识不是简单的背诵，而是思考与反思。"),
]

HIDDEN_MESSAGES_MS = [
    ("Guru", "Cikgu ajar kami bahawa belajar tidak pernah berakhir."),
    ("Guru", "Setiap pelajaran cikgu penuh dengan ilmu yang berharga."),
    ("Guru", "Cikgu adalah teladan yang baik untuk kami semua."),
    ("Guru", "Doa kami agar cikgu sentiasa dilimpahi rezeki dan kebahagiaan."),
    ("Guru", "Ilmu yang cikgu kongsi amat berguna dalam kehidupan kami."),
]

HIDDEN_MESSAGES_EN = [
    ("Teacher", "You have inspired us to become lifelong learners."),
    ("Teacher", "Every lesson with you is filled with valuable insights."),
    ("Teacher", "You are a true role model for all of us."),
    ("Teacher", "Our prayers go out for your health, happiness, and continued success."),
]


def get_messages(lang):
    """Get visible messages based on language."""
    if lang == "ms":
        return BM_MESSAGES
    elif lang == "en":
        return EN_MESSAGES
    else:
        return CHINESE_MESSAGES


def get_hidden_messages(lang):
    """Get hidden messages based on language."""
    if lang == "ms":
        return HIDDEN_MESSAGES_MS
    elif lang == "en":
        return HIDDEN_MESSAGES_EN
    else:
        return HIDDEN_MESSAGES_ZH


def build_message_html(visible_msgs, hidden_msgs, prefix_idx):
    """Build message wall HTML."""
    html_parts = []

    # Visible messages
    for name, text in visible_msgs:
        html_parts.append(
            f'<div class="message-item"><p class="message-sender">{name}</p>'
            f'<p class="message-text">{text}</p></div>\n                    '
        )

    # Hidden messages
    for name, text in hidden_msgs:
        html_parts.append(
            f'<div class="message-item hidden-message"><p class="message-sender">'
            f'{name}</p><p class="message-text">{text}</p></div>\n                    '
        )

    return ''.join(html_parts)


def generate_page(t):
    """Read template, copy to temp, replace colors, then replace content."""
    dest = os.path.join(OUTPUT_DIR, t["file"])

    # Step 1: Copy template to temp
    import shutil
    shutil.copy2(TEMPLATE, TMP)

    # Step 2: Replace all template gray colors with theme color
    content = replace_color_in_file(TMP, t["color"])

    # Verify no remaining template grays
    if 'rgba(117, 117, 117,' in content:
        print(f"  WARNING: Still has rgba(117,117,117) in {t['file']}")
    if '#757575' in content:
        print(f"  WARNING: Still has #757575 in {t['file']}")

    # Step 3: Read modified content
    with open(TMP, 'r', encoding='utf-8') as f:
        html = f.read()

    # Step 4: Replace HTML content
    # Avatar
    html = html.replace('<div class="profile-avatar">📜</div>',
                        f'<div class="profile-avatar">{t["icon"]}</div>')

    # Name
    html = html.replace("<h1 class=\"profile-name\">朱彦翰老师</h1>",
                        f"<h1 class=\"profile-name\">{t['name']}</h1>")

    # Title
    html = html.replace("<p class=\"profile-title\">历史老师</p>",
                        f"<p class=\"profile-title\">{t['title']}</p>")

    # Message paragraph - use regex since content varies
    html = re.sub(
        r'<p class="profile-message">\s*感谢.*?祝您教师节快乐！\s*</p>',
        f"<p class=\"profile-message\">\n                {t['message']}\n            </p>",
        html
    )

    # Quote
    html = re.sub(
        r'<div class="profile-quote">\s*"[^"]*"\s*</div>',
        f'<div class="profile-quote">\n                {t["quote"]}\n            </div>',
        html
    )

    # Back button text
    html = html.replace("← 返回庆祝页面", t["back_text"])
    # Also handle English version
    html = html.replace("← Return to Celebration Page", t["back_text"])

    # Quiz title
    html = html.replace("\U0001F4CA 知识挑战", t["quiz_title"])

    # Submit button
    html = html.replace("提交答案", t["btn_text"])

    # Language attribute
    html = html.replace('<html lang="zh">', f'<html lang="{t["lang_attr"]}">', 1)

    # Title tag
    html = html.replace("朱彦翰老师 | Teachers' Day",
                        f"{t['meta_name']} | Teachers' Day")

    # Meta description
    html = html.replace("朱彦翰老师 - Teachers' Day Celebration",
                        f"{t['desc']}")

    # Message wall title
    html = html.replace("<h3 class=\"message-wall-title\">学生留言</h3>",
                        f"<h3 class=\"message-wall-title\">{t['msg_wall_title']}</h3>")

    # View more button text
    html = html.replace(">查看更多留言</button>", t["view_more_btn"])

    # Message wall content
    visible = get_messages(t["lang"])
    hidden = get_hidden_messages(t["lang"])
    msg_html = build_message_html(visible, hidden, 0)

    # Replace entire message wall section
    html = re.sub(
        r'<!-- Message Wall -->\s*<div class="message-wall">.*?</div>\s*</div>\s*</main>',
        f'<!-- Message Wall -->\n            <div class="message-wall">\n                <h3 class="message-wall-title">{t["msg_wall_title"]}</h3>\n                <div class="message-wall-content">{msg_html}</div>\n                <button class="view-more-button" id="viewMoreButton">{t["view_more_btn"]}</button>\n            </div>\n        </div>\n    </main>',
        html, flags=re.DOTALL
    )

    # Step 5: Write output
    with open(dest, 'w', encoding='utf-8') as f:
        f.write(html)

    # Cleanup
    if os.path.exists(TMP):
        os.remove(TMP)

    return os.path.getsize(dest)


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    generated = []

    for teacher in teachers:
        fname = teacher["file"]
        print(f"Generating {fname}...")
        try:
            size = generate_page(teacher)
            generated.append((fname, size))
            print(f"  OK: {size:,} bytes")
        except Exception as e:
            print(f"  ERROR: {e}")
            import traceback
            traceback.print_exc()

    print("\n=== Generated Files ===")
    for fname, size in generated:
        print(f"  {fname}: {size:,} bytes")

    # Verify template unchanged
    with open(TEMPLATE, 'r', encoding='utf-8') as f:
        tpl = f.read()
    if '#757575' in tpl:
        print(f"\nTemplate VERIFIED unchanged ({len(tpl):,} chars)")
    else:
        print("\nERROR: Template was modified!")
        sys.exit(1)


if __name__ == "__main__":
    main()
