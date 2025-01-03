const newsletters = [
    {
        title: '[런던] 2025년, 유럽 미술관에서 누굴 만날까 🎊',
        date: '2025. 1. 1.',
        thumbnail: 'https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&fit=max'
    },
    {
        title: '[런던] 프랜시스 베이컨의 일그러진 초상화 😠',
        date: '2024. 12. 24.',
        thumbnail: 'https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&fit=max'
    },
    {
        title: '[런던] 왕궁에서 만난 다빈치의 드로잉 ✍️',
        date: '2024. 12. 17.',
        thumbnail: 'https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&fit=max'
    },
    {
        title: '[로마] 80대에 전성기를 맞은 할머니 화가 👵',
        date: '2024. 12. 10.',
        thumbnail: 'https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&fit=max'
    },
    // ... 더 많은 뉴스레터 항목들
];

function createNewsletterItems() {
    const grid = document.getElementById('newsletterGrid');
    
    newsletters.forEach(newsletter => {
        const item = document.createElement('div');
        item.className = 'newsletter-item';
        
        item.innerHTML = `
            <img src="${newsletter.thumbnail}" alt="썸네일 이미지">
            <h3>${newsletter.title}</h3>
            <p class="newsletter-date">${newsletter.date}</p>
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
