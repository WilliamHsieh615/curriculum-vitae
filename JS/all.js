// HERO 手機視差效果
const phone = document.getElementById('phone');
window.addEventListener('scroll', () => {
    const latestScrollY = window.scrollY;
    requestAnimationFrame(() => {
        phone.style.transform = `translateY(${latestScrollY * 0.25}px)`;
    });
});

// 橫向滾動色塊效果
const horizontalSection = document.querySelector('.horizontal-section');
const content = document.getElementById('horizontalContent');
function updateHorizontalScroll() {
    const sectionTop = horizontalSection.offsetTop;
    const startScroll = sectionTop;
    const endScroll = sectionTop + horizontalSection.offsetHeight - window.innerHeight;
    const scrollY = window.scrollY;
    if (scrollY >= startScroll && scrollY <= endScroll) {
        const progress = (scrollY - startScroll) / (endScroll - startScroll);
        const maxTranslate = content.scrollWidth - window.innerWidth;
        content.style.transform = `translateX(-${progress * maxTranslate}px)`;
    }
}
window.addEventListener('scroll', updateHorizontalScroll);
window.addEventListener('resize', updateHorizontalScroll);
// 初始化橫向滾動色塊效果
updateHorizontalScroll();

// 初始化 AOS
AOS.init({
    offset: 120,
    duration: 800,
    easing: 'ease-out',
    delay: 0,
    once: false
});