const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");


function play() {
    dino.src = "img/screaming.gif"
    setTimeout(() => {
        dino.src = "img/running-unscreen.gif"
        cacto.classList.add("goCacto")

        document.addEventListener("keydown", (event) => {
            dino.classList.add("jump")
            setTimeout(() => {

                dino.classList.remove("jump")

            }, 800)

            const keyName = event.key;
            console.log('keydown event\n\n' + 'key: ' + keyName);

        })
    }, 4500);

    setTimeout(buttonGone, 500)

};
function buttonGone() {
    const play = document.getElementById("play");

    play.style.opacity = "0"
}






