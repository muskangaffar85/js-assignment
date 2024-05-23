let cityName = prompt('Type the name of the city you want to enter.')
if (cityName) {
    alert('Welcome to city of lights')
}
let maleFemale = prompt('If you male press 1 OR If you female press 2')
if (maleFemale == 1) {
    alert('Good Morning Sir')
}else if (maleFemale == 2) {
    alert("Good Morning Ma'am")
}
let trafficSignal = prompt('Enter traffic signal color')

if (trafficSignal === "Red") {
    
document.write('Signal Color'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'Meassage'+'<br>'+trafficSignal+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'Must stop')
}else if (trafficSignal === 'Yellow') {
    document.write('Signal Color'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'Meassage'+'<br>'+trafficSignal+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'Ready to move') 
}else if (trafficSignal === 'Green') {
    document.write('Signal Color'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'Meassage'+'<br>'+trafficSignal+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'Move now')
}else{
    alert('Enter only Red, Yellow, Green color')
}
let fuel = +prompt('How much fuel is in your car?')

if (fuel < 0.49) {
    alert('Please refill the fuel in your car')
} else {
    alert('Please enter less than 0.49 litres.')
}
let a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
let b = 82;
if (b++ === 83 ){
alert("given condition for variable b is true");
}else{
    alert("given condition for variable b is false")
}

let c = 12;
if (c++ === 13){
alert("condition 1 is true");
}else{
    alert("condition 1 is false"); 
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}else{
    alert("condition 3 is false");
}
if(c === 14){
alert("condition 4 is true");
}
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }

    let studentMarks = +prompt('Enter your marks obtained')
if (studentMarks <= 300) {
    
let percentages = studentMarks*100/300
if (percentages > 80) {
    document.write('<h1>Marks Sheet</h1>'+'Total marks : 300'+`<br>`+`Marks obtained : `+studentMarks+`<br>`+'Percentage :'+percentages+'%'+`<br>`+'Grade : A-one')
} else if (percentages > 70) {
    document.write('<h1>Marks Sheet</h1>'+'Total marks : 300'+`<br>`+`Marks obtained : `+studentMarks+`<br>`+'Percentage :'+percentages+'%'+`<br>`+'Grade : A')
    
}else if (percentages > 60) {
    document.write('<h1>Marks Sheet</h1>'+'Total marks : 300'+`<br>`+`Marks obtained : `+studentMarks+`<br>`+'Percentage :'+percentages+'%'+`<br>`+'Grade : B')

}else if (percentages < 60) {
    document.write('<h1>Marks Sheet</h1>'+'Total marks : 300'+`<br>`+`Marks obtained : `+studentMarks+`<br>`+'Percentage :'+percentages+'%'+`<br>`+'Grade : Fail'+'<br>'+'Remarks : You need to improve')

}

}else{
    alert('Please enter less than 300.')
}

let numb = +prompt('Guess a secret number (ranging 1 to 20)')

if (numb == 6) {
    alert('Bingo! Correct answer')
}else if (numb == 7 || numb == 5) {
    alert('Close enough to the correct answer')
}else{
    alert('Try again')
}

let userMessage = +prompt('Enter only numbers divisible by 3.')
let divide = userMessage%3

if (divide == 0) {
    alert('The number is divisible by 3.')
} else {
   alert('Enter only numbers divisible by 3.') 
}

let userNumber = +prompt('Enter you number')
if (userNumber%2 === 0) {
    alert('This number is even')
}else{
    alert('This number is odd')
}