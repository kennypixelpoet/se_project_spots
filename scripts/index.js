console.log("JavaScript is connected")
    //Edit Profile modal

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editProfileForm = editProfileModal.querySelector(".modal__form");
const profileNameInput = editProfileModal.querySelector("#profile-name-input");
const profileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

editProfileBtn.addEventListener("click",function() {
    profileNameInput.value = profileName.textContent
    profileDescriptionInput.value = profileDescription.textContent
    editProfileModal.classList.add("modal_is-opened")
});

editProfileCloseBtn.addEventListener("click", function() {
    editProfileModal.classList.remove("modal_is-opened")
});

editProfileForm.addEventListener("submit", function (event) {
    event.preventDefault()
    profileName.textContent = profileNameInput.value
    profileDescription.textContent = profileDescriptionInput.value
    editProfileModal.classList.remove("modal_is-opened")
    console.log("Edit Profile form submitted")
});

    //New Post modal

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const addCardFormElement = newPostModal.querySelector(".modal__form");
const postLinkInput = newPostModal.querySelector("#card-image-input");
const postNameInput = newPostModal.querySelector("#profile-caption-input");

newPostBtn.addEventListener("click", function() {
    newPostModal.classList.add("modal_is-opened")
});

function handleAddCardSubmit(evt) {
    evt.preventDefault()
    console.log("Image link", postLinkInput.value)
    console.log("Caption:", postNameInput.value)
    newPostModal.classList.remove("modal_is-opened")
};

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

newPostCloseBtn.addEventListener("click", function() {
    newPostModal.classList.remove("modal_is-opened")
});
