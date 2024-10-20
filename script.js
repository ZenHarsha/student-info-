document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Tab switching
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('main section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Pencil button and modal
    const pencilButton = document.getElementById('pencil-button');
    const modal = document.getElementById('importance-modal');

    pencilButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Animate home points
    const homePoints = document.querySelectorAll('#home-points li');
    homePoints.forEach((point, index) => {
        point.style.animationDelay = `${index * 0.1}s`;
    });

    // Animate course cards
    const courseCards = document.querySelectorAll('.course-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const courseObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    courseCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        courseObserver.observe(card);
    });

    document.getElementById('save-name').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    if (name) {
        localStorage.setItem('userName', name);
        document.getElementById('display-name').textContent = 'Welcome, ' + name + '!';
    }
});

// Display the saved name if it's already in localStorage
window.onload = function() {
    var savedName = localStorage.getItem('userName');
    if (savedName) {
        document.getElementById('display-name').textContent = 'Welcome, ' + savedName +  +'!';
    }
};


    
});

