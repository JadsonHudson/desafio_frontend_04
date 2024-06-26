document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.personagens-info');
    const buttons = document.querySelectorAll('#personagens-fotos img');

    // Função para mostrar o slide correspondente
    function showSlide(event) {
        const targetId = event.target.getAttribute('data-slide');
        buttons.forEach(button => {
            button.setAttribute("modo", button.getAttribute('data-slide') === targetId ? 'ativado' : 'desativado');
        });
        slides.forEach(slide => {
            slide.style.display = slide.id === targetId ? 'flex' : 'none';
        });
    }

    // Adiciona evento de clique aos botões
    buttons.forEach(button => {
        button.addEventListener('click', showSlide);
    });

    if (window.location.hash) {
        // Exibe o slide selecionado
        const hash = window.location.hash.slice(1);
        showSlide({ target: { getAttribute: () => hash } });
    } else {
        // Exibe o primeiro slide automaticamente
        showSlide({ target: { getAttribute: () => 'p-maria' } });
    }
});