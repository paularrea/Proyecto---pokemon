let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat-password");

let logInButton = document.getElementById("log-in-button");
let form = document.getElementsByClassName("signup-form")[0];
let formWrapper = document.getElementsByClassName("form-wrapper")[0];
let loginButton = document.getElementsByClassName("login-button")[0];
var currentUser
let usersDB = JSON.parse(localStorage.getItem('users'))
//console.log(usersDB);

loginButton.addEventListener("click",function(event){
    event.preventDefault();
    deleteErrors();
    checkLogUser();
})


function deleteErrors (){
        let errors = [...document.getElementsByClassName("error")]
        errors ? errors.forEach(error => error.remove()) : null;
     }


  function checkLogUser(){
      usersDB.forEach(user => {
        
          if ((user.name === userName.value) && (user.password === password.value)){
              alert ('you are logged in!')
              localStorage.setItem('currentUser', JSON.stringify(user))
              window.location.href="./myprofile.html"
            }
    })
}
