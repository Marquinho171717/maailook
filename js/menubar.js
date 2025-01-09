export function createMenu() {
    const div = document.getElementById("div");
    const div2 = document.getElementById("div2");
    const home = document.createElement("a");
    const about = document.createElement("a");
    home.textContent = "Home";
    home.href = "#";
    home.className = "nav-link";
    home.setAttribute('data-content', 'home');
    about.textContent = "About";
    about.href = "#";
    about.className = "nav-link";
    about.setAttribute('data-content', 'about');
    div === null || div === void 0 ? void 0 : div.appendChild(home);
    div2 === null || div2 === void 0 ? void 0 : div2.appendChild(about);
}
export function getContent() {
    const navLinks = document.querySelectorAll('.nav-link');
    // Function to handle link clicks
    const handleLinkClick = (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        // Get the clicked link
        const target = event.currentTarget;
        const contentType = target.getAttribute('data-content');
        console.log(contentType);
        // Hide all content sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        // Show the selected content section
        if (contentType) {
            const selectedSection = document.getElementById(contentType);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }
        }
    };
    // Attach click event listeners to each link
    navLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
}
