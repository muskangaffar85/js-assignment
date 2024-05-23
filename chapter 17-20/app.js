var Arr=[[],[],[]];

var arrr = [[0 ,1,2,3],[1,0,1,2],[2,1,0,1]];

for (var  i = 1; i <= 10; i++ ){
    document.write(i+"<br>");
}


var number ;
var b ;
number =Number( prompt("Enter number to show in multiplication table"));
b = Number(prompt("Enter length multiplication table"));

for (var  i = 1; i <= b; i++ ){
    
    document.write(number, " X " , i , "  = " , i*number,"<br>");
}

fruits = ["apple", "banana", "mango", "orange","strawberry"];
for (var  i = 0; i <= 4; i++ ){
    
        document.write("Element at index ",i , " is ",fruits[i],"<br>");
    }

var Counting=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
for (var  i = 0; i <= 14; i++ ){
    
        document.write(Counting[i],",");
    }
document.write("<br>Reverse counting<br>");
    Counting.reverse();
    for ( j = 0; j <= 14; j++ ){
    
        document.write(Counting[j],",");
    }

    document.write("<br>Even<br>");
   var k;
    
    for ( k = 0; k <= 14;k+2 ){
    
        document.write(Counting[k],",");
    }

    
    document.write("<br>Odd<br>");
   var k;
       for ( k = 1; k <= 14;k+2 ){
    
        document.write(Counting[k],",");
    }
    document.write("<br>series<br>");
    
    var k;
        for ( k = 0; k <= 14;k+2 ){
     
         document.write(Counting[k],"k,");
     }


a = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("enter bakery item");
for (var i=0 ; i < a.length ; i++){
    if (a[i] == b){
        alert("cooki is available at index "+i+ " in our backry");   
break;
    }
    
}
if(a[i] != b){
    alert("we are sorry." +b+" is not a available in our bakery");
}


a = [24, 53, 78, 91, 12];
document.write("Array items: ",a);
var b =a.sort();
b.reverse();
document.write("<br>The largest number is ",b[0]);

a = [24, 53, 78, 91, 12];
document.write("Array items: ",a);
var b =a.sort();
document.write("<br>The smallest number is ",b[0]);



var a=5;
var b=20
    for (var  i = 1; i <= b; i++ ){
    
    document.write(a*i+"<br>");
}                              