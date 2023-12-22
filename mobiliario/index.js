let globalImageId; //id da imagem atualmente mostrada para o usuário no modal
let presentedImage = document.getElementById("presented-image"); //atual imagem mostrada ao usuario

function showModal(mesa) {
    //abrir modal
    const carousel = document.getElementById("carousel");
    carousel.style.display = "block";

    //mostrar imagem correspondente ao modal clicado
    const clickedImage = mesa.querySelector('img');
    presentedImage.src = clickedImage.src;

    //atualizar valor do id para a imagem atualmente mostrada ao usuário
    const atualImageId = clickedImage.getAttribute("data-id");
    globalImageId = atualImageId;
}

function hiddenModal() {
    const carousel = document.getElementById("carousel")
    carousel.style.display = "none"
}

function nextImage() {
    globalImageId = (globalImageId + 1) % 21; // Limita o valor entre 0 e 20
    updatePresentationImage()
}

function underImage() {
    globalImageId = (globalImageId - 1 + 21) % 21; // Garante que o resultado seja não negativo
    updatePresentationImage()
}

function updatePresentationImage() {
    const imageDataId = document.querySelector(`img[data-id="${globalImageId}"]`);
    if (imageDataId) {
        presentedImage.src = imageDataId.src;
    }
}

function updateGlobalImageId(imageElement){
    const dataId = imageElement.getAttribute("data-id")
    globalImageId = dataId
    updatePresentationImage()
}