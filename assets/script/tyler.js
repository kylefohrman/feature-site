
var languageText = {
    'english': 'Languages',
    'spanish': 'Lenguas',
    'german': 'Spraches',
};

var spanishText = {
    'english': `<p><b>Spanish (Castilian)</b></p>\
<p><i>Certified by the Cervantes Institute</i></p>\
<p>CEFR C1- Advanced</p>\
<p>Since 2013</p>\
<p class="btn" id="spanish-button" onclick="changeText('spanish')">Try it out</p>`,
    'spanish': `<p><b>Español (castellano)</b></p>\
    <p><i>Certificado por el Instituto Cervantes</i></p>\
    <p>MCER C1- Dominio operativo eficaz</p>\
    <p>Desde 2013</p>\
    <p class="btn" id="spanish-button" onclick="changeText('spanish')">Pruébalo</p>`,
    'german': `<p><b>Spanisch (Kastilisch)</b></p>\
    <p><i>Zertifikat des Cervantes-Instituts</i></p>\
    <p>GeR C1- Fortgeschrittene Kenntnisse</p>\
    <p>Seit 2013</p>\
    <p class="btn" id="spanish-button" onclick="changeText('spanish')">Versuch es</p>`
};

var germanText = {
    'english': `<p><b>German (High German)</b></p>\
    <p><i>Self-study via the Goethe Institute</i></p>\
    <p>Advanced Working Proficiency</p>\
    <p>Since 2021</p>\
    <p class="btn" id="german-button" onclick="changeText('german')">Try it out</p>`,
    'spanish': `<p><b>Alemán (alto alemán)</b></p>\
    <p><i>Autoaprendizaje a través del Goethe-Institut</i></p>\
    <p>Dominio avanzado del idioma</p>\
    <p>Desde 2021</p>\
    <p class="btn" id="german-button" onclick="changeText('german')">Pruébalo</p>`,
    'german': `<p><b>Deutsch (Hochdeutsch)</b></p>\
    <p><i>Selbststudium am Goethe-Institut</i></p>\
    <p>Fortgeschrittene Sprachkenntnisse</p>\
    <p>Seit 2021</p>\
    <p class="btn" id="german-button" onclick="changeText('german')">Versuch es</p>`
}

var englishText = {
    'english': `<p><b>English (American)</b></p>\
    <p><i>Native Speaker</i></p>\
    <p class="btn" id="english-button" onclick="changeText('english')">Try it out</p>`,
    'spanish': `<p><b>Inglés (americano)</b></p>\
    <p><i>Hablante nativo</i></p>\
    <p class="btn" id="english-button" onclick="changeText('english')">Pruébalo (return to English)</p>`,
    'german': `<p><b>Englisch (Amerikanisch)</b></p>\
    <p><i>Muttersprachler</i></p>\
    <p class="btn" id="english-button" onclick="changeText('english')">Versuch es (return to English)</p>`
};

function changeText(language) {
    ret = checkButtons(language);
    if (!ret) { // button has not been pressed yet- select button and change to chosen language
        changeLanguage(language)
        document.getElementById((language + "-button")).classList.toggle("is-pressed");
    }
    else { // button has already been pressed- reset button and set box to English
        changeLanguage("english");
    }
}

function changeLanguage(language) {
    document.getElementById("languages").textContent = languageText[language];
    document.getElementById("spanish-text").innerHTML = spanishText[language];
    document.getElementById("german-text").innerHTML = germanText[language];
    document.getElementById("english-text").innerHTML = englishText[language];
}

function checkButtons(language) {
    var button = document.getElementById((language + "-button"));
    if (button.classList.contains("is-pressed")) { // button was already pressed
        button.classList.remove("is-pressed");
        return true
    }
    document.getElementById(("spanish-button")).classList.remove("is-pressed"); // reset buttons
    document.getElementById(("german-button")).classList.remove("is-pressed");
    document.getElementById(("english-button")).classList.remove("is-pressed");
    return false // button is not yet selected
}