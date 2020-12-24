// ----- VARIABLES her
const body = document.querySelector("body");
const door = document.querySelector("#door");
const doorBtn = document.querySelector("#click");
const leftDoor = document.querySelector("#left-door");
const rightDoor = document.querySelector("#right-door");
const button = document.querySelector("#button-text");
const input = document.querySelector("#input");
const namee = document.getElementsByClassName("name");
const submit = document.querySelector("#submit-whatsapp");
const form = document.querySelector("#form");
const sound = document.querySelector("#sound");


// ----- EVENTS her
doorBtn.addEventListener("click",openDoor);




// ----- FUNCTIONS her
function openDoor() {
    body.classList.add("open");
    body.style.overflow ="auto";
    body.style.background = `url(images/background-2.gif)`;
    sound.innerHTML = `<audio src="audio/christmas-an.mp3" autoplay></audio>`;
}