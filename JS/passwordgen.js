const passwordInput = document.getElementById("passwordInput")

let randomChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9,0,"!","?"]

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let password3 = document.getElementById("password3")
let password4 = document.getElementById("password4")


// function ranChar() {
//     let password = ""
//     for (let i = 0; i < 12; i++) {
//         let random = Math.floor(Math.random() * randomChar.length)
//         password = randomChar[random]
//     }
//     console.log(password)
    
// }


function password(){
    let password = ""
    for (let i = 0; i < passwordInput.value; i++){
        password += randomChar[Math.floor(Math.random() * randomChar.length)]
    }
    return password
}

function generatePass() {
    password1.textContent= password()
    password2.textContent= password()
    password3.textContent= password()
    password4.textContent= password()
}




// passwordInput.addEventListener("oninput", function(){
//     console.log("it works")
// })


// function generatePasswords() {
//     password1.textContent = passGenerator()
//     password2.textContent = passGenerator()
//     password3.textContent = passGenerator()
//     password4.textContent = passGenerator()
// }

// function passGenerator() {
//     const ranPossiblities = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9,0,"!","?"]
//     const passLength = passwordInput.value
//     return new Array(passLength).fill(0).map(function(){
//         return ranPossiblities[Math.floor(Math.random()* ranPossiblities.length)]
//     }).join(``)

// }
