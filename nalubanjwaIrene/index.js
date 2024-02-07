let email = "nalubanjwairene@gmail.com"
let password = "22/u/4616/EVE@2024"

let userEmail = prompt("Enter your email")
let userPassword = prompt("Enter your Password")

function loginCredentials(inputEmail, inputPassword){
    if(inputEmail === email && inputPassword === password){
        console.log(`"User email is [email].login succcessfully!" ${userPassword}`)
    }else{
        console.log(`The provided email : ${userEmail} Incorrect user credentials`)
    }
}

loginCredentials(userEmail, userPassword)


