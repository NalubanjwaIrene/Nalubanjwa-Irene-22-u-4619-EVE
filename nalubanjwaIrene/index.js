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


// function loginCredentials(Email,Password){
//     console.log(`Useremail is, ${Email} Password is ${Password}`);
//     let item1 = "yourStudentName@gmail.com"
//     let item2 = "yourRegistrationNumber@2024"
   
// }
// loginCredentials(' yourStudentName@gmail.com','yourRegistrationNumber@2024');
// //  loginCredentials(' yourRegistrationNumber@2024',);