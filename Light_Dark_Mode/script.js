// Dark Mode Toggler Icon Selector
const toggleSwitch = document.querySelector("input[type='checkbox']");

// Elements
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark Mode Function
function darkMode() {
    nav.style.backgroundColor = "rgba(0 0 0 / 50%)";
    textBox.style.backgroundColor = "rgba(255 255 255 / 50%)";
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.remove("fa-sun");
    toggleIcon.children[1].classList.add("fa-moon");
    image1.src = "img/undraw_proud_coder_dark.svg";
    image2.src = "img/undraw_feeling_proud_dark.svg";
    image3.src = "img/undraw_conceptual_idea_dark.svg";
}

// Light Mode Function
function lightMode() {
    nav.style.backgroundColor = "rgba(255 255 255 / 50%)";
    textBox.style.backgroundColor = "rgba(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.remove("fa-moon");
    toggleIcon.children[1].classList.add("fa-sun");
    image1.src = "img/undraw_proud_coder_light.svg";
    image2.src = "img/undraw_feeling_proud_light.svg";
    image3.src = "img/undraw_conceptual_idea_light.svg";
}

// Switch Theme Dynamically
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        darkMode();
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleIcon.checked = true;
        darkMode();
    }
}