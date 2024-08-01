document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.collapsible');
    
    sections.forEach(section => {
        section.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
