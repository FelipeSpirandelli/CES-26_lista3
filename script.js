// script.js

$(document).ready(function() {
    let selectedElement = null;

    $('#content').on('click', 'div', function(e) {
        e.stopPropagation(); // evita múltiplas seleções

        console.log(selectedElement)

        if (selectedElement === this) { // If the clicked element is already selected
            $(this).removeClass('selected');
            selectedElement = null; // Reset the selection
        } else {
            if (selectedElement) {
                $(selectedElement).removeClass('selected');
            }
    
            selectedElement = this;
            $(this).addClass('selected');
        }
    });

    $('#remove').on('click', function() {
        if (selectedElement) {
            $(selectedElement).remove();
            selectedElement = null; // Resetar a seleção
        }
    });

    $('#add').on('click', function() {
        const newText = $('#newElementText').val();
        if (newText && selectedElement) {
            const newElement = $('<div style="cursor: pointer; margin-left: 1rem;">').text(newText);
            $(selectedElement).append(newElement);
        }
    });
});
