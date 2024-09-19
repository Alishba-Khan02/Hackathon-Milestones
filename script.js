var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Set initial state (visible by default)
skillsSection.style.display = 'block';
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        // If the section is hidden, show it
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        // If the section is visible, hide it
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
