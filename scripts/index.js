const initialCards = [
    {
        name: "Val Thorens",
        link: "./images/1-photo-by-moritz-feldmann-from-pexels.jpg"
    }, 

    {
        name: "Restaurant terrace",
        link: "./images/2-photo-by-ceiline-from-pexels.jpg"
    },

    {
        name: "An outdoor cafe",
        link: "./images/3-photo-by-tubanur-dogan-from-pexels.jpg"
    },

    {
        name: "A very long bridge, over the forest...",
        link: "./images/4-photo-by-maurice-laschet-from-pexels.jpg" 
    },

    {
        name: "Tunnel with morning light",
        link: "./images/5-photo-by-van-anh-nguyen-from-pexels.jpg" 
    },

    {
        name: "Mountain house",
        link: "./images/6-photo-by-moritz-feldmann-from-pexels.jpg"
    }
];


function openModal(modal) {
    modal.classList.add("modal_is-opened")
}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened")
}

            //Edit Profile modal

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editProfileForm = document.forms["editProfileForm"];
const profileNameInput = editProfileModal.querySelector("#profile-name-input");
const profileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

editProfileBtn.addEventListener("click",function() {
    profileNameInput.value = profileName.textContent
    profileDescriptionInput.value = profileDescription.textContent
    openModal(editProfileModal)
});

editProfileCloseBtn.addEventListener("click", function() {
    closeModal(editProfileModal)
});

editProfileForm.addEventListener("submit", function (event) {
    event.preventDefault()
    profileName.textContent = profileNameInput.value
    profileDescription.textContent = profileDescriptionInput.value
    closeModal(editProfileModal)
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
    openModal(newPostModal)
});

function handleAddCardSubmit(evt) {
    evt.preventDefault()
    console.log("Image link", postLinkInput.value)
    console.log("Caption:", postNameInput.value)
    closeModal(newPostModal)
};

addCardFormElement.addEventListener("submit", handleAddCardSubmit)

newPostCloseBtn.addEventListener("click", function() {
    closeModal(newPostModal)
});

initialCards.forEach(function (card) {
    console.log(card.name);
});