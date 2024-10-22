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
document.addEventListener('DOMContentLoaded', function() {
            const nameInput = document.getElementById('nameInput');
            const submitName = document.getElementById('submitName');
            const nameDisplay = document.getElementById('nameDisplay');
            const nameInputContainer = document.querySelector('.name-input-container');
            const container = document.querySelector('.container');
            const navButtons = document.querySelectorAll('.nav-button');
            const sections = document.querySelectorAll('main section');
            const pencilButton = document.getElementById('pencil-button');
            const importanceModal = document.getElementById('importance-modal');

            
            submitName.addEventListener('click', function() {
                const name = nameInput.value.trim();
                if (name) {
                    nameDisplay.textContent = `Welcome, ${name}!`;
                    nameDisplay.style.right = '20px';
                    nameInputContainer.style.opacity = '0';
                    setTimeout(() => {
                        nameInputContainer.style.display = 'none';
                        container.style.display = 'block';
                        setTimeout(() => {
                            container.style.opacity = '1';
                        }, 50);
                    }, 500);
                }
            });

            nameInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    submitName.click();
                }
            });

            navButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const tab = this.getAttribute('data-tab');
                    navButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    sections.forEach(section => {
                        section.classList.remove('active');
                        if (section.id === tab) {
                            section.classList.add('active');
                        }
                    });
                });
            });

            pencilButton.addEventListener('click', function() {
                importanceModal.style.display = 'block';
            });

            importanceModal.addEventListener('click', function(event) {
                if (event.target === importanceModal) {
                    importanceModal.style.display = 'none';
                }
            });

            // Initialize Lucide icons
            lucide.createIcons();
        });

    
});

