homeDisplay = document.getElementById("home-el")
guestDisplay = document.getElementById("guest-el")


let num1 = 1
let num2 = 2
let num3 = 3
let count = 0 
let numero = 0

function one(){
    console.log("button works")
    count += num1
    homeDisplay.textContent  = count
    //homeDisplay.textContent = num1 + result    
}

function two(){
    console.log("button works")
    count += num2
    homeDisplay.textContent = count  
}

function three(){
    console.log("button works")
    count += num3
    homeDisplay.textContent = count 
}

function uno(){
    console.log("button works")
    numero += num1
    guestDisplay.textContent  = numero
    //homeDisplay.textContent = num1 + result    
}

function dos(){
    console.log("button works")
    numero += num2
    guestDisplay.textContent = numero  
}

function tres(){
    console.log("button works")
    numero += num3
    guestDisplay.textContent = numero 
}