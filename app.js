window.addEventListener('DOMContentLoaded', (event) => {
    // Calculate the height of the navigation bar
    const navBar = document.querySelector('nav');
    const navBarHeight = navBar.getBoundingClientRect().height;

    // Add an event listener for the navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Get the target section's ID from the link's href attribute
            const targetId = link.getAttribute('href').substring(1);

            // Get the target section element
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll to the target section with the offset
                window.scrollTo({
                    top: targetSection.offsetTop - navBarHeight,
                    behavior: 'smooth',
                });
            }
        });
    });
});


document.getElementById('scroll-down-link').addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1); // Get the target section's ID

    const targetElement = document.getElementById(targetId); // Get the target section

    if (targetElement) {
        // Calculate the target scroll position
        const offset = targetElement.getBoundingClientRect().top;
        const navbarHeight = document.querySelector('nav').offsetHeight; // Adjust for the navbar height

        // Use smooth scroll for a better user experience
        window.scrollBy({
            top: offset - navbarHeight,
            behavior: 'smooth'
        });
    }
});
