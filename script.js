const newsletters = [
    {
        title: '[런던] 2025년, 유럽 미술관에서 누굴 만날까 🎊',
        date: '2025. 1. 1.',
        thumbnail: 'https://img2.stibee.com/115188_2590822_1735663531116824430.jpg',
        link: 'https://museumexpress.stibee.com/p/19/'
    },
    {
        title: '[런던] 프랜시스 베이컨의 일그러진 초상화 😠',
        date: '2024. 12. 24.',
        thumbnail: 'https://img2.stibee.com/115188_2578718_1734967051050782575.jpg',
        link: 'https://museumexpress.stibee.com/p/18/'
    },
    {
        title: '[런던] 왕궁에서 만난 다빈치의 드로잉 ✍️',
        date: '2024. 12. 17.',
        thumbnail: 'https://img2.stibee.com/115188_2568599_1734447006690231902.jpg',
        link: 'https://museumexpress.stibee.com/p/17/'
    },
    {
        title: '[로마] 80대에 전성기를 맞은 할머니 화가 👵',
        date: '2024. 12. 10.',
        thumbnail: 'https://img2.stibee.com/115188_2555830_1733845786207685934.jpg',
        link: 'https://museumexpress.stibee.com/p/16/'
    },
    // ... 더 많은 뉴스레터 항목들
];

function createNewsletterItems() {
    const grid = document.getElementById('newsletterGrid');
    
    newsletters.forEach(newsletter => {
        const item = document.createElement('div');
        item.className = 'newsletter-item';
        
        item.innerHTML = `
            <a href="${newsletter.link}" target="_blank">
                <img src="${newsletter.thumbnail}" alt="썸네일 이미지">
                <h3>${newsletter.title}</h3>
                <p class="newsletter-date">${newsletter.date}</p>
            </a>
        `;
        
        grid.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createNewsletterItems();
    
    // 구독하기 버튼 이벤트
    const subscribeBtn = document.querySelector('.subscribe-btn');
    subscribeBtn.addEventListener('click', () => {
        window.location.href = 'https://museumexpress.stibee.com/subscribe/';
    });
});
