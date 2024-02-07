// Declaring two variables ie email and password
let email = "nalubanjwairene@gmail.com";
let password = "22/u/4616/EVE@2024";

// declaring the prompt form for entering credentials
let studentEmail = prompt("Enter your email");
let studentPassword = prompt("Enter your Password");

// Introducing the javascript function with two parameters
function loginCredentials(validEmail, validPassword){
    if(validEmail === email && validPassword === password){
        console.log(`"User email is [email].login succcessfully!" ${studentPassword}`)
    }else{
        console.log(`The provided email : ${studentEmail} Incorrect user credentials`)
    }
}

// Calling the function
loginCredentials(studentEmail, studentPassword);


