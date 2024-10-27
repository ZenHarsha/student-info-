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
    const languageSelect = document.getElementById('language-select');
    const videoContainer = document.getElementById('video-container');

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

    const videos = {
        english: [
            { title: "FULL C - LANGUAGE COURSE", url: "https://www.youtube.com/embed/aZb0iu4uGwA" },
            { title: "P Y T H O N FULL COURSE", url:  "https://www.youtube.com/embed/_uQrJ0TkZlc" },
            { title: "J A V A FULL COURSE", url: "https://www.youtube.com/embed/videoseries?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5" }
        ],
        telugu: [
            { title: "C Language in Telugu", url: "https://www.youtube.com/embed/pdPRdhify1Q?start=1" },
            { title: "Python in Telugu", url: "https://www.youtube.com/embed/B25zIPZHU8w" },
            { title: "Java in Telugu", url: "https://www.youtube.com/embed/AzJEnN2pK_I?start=23" }
        ]
    };

    function updateVideos(language) {
        videoContainer.innerHTML = '';
        videos[language].forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.innerHTML = `
                <h1 class="font">${video.title}</h1>
                <iframe class="course" width="450" height="300"
                    src="${video.url}"
                    title="YouTube video player" frameborder="10"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            `;
            videoContainer.appendChild(videoElement);
        });
    }

    languageSelect.addEventListener('change', (event) => {
        updateVideos(event.target.value);
        event.target.classList.add('pulse');
        setTimeout(() => {
            event.target.classList.remove('pulse');
        }, 1000);
    });

    // Initialize with English videos
    updateVideos('english');

    // Initialize Lucide icons
    lucide.createIcons();
});
