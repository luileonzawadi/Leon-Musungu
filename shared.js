// Load header component
function loadHeader() {
    fetch('/shared/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            setActiveLink();
        });
}

// Add active class to current page link
function setActiveLink() {
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize header
document.addEventListener('DOMContentLoaded', loadHeader);