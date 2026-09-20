document.addEventListener("DOMContentLoaded", function () {

    const navigation = `
        <nav class="top-navigation">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Me</a></li>
                <li class="has-dropdown">
                    <a href="experience.html">Experience</a>
                    <ul class="dropdown-menu">
                        <li><a href="cambridge.html">Cambridge Investment Research, Inc.</a></li>
                        <li><a href="ethos.html">ETHOS Event Collective</a></li>
                        <li><a href="research-park.html">ISU Research Park</a></li>
                        <li><a href="afterdark.html">ISU AfterDark</a></li>
                    </ul>
                </li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact Me</a></li>
            </ul>
        </nav>
    `;

    const navContainer = document.getElementById("navigation");

    if (navContainer) {
        navContainer.innerHTML = navigation;
    }

    // Load the shared Quick Links styles on every page that uses this script.
    if (!document.querySelector('link[href="quick-links.css"]')) {
        const quickLinksStyles = document.createElement("link");
        quickLinksStyles.rel = "stylesheet";
        quickLinksStyles.href = "quick-links.css";
        document.head.appendChild(quickLinksStyles);
    }

    // Restore the right-hand panel to a simple list of the main site pages.
    const quickLinks = document.querySelector(".sticky-content");

    if (quickLinks) {
        quickLinks.innerHTML = `
            <h2>Quick Links</h2>
            <ul>
                <li><a href="about.html">About Me</a></li>
                <li><a href="experience.html">Experience</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        `;
    }

    // Automatically highlight the current page.
    let currentPage = window.location.pathname.split("/").pop();

    // GitHub Pages may return an empty filename for the homepage.
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

    // Highlight "Experience" when on any of its detail pages too.
    const experienceTopLink = document.querySelector(".has-dropdown > a");
    const experienceDetailPages = ["experience.html", "cambridge.html", "ethos.html", "research-park.html", "afterdark.html"];

    if (experienceTopLink && experienceDetailPages.includes(currentPage)) {
        experienceTopLink.classList.add("active");
    }

});
