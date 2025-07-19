// a popup for new movie


// display the popup
export const displayPopup = () => {
    let showPopup = document.querySelector(".popup_background");
    showPopup.classList.add("active");
}

// hidden the popup 
export const hidePopup = () => {
    let maskPopup = document.querySelector(".popup_background");
    maskPopup.classList.remove("active");
}

// function addEventListenerPopup() {
    let btnShare = document.querySelector("#button-new");
    let maskPopupReset = document.querySelector("#b-reset");
    // let closePopup = document.querySelector(".popupBackground")

    btnShare.addEventListener("click", () => {
        displayPopup();
    })

    maskPopupReset.addEventListener("click", () => {
        hidePopup();
    })
// }