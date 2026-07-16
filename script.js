/* ============================================
   Teachers' Day Landing Page - Premium JavaScript
   GPU-Accelerated Animations & Interactions
   ============================================ */

// Teacher Data with Questions and Answers
const teachers = [
    { name: "Cikgu RIZAN", color: "#E91E63", question: "Kata hubung terbahagi kepada berapa jenis?", answer: "3", url: "teacher/cikgu-rizan.html", lang: "malay" },
    { name: "詹晋沣老师", color: "#2196F3", question: "真空中的光速是多少 m/s？", answer: "300000000", url: "teacher/zhan-jinfeng.html", lang: "chinese" },
    { name: "林淑娟老师", color: "#F44336", question: "π 的前两位小数是多少？", answer: "3.14", url: "teacher/lin-shujuan.html", lang: "chinese" },
    { name: "Mrs. Vatsala", color: "#000000", question: "How many letters are there in the English alphabet?", answer: "26", url: "teacher/mrs-vatsala.html", lang: "english" },
    { name: "黄荣富老师", color: "#FF9800", question: "10² = ?", answer: "100", url: "teacher/huang-rongfu.html", lang: "chinese" },
    { name: "林素铭老师", color: "#00A0E9", question: "马来西亚独立于哪一年？", answer: "1957", url: "teacher/lin-suming.html", lang: "chinese" },
    { name: "许雍敏老师", color: "#C8A2FF", question: "三原色共有几种？", answer: "3", url: "teacher/teacher-linda.html", lang: "chinese" },
    { name: "蔡礼懃老师", color: "#D946EF", question: "联合国第11个可持续发展目标是什么？", answer: "可持续城市和社区", url: "teacher/cai-liken.html", lang: "chinese" },
    { name: "林家祺老师", color: "#1a1a1a", question: "联合国第12个可持续发展目标是什么？", answer: "负责任消费和生产", url: "teacher/lin-jiaqi.html", lang: "chinese" },
    { name: "Mrs. Pavithra", color: "#009688", question: "What is the past tense of 'write'?", answer: "wrote", url: "teacher/mrs-pavithra.html", lang: "english" },
    { name: "张佳玲", color: "#EC4899", question: "Komputer memerlukan apa untuk berfungsi?", answer: "kuasa", url: "teacher/zhang-jialing.html", lang: "malay" },
    { name: "黄慧婷", color: "#06B6D4", question: "汉字有多少个基本笔画？", answer: "8", url: "teacher/huang-huiting.html", lang: "chinese" },
    { name: "婧雯老师", color: "#9C27B0", question: "课业辅导的主要目的是什么？", answer: "帮助学生提高学业成绩", url: "teacher/jing-wen.html", lang: "chinese" },
    { name: "孙庆龄老师", color: "#2196F3", question: "课业辅导对学生有什么帮助？", answer: "提高学习能力和成绩", url: "teacher/sun-qingling.html", lang: "chinese" },
    { name: "Mrs. Subatra", color: "#F44336", question: "What is the past tense of 'go'?", answer: "went", url: "teacher/mrs-subatra.html", lang: "english" },
    { name: "崔家琪老师", color: "#2196F3", question: "生物科学主要研究什么？", answer: "生命现象和生物活动规律", url: "teacher/cui-jiaqi.html", lang: "chinese" },
    { name: "尤雪慧老师", color: "#2196F3", question: "电脑的基本组成部分有哪些？", answer: "硬件和软件", url: "teacher/you-xuehui.html", lang: "chinese" },
    { name: "洪星宇老师", color: "#808080", question: "夏威夷装饰有什么特色？", answer: "热带风情和自然元素", url: "teacher/hong-xingyu.html", lang: "chinese" },
    { name: "符丽娜老师", color: "#FFFFFF", question: "华文学习的重要性是什么？", answer: "传承中华文化", url: "teacher/fu-lina.html", lang: "chinese" },
    { name: "林亚鸾老师", color: "#FF8C00", question: "经济学研究的核心是什么？", answer: "资源分配", url: "teacher/lin-yalian.html", lang: "chinese" },
    { name: "黄爱玲老师", color: "#BA68C8", question: "班长带是什么颜色的？", answer: "紫色", url: "teacher/huang-ailing.html", lang: "chinese" },
    { name: "杜静颖老师", color: "#9B59B6", question: "学长带是什么颜色的？", answer: "蓝色/红色", url: "teacher/du-jingying.html", lang: "chinese" },
    { name: "罗凯欣老师", color: "#FFC107", question: "华文老师上课最喜欢穿什么颜色的衣服？", answer: "黄色", url: "teacher/luo-kaixin.html", lang: "chinese" }
];

// Fuzzy matching function for answer validation
const normalize = text => text.toLowerCase()
    .replace(/\s/g, "")
    .replace(/[^\w\u4e00-\u9fa5]/g, "")
    .replace(/与/g, "和")
    .replace(/及/g, "和")
    .replace(/之/g, "的");

function checkAnswer(userAnswer, correctAnswer) {
    return normalize(userAnswer).includes(normalize(correctAnswer));
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all effects
    initBokehEffect();
    initGoldenDust();
    initParticles();
    initSparkles();
    initTeacherNameAnimation();
    initParallaxEffect();
    initIntersectionObserver();
    initQuestionModal();
    initTeacherModeToggle();
});

/* ============================================
   Question Modal System
   ============================================ */

function initQuestionModal() {
    // Create modal HTML
    const modalHTML = `
        <div id="questionModal" class="question-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 id="modalTeacherName" class="modal-teacher-name"></h3>
                    <button class="modal-close" id="modalClose">&times;</button>
                </div>
                <div class="modal-body">
                    <p id="modalQuestion" class="modal-question"></p>
                    <input type="text" id="answerInput" class="answer-input" placeholder="输入你的答案..." autocomplete="off">
                    <p id="errorMessage" class="error-message"></p>
                </div>
                <div class="modal-footer">
                    <button id="submitAnswer" class="submit-button">提交答案</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Cache modal elements
    const modal = document.getElementById('questionModal');
    const modalTeacherName = document.getElementById('modalTeacherName');
    const modalQuestion = document.getElementById('modalQuestion');
    const answerInput = document.getElementById('answerInput');
    const submitButton = document.getElementById('submitAnswer');
    const closeButton = document.getElementById('modalClose');
    const errorMessage = document.getElementById('errorMessage');
    
    let currentTeacher = null;
    
    // Show modal with teacher data
    function showModal(teacher) {
        currentTeacher = teacher;
        modalTeacherName.textContent = teacher.name;
        modalQuestion.textContent = teacher.question;
        answerInput.value = '';
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
        modal.style.display = 'flex';
        answerInput.focus();
        
        // Update placeholder and button text based on language
        const placeholders = {
            malay: 'Masukkan jawapan anda...',
            english: 'Enter your answer...',
            chinese: '输入你的答案...'
        };
        const buttonTexts = {
            malay: 'Hantar Jawapan',
            english: 'Submit Answer',
            chinese: '提交答案'
        };
        const emptyErrors = {
            malay: 'Sila masukkan jawapan',
            english: 'Please enter an answer',
            chinese: '请输入答案'
        };
        const incorrectErrors = {
            malay: 'Jawapan tidak betul.',
            english: 'Incorrect answer.',
            chinese: '答案错误。'
        };
        
        answerInput.placeholder = placeholders[teacher.lang] || placeholders.english;
        submitButton.textContent = buttonTexts[teacher.lang] || buttonTexts.english;
        
        // Store error messages for later use
        currentTeacher.emptyError = emptyErrors[teacher.lang] || emptyErrors.english;
        currentTeacher.incorrectError = incorrectErrors[teacher.lang] || incorrectErrors.english;
    }
    
    // Hide modal
    function hideModal() {
        modal.style.display = 'none';
        currentTeacher = null;
    }
    
    // Close button handler
    closeButton.addEventListener('click', hideModal);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            hideModal();
        }
    });
    
    // Submit answer handler
    submitButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim();
        
        if (!userAnswer) {
            errorMessage.textContent = currentTeacher.emptyError || '请输入答案';
            errorMessage.style.display = 'block';
            return;
        }
        
        if (checkAnswer(userAnswer, currentTeacher.answer)) {
            // Correct answer - redirect
            window.location.href = currentTeacher.url;
        } else {
            // Incorrect answer - show language-specific error
            errorMessage.textContent = currentTeacher.incorrectError || '答案错误。';
            errorMessage.style.display = 'block';
            answerInput.value = '';
            answerInput.focus();
        }
    });
    
    // Submit on Enter key
    answerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            submitButton.click();
        }
    });
    
    // Expose showModal function globally
    window.showQuestionModal = showModal;
}

/* ============================================
   Teacher Name Card Click Handlers
   ============================================ */

function initTeacherCardClickHandlers() {
    document.querySelectorAll('.teacher-name-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get teacher name from card
            const teacherName = this.textContent.trim();
            
            // Find teacher data
            const teacher = teachers.find(t => t.name === teacherName);
            
            if (teacher) {
                // Show question modal
                if (window.showQuestionModal) {
                    window.showQuestionModal(teacher);
                }
            }
        });
    });
}

// Initialize teacher card handlers after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTeacherCardClickHandlers();
});

// Function to get particle count based on screen size
function getParticleCount(desktopCount, tabletCount, mobileCount) {
    const width = window.innerWidth;
    if (width <= 768) return mobileCount;
    if (width <= 1024) return tabletCount;
    return desktopCount;
}

/* ============================================
   Bokeh Effect Generator
   ============================================ */

function initBokehEffect() {
    const bokehContainer = document.getElementById('bokehContainer');
    if (!bokehContainer) return;

    const bokehCount = getParticleCount(8, 5, 3);
    const container = bokehContainer;

    for (let i = 0; i < bokehCount; i++) {
        const bokeh = document.createElement('div');
        bokeh.className = 'bokeh';

        // Random size
        const size = Math.random() * 100 + 50;
        bokeh.style.width = `${size}px`;
        bokeh.style.height = `${size}px`;

        // Random position
        bokeh.style.left = `${Math.random() * 100}%`;
        bokeh.style.top = `${Math.random() * 100}%`;

        // Random animation delay
        bokeh.style.animationDelay = `${Math.random() * 20}s`;
        bokeh.style.animationDuration = `${15 + Math.random() * 10}s`;

        container.appendChild(bokeh);
    }
}

/* ============================================
   Golden Dust Effect
   ============================================ */

function initGoldenDust() {
    const goldenDust = document.getElementById('goldenDust');
    if (!goldenDust) return;

    const dustCount = getParticleCount(25, 15, 8);
    const container = goldenDust;

    for (let i = 0; i < dustCount; i++) {
        const dust = document.createElement('div');
        dust.className = 'dust-particle';
        
        // Random position
        dust.style.left = `${Math.random() * 100}%`;
        dust.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        dust.style.animationDelay = `${Math.random() * 25}s`;
        dust.style.animationDuration = `${20 + Math.random() * 15}s`;
        
        container.appendChild(dust);
    }
}

/* ============================================
   Floating Particles
   ============================================ */

function initParticles() {
    const particlesContainer = document.getElementById('particlesContainer');
    if (!particlesContainer) return;

    const particleCount = getParticleCount(10, 6, 4);
    const container = particlesContainer;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 30}s`;
        particle.style.animationDuration = `${25 + Math.random() * 20}s`;
        
        container.appendChild(particle);
    }
}

/* ============================================
   Sparkles Effect
   ============================================ */

function initSparkles() {
    const sparklesContainer = document.getElementById('sparklesContainer');
    if (!sparklesContainer) return;

    const sparkleCount = getParticleCount(12, 8, 5);
    const container = sparklesContainer;

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 8 + 4;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        // Random animation delay
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        sparkle.style.animationDuration = `${2 + Math.random() * 2}s`;
        
        container.appendChild(sparkle);
    }
}

/* ============================================
   Teacher Name Animation System - Performance Optimized
   ============================================ */

let randomAppearanceTimeout = null;
let teacherMovementTimeout = null;

function initTeacherNameAnimation() {
    // Cache DOM elements
    const nameCards = document.querySelectorAll('.teacher-name-card');
    const namesContainer = document.getElementById('namesContainer');
    
    if (!namesContainer || nameCards.length === 0) return;
    
    // Cache container dimensions
    const containerRect = namesContainer.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    
    // Badge radius (450px badge / 2 = 225px)
    const badgeRadius = 225;
    
    // Center Safe Zone - teacher cards cannot enter this area
    const safeZoneRadius = badgeRadius + 100;
    
    // Radius range for circular distribution
    const minRadius = safeZoneRadius + 40;
    const maxRadius = minRadius + 150;
    
    // Cache card dimensions (only read once)
    const cardDimensions = Array.from(nameCards).map(card => {
        const rect = card.getBoundingClientRect();
        return {
            width: rect.width,
            height: rect.height
        };
    });
    
    // Animation state for each card
    const cardStates = Array.from(nameCards).map((card, index) => ({
        element: card,
        currentX: 0,
        currentY: 0,
        targetX: 0,
        targetY: 0,
        currentAngle: 0,
        targetAngle: 0,
        currentRadius: 0,
        targetRadius: 0,
        isVisible: false,
        isAnimating: false,
        animationStartTime: 0,
        animationDuration: 0,
        isGlowing: false,
        cardWidth: cardDimensions[index].width,
        cardHeight: cardDimensions[index].height
    }));
    
    // Collision detection with 100 attempt limit
    function checkCollision(x, y, cardWidth, cardHeight, existingPositions) {
        const minDistance = Math.max(cardWidth, cardHeight) + 80;
        
        for (const pos of existingPositions) {
            const dx = x - pos.x;
            const dy = y - pos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < minDistance) {
                return true;
            }
        }
        return false;
    }
    
    function isInSafeZone(x, y) {
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < safeZoneRadius;
    }
    
    // Generate positions with 100 attempt limit to prevent infinite loop
    function generateNonOverlappingPositions() {
        const positions = [];
        
        for (let i = 0; i < cardStates.length; i++) {
            const cardWidth = cardStates[i].cardWidth;
            const cardHeight = cardStates[i].cardHeight;
            
            let validPosition = false;
            let x, y, angle, radius;
            let attempts = 0;
            const maxAttempts = 100;
            
            while (!validPosition && attempts < maxAttempts) {
                attempts++;
                angle = Math.random() * Math.PI * 2;
                radius = minRadius + Math.random() * (maxRadius - minRadius);
                
                const offsetX = (Math.random() - 0.5) * 40;
                const offsetY = (Math.random() - 0.5) * 40;
                
                x = centerX + Math.cos(angle) * radius + offsetX - cardWidth / 2;
                y = centerY + Math.sin(angle) * radius + offsetY - cardHeight / 2;
                
                x = Math.max(20, Math.min(containerWidth - cardWidth - 20, x));
                y = Math.max(20, Math.min(containerHeight - cardHeight - 20, y));
                
                if (isInSafeZone(x + cardWidth / 2, y + cardHeight / 2)) {
                    continue;
                }
                
                if (!checkCollision(x, y, cardWidth, cardHeight, positions)) {
                    validPosition = true;
                    positions.push({ x, y, angle, radius });
                }
            }
            
            // If failed after 100 attempts, use a fallback position
            if (!validPosition) {
                angle = Math.random() * Math.PI * 2;
                radius = minRadius + Math.random() * (maxRadius - minRadius);
                x = centerX + Math.cos(angle) * radius - cardWidth / 2;
                y = centerY + Math.sin(angle) * radius - cardHeight / 2;
                x = Math.max(20, Math.min(containerWidth - cardWidth - 20, x));
                y = Math.max(20, Math.min(containerHeight - cardHeight - 20, y));
                positions.push({ x, y, angle, radius });
            }
        }
        
        return positions;
    }
    
    // Initialize positions
    const positions = generateNonOverlappingPositions();
    
    cardStates.forEach((state, index) => {
        if (index < positions.length) {
            const pos = positions[index];
            state.currentX = pos.x;
            state.currentY = pos.y;
            state.currentAngle = pos.angle;
            state.currentRadius = pos.radius;
            state.targetAngle = pos.angle;
            state.targetRadius = pos.radius;
            
            // Use transform only for positioning (no layout thrashing)
            state.element.style.left = '0';
            state.element.style.top = '0';
            state.element.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
            state.element.style.opacity = '0';
            state.element.style.pointerEvents = 'none';
        }
    });
    
    // Random teacher appearance cycle
    function startRandomAppearanceCycle() {
        const visibleCount = 2 + Math.floor(Math.random() * 3);
        
        const shuffled = [...cardStates].sort(() => Math.random() - 0.5);
        const selectedTeachers = shuffled.slice(0, visibleCount);
        
        cardStates.forEach(state => {
            state.isVisible = false;
            state.isGlowing = false;
            state.element.style.opacity = '0';
            state.element.style.pointerEvents = 'none';
            state.element.classList.remove('visible');
        });
        
        selectedTeachers.forEach((state, index) => {
            const delay = index * 300;
            
            setTimeout(() => {
                state.element.style.transition = 'opacity 0.5s ease-in-out';
                state.element.style.opacity = '1';
                state.element.style.pointerEvents = 'auto';
                state.element.classList.add('visible');
                state.isVisible = true;
                state.isGlowing = true;
                
                const stayDuration = 2000 + Math.random() * 2000;
                
                setTimeout(() => {
                    state.element.style.opacity = '0';
                    state.element.style.pointerEvents = 'none';
                    state.element.classList.remove('visible');
                    state.isVisible = false;
                    state.isGlowing = false;
                    
                    setTimeout(() => {
                        const newPositions = generateNonOverlappingPositions();
                        const posIndex = cardStates.indexOf(state);
                        if (posIndex < newPositions.length) {
                            const newPos = newPositions[posIndex];
                            state.currentX = newPos.x;
                            state.currentY = newPos.y;
                            state.currentAngle = newPos.angle;
                            state.currentRadius = newPos.radius;
                            state.element.style.transform = `translate3d(${newPos.x}px, ${newPos.y}px, 0)`;
                        }
                    }, 500);
                }, stayDuration);
            }, delay);
        });
        
        const cycleDelay = 4000 + Math.random() * 2000;
        randomAppearanceTimeout = setTimeout(startRandomAppearanceCycle, cycleDelay);
    }
    
    setTimeout(startRandomAppearanceCycle, 1000);
    
    // Page visibility handling
    let isPageVisible = true;
    
    document.addEventListener('visibilitychange', () => {
        isPageVisible = !document.hidden;
    });
    
    // Lower frequency teacher movement - only 1-2 teachers every 3-5 seconds
    function scheduleTeacherMovement() {
        if (!isPageVisible) {
            teacherMovementTimeout = setTimeout(scheduleTeacherMovement, 5000);
            return;
        }
        
        const visibleTeachers = cardStates.filter(s => s.isVisible && s.isGlowing);
        if (visibleTeachers.length === 0) {
            teacherMovementTimeout = setTimeout(scheduleTeacherMovement, 3000);
            return;
        }
        
        // Select 1-2 random visible teachers to move
        const teachersToMove = visibleTeachers
            .sort(() => Math.random() - 0.5)
            .slice(0, Math.min(2, visibleTeachers.length));
        
        teachersToMove.forEach(state => {
            if (state.isAnimating) return;
            
            const cardWidth = state.cardWidth;
            const cardHeight = state.cardHeight;
            
            const angleChange = (Math.random() - 0.5) * 0.3;
            const radiusChange = (Math.random() - 0.5) * 30;
            
            let newAngle = state.currentAngle + angleChange;
            let newRadius = Math.max(minRadius, Math.min(maxRadius, state.currentRadius + radiusChange));
            
            const offsetX = (Math.random() - 0.5) * 30;
            const offsetY = (Math.random() - 0.5) * 30;
            
            let newX = centerX + Math.cos(newAngle) * newRadius + offsetX - cardWidth / 2;
            let newY = centerY + Math.sin(newAngle) * newRadius + offsetY - cardHeight / 2;
            
            newX = Math.max(20, Math.min(containerWidth - cardWidth - 20, newX));
            newY = Math.max(20, Math.min(containerHeight - cardHeight - 20, newY));
            
            if (isInSafeZone(newX + cardWidth / 2, newY + cardHeight / 2)) {
                return;
            }
            
            const otherPositions = visibleTeachers
                .filter(s => s !== state)
                .map(s => ({ x: s.currentX, y: s.currentY }));
            
            if (!checkCollision(newX, newY, cardWidth, cardHeight, otherPositions)) {
                state.targetAngle = newAngle;
                state.targetRadius = newRadius;
                animateCardToPosition(state, newX, newY, newAngle);
            }
        });
        
        // Schedule next movement in 3-5 seconds
        teacherMovementTimeout = setTimeout(scheduleTeacherMovement, 3000 + Math.random() * 2000);
    }
    
    // Animate card using transform only (no layout thrashing)
    function animateCardToPosition(state, targetX, targetY, targetAngle) {
        state.isAnimating = true;
        state.targetX = targetX;
        state.targetY = targetY;
        state.targetAngle = targetAngle;
        
        const startX = state.currentX;
        const startY = state.currentY;
        const startTime = performance.now();
        const duration = 1500 + Math.random() * 500;
        
        function animate(currentTime) {
            if (!isPageVisible) {
                // Skip animation if page is hidden
                state.isAnimating = false;
                return;
            }
            
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeProgress = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            state.currentX = startX + (targetX - startX) * easeProgress;
            state.currentY = startY + (targetY - startY) * easeProgress;
            state.currentAngle = state.currentAngle + (targetAngle - state.currentAngle) * easeProgress;
            
            // Use transform only (no left/top changes)
            state.element.style.transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0)`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                state.isAnimating = false;
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // Start movement scheduler
    setTimeout(scheduleTeacherMovement, 3000);
    
    // Handle resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newContainerRect = namesContainer.getBoundingClientRect();
            const newCenterX = newContainerRect.width / 2;
            const newCenterY = newContainerRect.height / 2;
            
            const newPositions = generateNonOverlappingPositions();
            
            cardStates.forEach((state, index) => {
                if (index < newPositions.length) {
                    const pos = newPositions[index];
                    state.currentX = pos.x;
                    state.currentY = pos.y;
                    state.currentAngle = pos.angle;
                    state.currentRadius = pos.radius;
                    state.element.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
                }
            });
        }, 250);
    });
}

/* ============================================
   Parallax Effect
   ============================================ */

function initParallaxEffect() {
    const badgeContainer = document.querySelector('.badge-container');
    if (!badgeContainer) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
        mouseY = (e.clientY - window.innerHeight / 2) / window.innerHeight;
    });
    
    function updateParallax() {
        // Smooth interpolation
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;
        
        // Apply subtle parallax to badge
        const parallaxX = targetX * 10;
        const parallaxY = targetY * 10;
        
        badgeContainer.style.transform = `translate3d(${parallaxX}px, ${parallaxY}px, 0)`;
        
        requestAnimationFrame(updateParallax);
    }
    
    updateParallax();
}

/* ============================================
   Intersection Observer for Performance
   ============================================ */

function initIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);
    
    // Observe main sections
    const sections = document.querySelectorAll('.badge-section, .teacher-names-section, .instruction-section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

/* ============================================
   Performance Optimization
   ============================================ */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ============================================
   Click Event Handlers
   ============================================ */

// Add click handlers to teacher name cards with memory-safe ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

document.querySelectorAll('.teacher-name-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Create ripple element
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.cssText = `
            position: absolute;
            width: 100px;
            height: 100px;
            background: rgba(255, 215, 0, 0.5);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: rippleEffect 0.6s ease-out forwards;
            pointer-events: none;
        `;
        
        const rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        
        this.appendChild(ripple);
        
        // Auto-remove after animation to prevent memory leak
        setTimeout(() => {
            if (ripple.parentNode === this) {
                this.removeChild(ripple);
            }
        }, 600);
    });
});

/* ============================================
   Loading State Management
   ============================================ */

// Hide loading state when page is ready
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

/* ============================================
   Accessibility Enhancements
   ============================================ */

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('reduced-motion');
}

// Keyboard navigation enhancement
document.querySelectorAll('.teacher-name-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

/* ============================================
   Teacher Mode Toggle
   ============================================ */

let isTeacherMode = false;
let mouseFollowAnimationId = null;

function initTeacherModeToggle() {
    const toggleButton = document.getElementById('teacherModeToggle');
    const namesContainer = document.getElementById('namesContainer');
    const badgeContainer = document.querySelector('.badge-container');
    
    if (!toggleButton || !namesContainer || !badgeContainer) return;
    
    toggleButton.addEventListener('click', () => {
        isTeacherMode = !isTeacherMode;
        
        if (isTeacherMode) {
            // Enable teacher mode
            toggleButton.classList.add('active');
            toggleButton.querySelector('.toggle-text').textContent = '退出老师模式';
            namesContainer.classList.add('teacher-mode');
            badgeContainer.classList.add('teacher-mode');
            
            // Check if device supports mouse (not mobile/tablet)
            if (window.innerWidth > 1024) {
                namesContainer.classList.add('mouse-follow');
                startMouseFollowEffect();
            }
        } else {
            // Disable teacher mode
            toggleButton.classList.remove('active');
            toggleButton.querySelector('.toggle-text').textContent = '老师专用入口';
            namesContainer.classList.remove('teacher-mode');
            namesContainer.classList.remove('mouse-follow');
            badgeContainer.classList.remove('teacher-mode');
            
            // Stop mouse follow effect
            stopMouseFollowEffect();
            
            // Reinitialize teacher name animation
            setTimeout(() => {
                initTeacherNameAnimation();
            }, 500);
        }
    });
}

function startMouseFollowEffect() {
    document.addEventListener('mousemove', handleMouseMoveForTeacherMode);
}

function stopMouseFollowEffect() {
    document.removeEventListener('mousemove', handleMouseMoveForTeacherMode);
    if (mouseFollowAnimationId) {
        cancelAnimationFrame(mouseFollowAnimationId);
        mouseFollowAnimationId = null;
    }
    
    // Reset transform
    const namesContainer = document.getElementById('namesContainer');
    if (namesContainer) {
        namesContainer.style.transform = 'translate(0, 0)';
    }
}

function handleMouseMoveForTeacherMode(e) {
    const namesContainer = document.getElementById('namesContainer');
    if (!namesContainer || !isTeacherMode || window.innerWidth <= 1024) return;
    
    // Smooth follow with requestAnimationFrame
    if (mouseFollowAnimationId) {
        cancelAnimationFrame(mouseFollowAnimationId);
    }
    
    mouseFollowAnimationId = requestAnimationFrame(() => {
        const containerRect = namesContainer.getBoundingClientRect();
        const containerCenterX = containerRect.left + containerRect.width / 2;
        const containerCenterY = containerRect.top + containerRect.height / 2;
        
        // Calculate offset from center
        const offsetX = e.clientX - containerCenterX;
        const offsetY = e.clientY - containerCenterY;
        
        // Limit maximum offset to 25px
        const maxOffset = 25;
        const limitedOffsetX = Math.max(-maxOffset, Math.min(maxOffset, offsetX * 0.1));
        const limitedOffsetY = Math.max(-maxOffset, Math.min(maxOffset, offsetY * 0.1));
        
        // Apply transform
        namesContainer.style.transform = `translate(${limitedOffsetX}px, ${limitedOffsetY}px)`;
    });
}

/* ============================================
   Console Message for Developers
   ============================================ */

console.log('%cTeachers\' Day Landing Page', 'font-size: 24px; font-weight: bold; color: #FFD700;');
console.log('%cDesigned with premium quality animations and effects', 'font-size: 14px; color: #FFA500;');
console.log('%cGPU-accelerated for smooth 60 FPS performance', 'font-size: 12px; color: #FFD700;');
