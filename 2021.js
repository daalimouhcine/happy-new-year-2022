// ----- VARIABLES her
const body = document.querySelector("body");
const door = document.querySelector("#door");
const doorBtn = document.querySelector("#click");
const leftDoor = document.querySelector("#left-door");
const rightDoor = document.querySelector("#right-door");



// ----- EVENTS her
doorBtn.addEventListener("click",openDoor);




// ----- FUNCTIONS her
function openDoor() {
    body.classList.add("open");
    body.style.overflow ="auto";
}