//seleccionamos los inputs

let userName =


signUpButton.addEventListener('click', function(event) => {
    event.preventDefault();



    if (checkValidUser()){
        createUser(userName.value, email.value, password.value)
        
    }
})

//true: si podemos registrar el usuario o false si no podemos registrarlo

function CheckValidUser(){
    let signUpValidator = new SignUpValidator
    (userName.value, email.value, password.value, repeatPassword.value);

    signUpValidator.deleteErrors()//antes de throw otro error, o hacerlo bien, me eliminas el error previo

    let usersDB = JSON.parse(localStorage.getItem('users'))

    let validUser = true;

    if (!signUpValidator.checkUserName()){
        signUpValidator.errorCreator('Por favor, introduce nombre valido', userName)
        validUser = false
    }
    /*escribir el resto de validaciones*/
    return validUser;
}


let usersDB = JSON.parse(localStorage.getItem('users')) //convertimos el texto en array de objetos

createUser(userName, email, password){
    const newUser = new User (userName, email, password)

    if (userDB){
        userDB.push(newUser); //pusheame cada objeto newUser en el array userDB
    }else{
        userDB = [newUser]
    }
    localStorage.setItem('users',JSON.stringify(usersDB)) //pasamos el array de objetos de los users a texto para guardarlo en localStorage
}