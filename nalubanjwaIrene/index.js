// Declaring two variables ie email and password
let email = "nalubanjwairene@gmail.com"
let password = "22/u/4616/EVE@2024"

// declaring the prompt form for entering credentials
let userEmail = prompt("Enter your email")
let userPassword = prompt("Enter your Password")

// Introducing the javascript function with two parameters
function loginCredentials(inputEmail, inputPassword){
    if(inputEmail === email && inputPassword === password){
        console.log(`"User email is [email].login succcessfully!" ${userPassword}`)
    }else{
        console.log(`The provided email : ${userEmail} Incorrect user credentials`)
    }
}

// Calling the function
loginCredentials(userEmail, userPassword)





