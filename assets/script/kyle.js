IS_PRESSED = 'skill-is-pressed';

// Resets skill cards
function resetCards() {
    let allCards = document.getElementsByClassName('skill-card');

    for (let i = 0; i < allCards.length; i++) {
        allCards[i].style.color = '#000000';
        allCards[i].style.backgroundColor = '#FFFFFF';
    }
}

// Color skill cards
function colorCards(p1) {
    let selection = document.getElementsByClassName(p1);
    let allCards = document.getElementsByClassName('skill-card');

    for (let i = 0; i < allCards.length; i++) {
        allCards[i].style.color = '#D3D3D3';
        allCards[i].style.backgroundColor = '#FFFFFF';
    }

    for (let i = 0; i < selection.length; i++) {
        selection[i].style.color = '#000000';
        selection[i].style.backgroundColor = '#FFFF00';
    }
}

// Resets a given button's color
function resetButton(selectedButton) {
    selectedButton.style.backgroundColor = '#3C99DC';
    selectedButton.style.fontWeight = "normal";
}

function colorButton(selectedButton) {
    selectedButton.style.backgroundColor = "#3572F2";
    selectedButton.style.fontWeight = "bold";
}

// Resets all non-selected buttons. Toggles and returns the selected button.
function toggleButtons(p1) {
    buttonCollection = document.getElementsByClassName('skill-button');
    let returnButton;
    for (let i = 0; i < buttonCollection.length; i++) {
        selectedButton = buttonCollection[i];
        if (selectedButton.id == "button-" + p1) {
            returnButton = selectedButton;
            returnButton.classList.toggle(IS_PRESSED);
        } else {
            if (selectedButton.classList.contains(IS_PRESSED)) {
                selectedButton.classList.remove(IS_PRESSED);
                resetButton(selectedButton);
            }
        }
    }
    return returnButton;
}

// Button selection in skills section
function selectionToggle(p1) {
    resetCards();

    selectedButton = toggleButtons(p1);
    if (selectedButton.classList.contains(IS_PRESSED)) {
        colorButton(selectedButton);
        colorCards(p1);
    } else {
        resetButton(selectedButton);
    }
}