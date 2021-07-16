
// document.querySelector("button").addEventListener("click", function (){
//     alert("Anonymous function, doesnt have any name")
// });

for (let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick(){

    const buttonPressed = this.innerHTML;
    let audio;

    switch (buttonPressed) {
        case "w":
             audio = new Audio("sounds/tom-1.mp3");
            audio.play().then();
            break;
        case "a":
             audio = new Audio("sounds/tom-2.mp3");
            audio.play().then();
            break;
        case "s":
             audio = new Audio("sounds/tom-3.mp3");
            audio.play().then();
            break;
        case "d":
             audio = new Audio("sounds/tom-4.mp3");
            audio.play().then();
            break;
        case "j":
             audio = new Audio("sounds/snare.mp3");
            audio.play().then();
            break;
        case "k":
             audio = new Audio("sounds/crash.mp3");
            audio.play().then();
            break;
        case "l":
             audio = new Audio("sounds/kick-bass.mp3");
            audio.play().then();
            break;
        default:
            break;
    }

}