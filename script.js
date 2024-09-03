function downloadCourse(course) {
    let pdfPath = '';
    switch(course) {
        case 'c':
            pdfPath = 'courses/c_programming.pdf';
            break;
        case 'cpp':
            pdfPath = 'courses/cpp_programming.pdf';
            break;
        case 'java':
            pdfPath = 'courses/java_programming.pdf';
            break;
        case 'html':
            pdfPath = 'courses/html_programming.pdf';
            break;
        case 'javascript':
            pdfPath = 'courses/javascript_programming.pdf';
            break;
    }
    if (pdfPath) {
        window.location.href = pdfPath;
        showPopup();
    }
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}
