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
    },
];

const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");

function openModal(modal) {
    modal.classList.add("modal_is-opened")
}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened")
}

const previewModal = document.querySelector("#preview-modal");
const previewImage = previewModal.querySelector(".modal__preview-image");
const previewCaption = previewModal.querySelector(".modal__caption");
const previewCloseBtn = previewModal.querySelector(".modal__close-btn");

previewCloseBtn.addEventListener("click", function () {
    closeModal(previewModal);
});

function getCardElement(data) {
    const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);

    const cardTitle = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");
    const likeButton = cardElement.querySelector(".card__like-btn");
    const deleteButton = cardElement.querySelector(".card__delete-btn");

    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;

    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("card__like-btn_active")
    });

    deleteButton.addEventListener("click", function () {
        cardElement.remove();
    });

    cardImage.addEventListener("click", function() {
        previewImage.src = data.link;
        previewImage.alt = data.name;
        previewCaption.textContent = data.name;
        openModal(previewModal);
    });

    return cardElement;
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
    evt.preventDefault();

    const newCardData = {
        name:postNameInput.value,
        link: postLinkInput.value
    };

const cardElement = getCardElement(newCardData);
cardsList.prepend(cardElement);

closeModal(newPostModal);
addCardFormElement.reset();

};

addCardFormElement.addEventListener("submit", handleAddCardSubmit)

newPostCloseBtn.addEventListener("click", function() {
    closeModal(newPostModal)
});

initialCards.forEach(function (cardData) {
    const cardElement = getCardElement(cardData);
    cardsList.append(cardElement);
});