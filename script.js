const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");




function play() {

    dino.src = "img/screaming.gif"
    setTimeout(() => {
        dino.src = "img/running-unscreen.gif"
        cacto.classList.add("goCacto")

        document.addEventListener("keydown", (event) => {

            event.preventDefault;
            dino.classList.add("jump")

            setTimeout(() => dino.classList.remove("jump"), 850)

            const keyName = event.key;
            console.log('keydown event\n\n' + 'key: ' + keyName);

            setTimeout(MenuGone(), 300)

            if (cactoPosition == 215) {
                console.log("agora sim")
            }


        })
    }, 4500);

    setTimeout(MenuGone, 200)

};
function MenuGone() {
    const menu = document.querySelector(".menu");

    menu.style.display = "none"
}


// function condição(posicao) {
//     return posicao
// }
// function loop() {
//     console.log(condição(cacto.offset().left))
//     if (condição(cacto.offset().left) == 215) {
//         alert('yes')

//     }
// }
// setInterval(loop)











