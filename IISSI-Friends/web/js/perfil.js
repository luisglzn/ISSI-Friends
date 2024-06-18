"use strict";

import { galleryRenderer } from "/js/renderers/gallery.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { pictureswithusersAPI_auto } from "/js/api/_pictureswithusers.js";
import { sessionManager } from "/js/utils/session.js";
import { usersAPI_auto } from "/js/api/_users.js";

async function main() {
    loadAllpictures();
    let ProfileForm = document.getElementById("form-profile-edit");
    let deleteBtn = document.getElementById("delete-user");
    deleteBtn.onclick = handleDeleteProfile;
}
async function loadAllpictures() {
    let galleryContainer = document.querySelector("div.container");
    let usuario = sessionManager.getLoggedUser().userId;
    let fotos_usuario = [];
    try {
        let pictures = await pictureswithusersAPI_auto.getAll(); 
        for(let i = 0; i < pictures.length; i++){
            if(usuario == pictures[i].userId){
                fotos_usuario.push(pictures[i]);
            }
        }
        let cardGallery = galleryRenderer.asCardGallery(fotos_usuario);
        galleryContainer.appendChild(cardGallery);
    } catch (err) {
        messageRenderer.showErrorAsAlert("Error while loading pictures ", err);
    }
}

async function handleDeleteProfile(event){
    let userId = sessionManager.getLoggedUser().userId;
    let answer = confirm("Estás seguro que quieres borrar el perfil");
    if(answer){
        let photos = await pictureswithusersAPI_auto.getAll();
        console.log(photos);
        let userCount = 0;
            for(let i=0; i < photos.length; i++){
                if(userId == photos[i].userId){
                    userCount+=1;
                }
            }
        if(userCount === 0){
            await usersAPI_auto.delete(userId);
            sessionManager.logout();
            window.location.href = "index.html";
        }else{
            messageRenderer.showErrorAsAlert("No se puede borrar un perfil con fotos");
        }
    }
}


document.addEventListener("DOMContentLoaded", main);