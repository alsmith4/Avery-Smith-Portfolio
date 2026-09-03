document.addEventListener("DOMContentLoaded", function () {
    const navigation = `
        <nav class="main-nav">
            <div class="nav-container">
                <a href="index.html" class="nav-logo">Avery Smith</a>

                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Me</a></li>
                    <li><a href="experience.html">Experience</a></li>
                    <li><a href="resume.html">Resume</a></li>
                    <li><a href="contact.html">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    `;

    document.getElementById("navigation").innerHTML = navigation;
});
