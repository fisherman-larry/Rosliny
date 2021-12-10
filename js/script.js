{
    const welcome = () => {
        console.log("Welcome on my page developer!")
    };

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("maranta");
        themeName.innerText = body.classList.contains("maranta") ? "Maranta" : "Monstera";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);

        welcome();
    }
    init();

}