document.addEventListener('DOMContentLoaded', () => {
    // Select all project titles
    const projectTitles = document.querySelectorAll('.project-title');

    projectTitles.forEach(title => {
        // Add mouseover event to show description
        title.addEventListener('mouseover', () => {
            const descriptionText = title.getAttribute('data-description');
            const descriptionDiv = title.nextElementSibling;
            descriptionDiv.textContent = descriptionText;
            descriptionDiv.classList.add('show'); // Show description with fade-in effect
        });

        // Add mouseout event to hide description
        title.addEventListener('mouseout', () => {
            const descriptionDiv = title.nextElementSibling;
            descriptionDiv.classList.remove('show'); // Hide description with fade-out effect
        });
    });
});
