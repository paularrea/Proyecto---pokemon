"use strict";

class Validator {
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    checkUserName () {
        return this.userName ? true : false
    }
    checkEmail () {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.email) ? true : false
    }
    checkPassword () {
        if (!this.password){
            return false
        } else if (this.password.length < 6){
            return false
        } else {
            return true
        }
    }
    errorCreator (message, location) {
        let div = document.createElement("div")
        div.setAttribute("class", "error")
        div.innerHTML = message
        form.insertBefore(div, location)
    }
    deleteErrors (){
        let errors = [...document.getElementsByClassName("error")]
        errors ? errors.forEach(error => error.remove()) : null;
    }
}

class SignUpValidator extends Validator {
    constructor (userName, email, password, repeatPassword){
        super(userName, email, password);
        this.repeatPassword = repeatPassword
    }

    checkEmailInDB (usersDB){
        let userExists = false;

        if (!usersDB){
            return false;
        }
        else{
            usersDB.forEach(user => {
                if (user.email === this.email){
                    userExists=true
                }
            })
        }
        return userExists;
    }

    checkRepeatPassword () {
        if(this.password === this.repeatPassword) {
            return true;
        } else {
            return false;
        } 
    }
}

class LoginValidator extends Validator {
    constructor (userName,email,password){
        super(userName,password);
    }

    checkPasswordInDB (userDB){
        let passwordExists = false;

        if (!userDB){
            return false
        }
        else{
            userDB.forEach(user => {
                if (user.password === password.value){
                    passwordExists=true}
            })
        }
        return passwordExists;
    }

    checkUserNameInDB (userDB){
        let userNameExists = false;

        if (!userDB){
            return false
        }
        else{
            userDB.forEach(user => {
                if (user.name === userName.value){
                    userNameExists=true}
            })
        }
        return userNameExists
    }

}

