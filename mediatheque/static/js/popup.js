// Popup module for adding a new movie

// Récupérer une seule fois le popup dans le DOM
const popupBackground = document.querySelector(".popup-background");

// Affiche le popup
export const displayPopup = () => {
    if (popupBackground) {
        popupBackground.classList.add("active");
    }
}

// Cache le popup
export const hidePopup = () => {
    if (popupBackground) {
        popupBackground.classList.remove("active");
    }
}

// Sélecteurs des éléments déclencheurs
const btnShare = document.querySelector(".head-element__add-movie");
const discardBtn = document.querySelector("#discard");

// Gestion des clics
if (btnShare) {
    btnShare.addEventListener("click", displayPopup);
}

if (discardBtn) {
    discardBtn.addEventListener("click", hidePopup);
}