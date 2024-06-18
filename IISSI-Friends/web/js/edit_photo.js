"use strict";
import { picturesAPI_auto } from "/js/api/_pictures.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";
import { pictureswithusersAPI_auto } from "/js/api/_pictureswithusers.js";

let urlParams = new URLSearchParams(window.location.search);
let pictureId = urlParams.get("pictureId");
let currentPhoto = null;

async function main() {

    if (pictureId !== null) {
        loadCurrentPhoto();
    }

    let registerForm = document.getElementById("form-photo-upload");
    registerForm.onsubmit = handleSubmitPhoto;
}

async function loadCurrentPhoto() {
    let pageTitle = document.getElementById("page-title");
    let urlInput = document.getElementById("pictureURL");
    let titleInput = document.getElementById("name");
    let descriptionInput = document.getElementById("input-description");
    let visibilityInput = document.getElementById("input-visibility");
    pageTitle.textContent = "Editing a photo";
    try {
        currentPhoto = await picturesAPI_auto.getById(pictureId);
        urlInput.value = currentPhoto.pictureURL;
        titleInput.value = currentPhoto.name;
        descriptionInput.value = currentPhoto.description;
        visibilityInput.value = currentPhoto.visibility;
    } catch (err) {
        messageRenderer.showErrorAsAlert(err.response.data.message);
    }
}

async function handleSubmitPhoto(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let usuario = sessionManager.getLoggedUser().userId;
    let fotos_usuario = [];
    let pictures = await pictureswithusersAPI_auto.getAll();
    if (currentPhoto === null) { // Creating a new photo
        // Add the current user's ID
        for (let i = 0; i < pictures.length; i++) {
            if (usuario == pictures[i].userId) {
                fotos_usuario.push(pictures[i]);
            }
        }

        if (fotos_usuario.length < 5) {
            formData.append("userId", sessionManager.getLoggedId());
            try {
                let resp = await picturesAPI_auto.create(formData);
                let newId = resp.lastId;
                window.location.href = `picture_detail.html?pictureId=${newId}`;
            } catch (err) {
                messageRenderer.showErrorAsAlert(err.response.data.message);
            }
        }else{
            messageRenderer.showErrorAsAlert("Un usuario no puede tener más de 5 fotos");
        }


    } else { // Updating an existing photo
        formData.append("userId", currentPhoto.userId);
        formData.append("date", currentPhoto.date);
        try {
            await picturesAPI_auto.update(formData, pictureId);
            window.location.href = `picture_detail.html?pictureId=${pictureId}`;
        } catch (err) {
            messageRenderer.showErrorAsAlert(err.response.data.message);
        }
    }
}

document.addEventListener("DOMContentLoaded", main);