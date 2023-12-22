// Obtém a URL completa da página
const url = window.location.href;

// Encontra a posição da penúltima barra
var penultimaBarraIndex = url.lastIndexOf('/', url.lastIndexOf('/') - 1);

// Encontra a posição da última barra
var ultimaBarraIndex = url.lastIndexOf('/');

// Verifica se as barras foram encontradas
if (penultimaBarraIndex !== -1 && ultimaBarraIndex !== -1) {
    // Usa substring para cortar a parte da URL entre as barras
    var parteCortada = url.substring(penultimaBarraIndex + 1, ultimaBarraIndex);
    var finalFromUrl = parteCortada.substring(parteCortada.length - 3); 
}

const links = document.querySelector(".menu-links");
const elementosLi = links.querySelectorAll("li");

// Itera sobre os elementos <li> encontrados
elementosLi.forEach(li => {
    // Obtém as três últimas letras do conteúdo do elemento <li>
    var finalFromLiContent = li.textContent.trim().substring(li.textContent.trim().length - 3);

    // Verifica se as três últimas letras da URL são iguais às três últimas letras do conteúdo do elemento <li>
    if(finalFromLiContent === finalFromUrl){
        // Adiciona a borda ao elemento <li> se a condição for verdadeira
        li.style.borderBottom = "1px solid black";
    }
});
