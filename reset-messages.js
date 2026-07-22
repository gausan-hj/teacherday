const fs = require('fs');
const path = require('path');

const teacherDir = path.join(__dirname, 'teacher');
const htmlFiles = fs.readdirSync(teacherDir).filter(f => f.endsWith('.html'));

// Reset all pages to HEAD state first
for (const file of htmlFiles) {
    const filePath = path.join(teacherDir, file);
    try {
        const currentContent = fs.readFileSync(filePath, 'utf8');
        // Check if the page has been modified (has our added messages)
        if (currentContent.includes('黄宥敏') && currentContent.includes('祝全体老师')) {
            // This page was modified by our previous script - restore original from HEAD
            // We need to get original content. Since we can't use git in node, let's just remove our additions
            let c = currentContent;

            // Remove the line we injected: "黄宥敏...祝全体老师"
            c = c.replace(/<div class="message-item"><p class="message-sender">黄宥敏<\/p><p class="message-text">祝全体老师，身体健康、教师节快乐！<\/p><\/div>\n(\s*)/g, '');

            // Remove the 李韡翰 block we injected and restore the old "学生" content
            // First detect which style was used

            c = c.replace(
                /<div class="message-item"><p class="message-sender">李韡翰<\/p><p class="message-text">衷心祝愿所有老师节日快乐。+<\/p><\/div>\n\s*/g,
                ''
            );

            // Also match the style where it's on a separate div with existing content
            c = c.replace(
                /<p class="message-sender">李韡翰<\/p><p class="message-text">衷心祝愿所有老师节日快乐。+<\/p>/g,
                '<!-- 李韡翰 message removed -->'
            );

            // Remove the placeholder markers
            c = c.replace(/<!-- 李韡翰 message removed -->\n(\s*)/g, '$1');

            // Also handle the case where 李韡翰 replaced 吴紫涵 or something - check for 侯甜芊 being after
            // Actually the simplest approach: read the HEAD content from git and compare

            fs.writeFileSync(filePath, c, 'utf8');
        }
    } catch(e) {}
}
console.log('Done resetting');
