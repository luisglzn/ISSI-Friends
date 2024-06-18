"use strict";
import { photoRenderer } from "/js/renderers/photos.js";
import { picturesAPI_auto } from "/js/api/_pictures.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";
import { pictureswithusersAPI_auto } from "/js/api/_pictureswithusers.js";

// Get the ID of the photo to load from the URL params
let urlParams = new URLSearchParams(window.location.search);
let pictureId = urlParams.get("pictureId");
let loggedUserId = sessionManager.getLoggedUser().userId;
console.log("The photo ID to load is: " + pictureId);

async function main() {

    // Assign the handler function to the delete button
    let deleteBtn = document.getElementById("button-delete");
    deleteBtn.onclick = handleDelete;

    //Editar fotos
    let editBtn = document.getElementById("button-edit");
    editBtn.onclick = handleEdit;

    // Check that we have an ID before doing anything else
    if (pictureId === null) {
        messageRenderer.showErrorAsAlert("Please, provide a pictureId");
        return;
    }
    loadPhotoDetails();
    hideActionsColumn();

}
function handleEdit(event) {
    window.location.href = "edit_photo.html?pictureId=" + pictureId;
}

async function  hideActionsColumn() {
    let actions_col = document.getElementById("actions-col");
    let fotos = await pictureswithusersAPI_auto.getAll();
    let usuarioIdFoto;
    console.log(sessionManager.getLoggedUser().userId);
    for(let i=0; i < fotos.length; i++){
        if(pictureId == fotos[i].pictureId){
            usuarioIdFoto = fotos[i].userId;
        }
    }

    if (!(sessionManager.isLogged() && loggedUserId == usuarioIdFoto)) {
        actions_col.style.display = "none";
    }
}

async function handleDelete(event) {
    let answer = confirm("Do you really want to delete this photo?");
    if (answer) {
        try {
            await picturesAPI_auto.delete(pictureId);
            window.location = "/index.html";
        } catch (err) {
            messageRenderer.showErrorAsAlert(err.response.data.message);
        }
    }
}

async function loadPhotoDetails() {
    let photoContainer = document.querySelector("#photo-details-column");
    try {
        let photo = await picturesAPI_auto.getById(pictureId);
        let photoDetails = photoRenderer.asDetails(photo);
        photoContainer.appendChild(photoDetails);
    } catch (err) {
        messageRenderer.showErrorAsAlert("Error loading photo", err);
    }
}
document.addEventListener("DOMContentLoaded", main);