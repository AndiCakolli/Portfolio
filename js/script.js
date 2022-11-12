let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const sr = ScrollReveal ({
    distance: '80px',
    duration: 2800,
    reset: true
})

sr.reveal('.text,.social',{delay: 300, origin: 'bottom'})
sr.reveal('header',{delay: 100, origin: 'top'})


/* Skills Button */
const $skillButtons = document.querySelectorAll(".skill-button")

function selectSkill() {
    let $skillActive = this
    if ($skillActive.classList.contains("-active")) {
       $skillActive.classList.remove("-active")
    } else {
       $skillActive.classList.add("-active")
    }
 }

$skillButtons.forEach((skillItem) => {
    skillItem.addEventListener("click", selectSkill)
 })