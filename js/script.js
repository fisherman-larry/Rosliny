let button = document.querySelector(".main_button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("maranta");

    if (body.classList.contains("maranta")) {
        themeName.innerText = "Maranta";
    } else {
        themeName.innerText = "Monstera";
    }
});