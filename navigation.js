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

    // Add the same contact information to the Quick Links area on every page.
    const quickLinks = document.querySelector(".sticky-content");

    if (quickLinks) {
        quickLinks.innerHTML = `
            <h2>Quick Links</h2>

            <div class="quick-contact-details">
                <div class="quick-contact-item">
                    <h3>Phone</h3>
                    <a href="tel:+16413810317">641.381.0317</a>
                </div>

                <div class="quick-contact-item">
                    <h3>Email</h3>
                    <a href="mailto:alsmith4@iastate.edu">alsmith4@iastate.edu</a>
                </div>

                <div class="quick-contact-item">
                    <h3>LinkedIn</h3>
                    <a class="quick-linkedin-link"
                       href="https://www.linkedin.com/in/asmith348/"
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Visit Avery Smith's LinkedIn profile">
                        <svg class="quick-linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V9H3.54v11.45Z"/>
                        </svg>
                    </a>
                </div>
            </div>
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

});
