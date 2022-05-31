// MOSTRAR E ESCONDER POP-UP
function showModal() {
    let obj = document.getElementById("modal");
    let blur = document.getElementById("all");

    obj.classList.add("show-modal");
    blur.classList.add("blur-all");
}

function hideModal() {
    let obj = document.getElementById("modal");
    let blur = document.getElementById("all");

    obj.classList.remove("show-modal");
    blur.classList.remove("blur-all");
}

// MOSTRAR E ESCONDER SENHA
function eyeClick() {
    let inputSenha = document.getElementById("inputSenha")
    let eye = document.getElementById("senhaonoff")
    let senhaTypePassword = inputSenha.type == "password"

    if (senhaTypePassword) {
        inputSenha.setAttribute("type", "text")
        eye.setAttribute("src", "img/dec_senhaoff.png")
        eye.setAttribute("alt", "Ocultar Senha")

    } else {
        inputSenha.setAttribute("type", "password")
        eye.setAttribute("src", "img/dec_senhaon.png")
        eye.setAttribute("alt", "Mostrar Senha")

    }
}