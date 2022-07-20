//scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

//button selection in skills section
function selectionToggle(p1) {

    //reset skills
    let collection = document.getElementsByClassName('skill-card');

    for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = '#D3D3D3';
        collection[i].style.backgroundColor = '#FFFFFF';
    }

    //reset buttons
    collection = document.getElementsByClassName('skill-button');

    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = '#3C99DC';
        collection[i].style.fontWeight = "normal";
    }

    //change skills
    let selection = document.getElementsByClassName(p1);

    for (let i = 0; i < selection.length; i++) {
        selection[i].style.color = '#000000';
        if (p1 != "skill-card") {
            selection[i].style.backgroundColor = '#FFFF00';
        }
    }

    //change selected button
    buttonSelection = "button-skills";
    switch (p1) {
        case 'skill-card':
            buttonSelection = "button-skills";
            break;
        case 'programming':
            buttonSelection = "button-programming";
            break;
        case 'webdev':
            buttonSelection = "button-webdev";
            break;
        case 'design':
            buttonSelection = "button-design";
            break;
        case 'development':
            buttonSelection = "button-enterprise";
            break;
        case 'database':
            buttonSelection = "button-databases";
            break;
        case 'research':
            buttonSelection = "button-research";
            break;
        case 'zombies':
            buttonSelection = "button-zombie";
            break;
    }

    let button = document.getElementById(buttonSelection);
    button.style.backgroundColor = "#3572F2";
    button.style.fontWeight = "bold";
}