// ----- VARIABLES her
const body = document.querySelector("body");
const door = document.querySelector("#door");
const doorBtn = document.querySelector("#click");
const leftDoor = document.querySelector("#left-door");
const rightDoor = document.querySelector("#right-door");
const button = document.querySelector("#button-text");
const input = document.querySelector("#input");
const name = document.getElementsByClassName("name");
const submit = document.querySelector("#submit-whatsapp");
const form = document.querySelector("#form");
const sound = document.querySelector("#sound");


// ----- EVENTS her
doorBtn.addEventListener("click",openDoor);
button.addEventListener("click",buttonName);




// ----- FUNCTIONS her
function openDoor() {
    body.classList.add("open");
    body.style.overflow ="auto";
    body.style.background = `url(images/background-2.gif)`;
    sound.innerHTML = `<audio src="audio/christmas1.mp3" autoplay></audio>`;
}
function buttonName(e) {
    e.preventDefault();
    for(let i = 0 ; i < name.length ; i++) {
        name[i].innerText = input.value;
    };        input.style.display = "none";
    button.style.display = "none";
    form.innerHTML = `<a href="whatsapp://send?text=π Une surprise spΓ©ciale pour toi de la part de π *${input.value}* π %0AClique sur la ligne bleue pour voir %0AβΌοΈππππβΌοΈ%0A  http://127.0.0.1:5500/2021%20ann%C3%A9e/2021.html?name=${input.value}" id="submit-whatsapp"><img src="images/whatsapp.png" alt=""> <b>π Partagez</b> `;
}



/*
if(name[0].innerText.length === 0) {
    alert("dkjdf");
}
*/