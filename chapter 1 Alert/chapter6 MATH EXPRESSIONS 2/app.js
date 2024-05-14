
var a = 10
document.write(`<h2>Result</h2>`+'The value of a is: '+ a+ `<br>`)
document.write('..............................................'+ `<br><br>`)

 ++a 
 document.write('The value of ++a is: '+ a + `<br>`)
 document.write('Now the value of a is: '+ a + `<br></br>`)

 document.write('The value of a++ is: '+ a + `<br>`)
 a++
 document.write('Now the value of a is: '+ a + `<br></br>`)

 --a 
 document.write('The value of --a is: '+ a + `<br>`)
 document.write('Now the value of a is: '+ a + `<br></br>`)


 document.write('The value of a-- is: '+ a + `<br>`)
 a-- 
 document.write('Now the value of a is: '+ a + `<br></br>`)
 document.write('_______________________________________________'+ `<br></br>`)



var a1 = 1
var b = 1

--a1;
document.write('<h5>--a;</h5>')
document.write('a is '+ a1 + `<br>`)

var b = --a1 - --b;
document.write('<h5>--a - --b;</h5>')
document.write('b is '+ b + `<br>`)

var ab = --a1 - --b + ++b;
document.write('<h5>--a - --b + ++b;</h5>')
document.write('ab is '+ ab + `<br>`)

var result = --a1 - --b + ++b + b--;
document.write('<h5>--a - --b + ++b + b--;</h5>')
document.write('result is '+ result + `<br>`)

document.write('_______________________________________________'+ `<br></br>`)



var userInput = prompt('Enter your name')
document.write('Greet the '+ userInput+ `<br>`)

document.write('_______________________________________________'+ `<br></br>`)



var Table = +prompt('Enter number which you want table')
var table = 5

 for (let index = 1; index < 11; index++) {
    if (Table === 0) {
        var cas = document.write(table + ' x ' + index + ' = '+ table*index + '<br>')
        
       }
    if (Table > 1) {
       var cas2 = document.write(Table + ' x ' + index + ' = '+ Table*index + '<br>')

    }
    
     
  }

document.write('_______________________________________________'+ `<br></br>`)



var userTable = (`<table><tr><td style='font-weight:bold'>Subject </td><td style='font-weight:bold'>Total Marks </td><td style='font-weight:bold'>Obtained Marks </td><td style='font-weight:bold'>Percentage</td></tr><tr><td>English</td><td>100</td><td>54</td><td>54%</td></tr><tr><td>Math</td><td>100</td><td>54</td><td>54%</td></tr><tr><td>Urdu</td><td>100</td><td>48</td><td>48%</td></tr><tr><td><h4></h4></td><td><h4 style="text-align:center;margin-top:-1px">300</h4></td><td><h4 style="text-align:center;margin-top:-1px">156</h4></td><td><h4 style="text-align:center;margin-top:-1px">52%</h4></td></tr></table>`)

document.write(userTable)