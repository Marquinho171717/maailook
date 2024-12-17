
export function createMenu(){
	var div = document.getElementById("div") as HTMLAreaElement;
	var div2 = document.getElementById("div2") as HTMLAreaElement;

	var home = document.createElement("a");
	var about = document.createElement("a");

	home.textContent = "Home";
	home.href = "#";
	home.className = "nav-link";
	home.setAttribute('data-content', 'home');

	about.textContent = "About";
	about.href = "#";
	about.className = "nav-link";
	about.setAttribute('data-content', 'about');


	div?.appendChild(home);
	div2?.appendChild(about);
}


export function getContent(){

	const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');

	// Function to handle link clicks
	const handleLinkClick = (event: MouseEvent) => {
    event.preventDefault(); // Prevent the default anchor behavior

    // Get the clicked link
    const target = event.currentTarget as HTMLAnchorElement;
    const contentType = target.getAttribute('data-content');

	console.log(contentType);
    // Hide all content sections
    const sections = document.querySelectorAll<HTMLElement>('.content-section');
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
