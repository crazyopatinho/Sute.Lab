// Função para trocar de página sem recarregar
function mostrarPagina(idPagina) {
    // Esconde todas as páginas
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(p => p.classList.remove('ativa'));

    // Mostra a página clicada
    const paginaAlvo = document.getElementById(idPagina);
    if (paginaAlvo) {
        paginaAlvo.classList.add('ativa');
        window.scrollTo(0, 0); // Volta para o topo
    }
}

// Log de inicialização do sistema
console.log("S.U.T.E Lab Engine inicializada...");
console.log("Criador: Isllan");