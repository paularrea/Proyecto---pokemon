 "use strict"
//validaciones para log in, sign up y comunes
//en el telefono, solo numeros; en el nombre, que este lleno y con letras, etc
 
class Validator {
     constructor (userName, email, password){
        this.userName = userName;
        this.email = email
         this.password = password
     }
     //las validaciones tienen que devolverme true si cumblen o false caso contrario
     
        checkUserName(){
            return this.userName ? true : false
        }
        
        checkEmail(){
            return /*......REGEX*/.test(this.email) ? true : false
        }
        
        checkPassword(){
            return this.password.length >= 6 ? true : false
        }

        errorCreator(message, location){
            let div = document.createElement('div');
            div.setAttribute('class', 'error');
            div.innerHTML = message;
            FormData.insertBefore(div,location)
        }

        deleteErrors(){
            let errors = [...document.querySelectorAll('.error')]//todos mis errores son los que contienen la classe error definida en div.setAttribute
            errors ? errors.forEach(error =>
                error.remove() : null)  //si hay errores
            
        }
    }

    class SignUpValidator extends Validator {
        constructor (userName, email, password, repeatPassword){
            super (userName, email, password){
                this.repeatPassword = repeatPassword
            }
        }
        checkEmailInDB(userDB){
            let userDoesNotExist = false;
            if(!userDB){
                return true  //si lo encuentra devuelve false (se puede hacer login)
            }else{
                userDB.forEach(user => { 
                    if(user.email === this.email){ 
                        userDoesNotExist = false  //forEach de mi base de datos, si lo encuentra, devuelve false
                    }
                })
            }
            return userExists;
        }
    }

    class LogInValidator extends Validator {
    //     constructor (userName, email, password, repeatPassword){
    //         super (userName, email, password){
    //             this.repeatPassword = repeatPassword
    //         }
    //     }
    //     checkEmailInDB(userDB){
    //         let userDoesNotExist = false;
    //         if(!userDB){
    //             return true  //si lo encuentra devuelve false (se puede hacer login)
    //         }else{
    //             userDB.forEach(user => { 
    //                 if(user.email === this.email){ 
    //                     userDoesNotExist = false  //forEach de mi base de datos, si lo encuentra, devuelve false
    //                 }
    //             })
    //         }
    //         return userExists;
    //     }
    // }

