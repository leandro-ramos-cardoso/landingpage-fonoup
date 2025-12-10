// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');
        
        pergunta.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Fecha todos os itens
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Abre o item clicado se não estava ativo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});


