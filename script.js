const messages = [
    "Segura?",
    "Muy segura??",
    "En serio amor?",
    "Mi niña por favor...",
    "Piensalo pls cariño mio",
    "Si me dices que no estare triste corazon...",
    "Estare muy triste...",
    "Estare en serio en serio en serio muy triste amor...",
    "Bien, dejare de preguntar...",
    "Pura bromita y dramita amor, di que si pls! 💓💓💓",
    "Ya amor deja de bromear",
    "Shi me quieres cari?",
    "No aceptaras😭😭😭😭",
    "pls acepta cari yo te amo musho 😽😽😽😽😻😻😻😻😻"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
