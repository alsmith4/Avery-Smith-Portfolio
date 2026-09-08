document.addEventListener("DOMContentLoaded", function () {

    const navigation = `
        <nav class="top-navigation">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Me</a></li>
                <li><a href="experience.html">Experience</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact Me</a></li>
            </ul>
        </nav>
    `;

    const navContainer = document.getElementById("navigation");

    if (navContainer) {
        navContainer.innerHTML = navigation;
    }

    // Automatically highlight the current page
    let currentPage = window.location.pathname.split("/").pop();

    // GitHub Pages may return an empty filename for the homepage
    if (currentPage === "") {
        currentPage = "index.html";
    }

    const links = document.querySelectorAll(".top-navigation a");

    links.forEach(function (link) {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

});
