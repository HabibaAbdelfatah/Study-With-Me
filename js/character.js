// Get the character image in the current room
const characterImage = document.querySelector(
    ".room-character"
);

// Change character image
function updateCharacter(state) {

    if (!characterImage) return;

    const happyImage = characterImage.dataset.happy;
    const sadImage = characterImage.dataset.sad;

    if (state === "running") {
        characterImage.src = happyImage;
    } else {
        characterImage.src = sadImage;
    }
}

// Listen for timer events
window.addEventListener("study:state", function(event) {

    const status = event.detail.status;

    updateCharacter(status);

});

// Initial state
updateCharacter("paused");