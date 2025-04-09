document.addEventListener('DOMContentLoaded', function() {
    function setupAccordionButton(button, content, secondaryTables) {
        button.onclick = function() {
            let expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
        };

        const primaryRows = content.querySelectorAll('#primary-table tbody tr');
        primaryRows.forEach((row, index) => {
            row.addEventListener('click', () => {
                const secondaryTable = secondaryTables[index];
                secondaryTable.style.display = secondaryTable.style.display === 'none' ? 'block' : 'none';
            });
        });
    }

    const accordions = document.querySelectorAll('.accordion-item');
    accordions.forEach(accordion => {
        const button = accordion.querySelector('.accordion-button');
        const content = accordion.querySelector('.accordion-content');
        const secondaryTables = accordion.querySelectorAll('.secondary-table');
        setupAccordionButton(button, content, secondaryTables);
    });
});
