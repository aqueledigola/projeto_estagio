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