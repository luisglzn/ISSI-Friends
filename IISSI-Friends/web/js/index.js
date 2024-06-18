
"use strict";

import { galleryRenderer } from "/js/renderers/gallery.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { pictureswithusersAPI_auto } from "/js/api/_pictureswithusers.js";

async function main() {
    loadAllpictures();
}
async function loadAllpictures() {
    let galleryContainer = document.querySelector("div.container");
    try {
        let pictures = await pictureswithusersAPI_auto.getAll();
        let cardGallery = galleryRenderer.asCardGallery(pictures);
        galleryContainer.appendChild(cardGallery);
    } catch (err) {
        messageRenderer.showErrorAsAlert("Error while loading pictures", err);
    }
}
document.addEventListener("DOMContentLoaded", main);