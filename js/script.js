const welcome = () => {
    console.log("Welcome on my page developer!")
};

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("maranta");

    if (body.classList.contains("maranta")) {
        themeName.innerText = "Maranta";
    } else {
        themeName.innerText = "Monstera";
    }
});


welcome();