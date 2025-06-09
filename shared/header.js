document.getElementById('header').innerHTML = `
    <nav>
        <div class="logo"><span class="logo-first">Leon</span> <span class="logo-last">Musungu</span><span class="logo-dot">.</span></div>
        <div class="nav-links" id="navLinks">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="skills.html">Skills</a>
            <a href="projects.html">Projects</a>
            <a href="achievements.html">Achievements</a>
            <a href="contact.html">Contact</a>
        </div>
        <div class="menu-toggle" id="menuToggle">
            <i class="fas fa-bars"></i>
        </div>
    </nav>
`;

// Highlight the active link
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('show');
    this.innerHTML = document.getElementById('navLinks').classList.contains('show') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});