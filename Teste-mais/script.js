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
                const iconCell = row.querySelector('.grupo');
                if (secondaryTable.style.display === 'none') {
                    secondaryTable.style.display = 'block';
                    iconCell.innerHTML = iconCell.innerHTML.replace('+', '–');
                } else {
                    secondaryTable.style.display = 'none';
                    iconCell.innerHTML = iconCell.innerHTML.replace('–', '+');
                }
            });
        });

    // Permitir expandir os itens da secondary-table
    const subRows = content.querySelectorAll('.secondary-table tbody tr');

    subRows.forEach((row) => {
        const icon = row.querySelector('.plus-icon');
        if (!icon) return;

        row.addEventListener('click', () => {
            const nextRow = row.nextElementSibling;
            if (nextRow && nextRow.classList.contains('grafico-row')) {
                const isHidden = nextRow.style.display === 'none';
                nextRow.style.display = isHidden ? 'table-row' : 'none';
                icon.textContent = isHidden ? '–' : '+';
            }
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
