function simular(pratica) {
    const resultadoHTML = document.getElementById("resultado-texto");
    
    // Altera o texto baseado na escolha do usuário
    if (pratica === 'energia') {
        resultadoHTML.innerHTML = "☀️ <strong>Resultado:</strong> Redução de 40% na pegada de carbono da fazenda e economia na conta de luz, gerando energia limpa para a produção!";
        resultadoHTML.style.color = "#2e7d32";
    } 
    else if (pratica === 'reflorestar') {
        resultadoHTML.innerHTML = "🌳 <strong>Resultado:</strong> Proteção das nascentes de água, retorno da fauna local e contenção da erosão do solo. Produção protegida pela natureza!";
        resultadoHTML.style.color = "#2e7d32";
    } 
    else if (pratica === 'Tecnologia') {
        resultadoHTML.innerHTML = "🛸 <strong>Resultado:</strong> Economia de defensivos agrícolas e fertilizantes. Menos química no solo e mais eficiência na colheita!";
        resultadoHTML.style.color = "#2e7d32";
    }
}