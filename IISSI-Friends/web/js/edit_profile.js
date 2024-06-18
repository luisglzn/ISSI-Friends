"use strict";
import { usersAPI_auto } from "/js/api/_users.js";
import { sessionManager } from "/js/utils/session.js";




async function main(){
    loadCurrentUser();
    let ProfileForm = document.getElementById("form-profile-edit");
    ProfileForm.onsubmit = actualizaPerfil;
}

async function loadCurrentUser(){
    let userId = sessionManager.getLoggedUser().userId;
    let currentUser = await usersAPI_auto.getById(userId);
    let username = document.getElementById("firstname-input");
    let email = document.getElementById("email-input");
    let gender = document.getElementById("gender-input");
    let height = document.getElementById("height-input");
    let wheight = document.getElementById("weigth-input");
    let hairColor = document.getElementById("haircolor-input");
    let eyeColor = document.getElementById("eyecolor-input");
    let bio = document.getElementById("bio-input");
    let avatar = document.getElementById("avatar-input");
    let direccion = document.getElementById("adress-input");
    let fechaNacimiento = document.getElementById("birthdate-input");
    let aficion1 = document.getElementById("aficion1-input");
    let aficion2 = document.getElementById("aficion2-input");
    let aficion3 = document.getElementById("aficion3-input");

    try{
        username.value = currentUser.username;
        email.value = currentUser.email;
        gender.value = currentUser.gender;
        height.value = currentUser.height;
        wheight.value = currentUser.wheight;
        hairColor.value = currentUser.hairColor;
        eyeColor.value = currentUser.eyeColor;
        bio.value = currentUser.bio;
        avatar.value = currentUser.avatar;
        direccion.value = currentUser.direccion;
        fechaNacimiento.value = currentUser.fechaNacimiento;
        aficion1.value = currentUser.aficion1;
        aficion2.value = currentUser.aficion2;
        aficion3.value = currentUser.aficion3;


    }catch(err){
        console.log(err)
    }
}

async function actualizaPerfil(event){
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let UserId = sessionManager.getLoggedId();

    try{
        await usersAPI_auto.update(formData,UserId);
        window.location.href = "index.html";
    }catch(err){
        console.log(err)
    }
}

document.addEventListener("DOMContentLoaded",main);