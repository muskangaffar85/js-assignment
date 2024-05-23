let userInput = +prompt('Enter the value and check this is uppercase letter or lowercase letter')

if (userInput <= 90  && userInput > 64 ) {
    alert('This number is uppercase letter')
}else if (userInput <= 122 && userInput > 96 ) {
    alert('This number is lowercase letter')
} else {
    alert('Please check again')
}


let number = +prompt("Enter the number and check it's type")

if (number > 0) {
    alert('This number is positive')
} else if (number < 0) {
    alert('This number is negative')
}else{
    alert('This number is zero')
}

let user = +prompt('Enter the name')
if (user === user) {
    alert('This is not string') 
} else if (user !== user) {
    alert('This is string')
}


let password = 'Muskan'
let password2 = 'Ghaffar'
let userPassword = prompt('Please enter your password')

if (password === userPassword || password2 === userPassword) {
    alert('Correct! The password you entered matches the original password')
} else {
    alert('Incorrect password')
}


let greeting;
greeting = "Good day";
let greeting2
greeting2 = "Good evening";
let hour = +prompt("Enter the hour less then or equal to 24");
if (hour < 18) {
alert(greeting)
}else{
alert(greeting2)
}