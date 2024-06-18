"use strict";


const userValidator = {
    validateRegister: function(formData){
        let errors = [];
        let username = formData.get("username");
        let password = formData.get("password");
        let password2 = formData.get("password2");
        let altura = formData.get("height");
        let biografia = formData.get("bio");
        let peso = formData.get("wheight");
        let fechaNacimiento = formData.get("dateOfBirth");
        let codPostal = formData.get("postcodeId");
        let avatar = formData.get("avatarUrl");
        var fechaActual = new Date();
        var fNacimiento = new Date(fechaNacimiento);
        var edadUsuario = parseInt((fechaActual - fNacimiento)/365/24/60/60/1000);
        
        if(username.length < 3){
            errors.push("El nombre de usuario debe tener más de 3 caracteres");
        }

        if(password.length < 5){
            errors.push("La contraseña debe tener 5 caracteres al menos");
        }

        if(altura < 50 || altura > 250){
            errors.push("La altura debe estar comprendida entre los 50 cm y los 250 cm");
        }

        if(biografia.length < 0){
            errors.push("La biografia debe contener al menos 20 caracteres");
        }

        if(peso < 5 ){
            errors.push("El peso debe ser al menos de 5KG");
        }

        if(edadUsuario < 18 ){
            errors.push("El usuario no puede ser menor de edad");
        }

        if(edadUsuario > 100){
            errors.push("El usuario no puede tener más de cien años")
        }

        if(password !== password2){
            errors.push("Las contraseñas deben coincidir");
        }

        if(codPostal < 5){
            errors.push("Los códigos postales contienen 5 números");
        }


        return errors;
    }
};
export { userValidator };