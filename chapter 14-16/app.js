let stud_name1=[];
let stud_name2=[];
let str_array=["abcd","ghi","kjhk"];
let num_array=[12,23,213,12334,345];
let bool_arrray=[true,false]
let mix_array=[ "Asd" , "xvc",123,123,"tyu",3,true];
let education = ["SSC","HSC"," BCS","BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write(education[0]+"<br>"+education[1]+"<br>"+education[2]+"<br>"+education[3]+"<br>"+education[4]+"<br>"+education[5]+"<br>"+education[6]+"<br>"+education[7]);

var name=["Michael","John","Tony"];
var score=[320,230,480];
var total = 500
var per = [];
per[0]=(score[0]/total)*100;
per[1]=(score[1]/total)*100;
per[2]=(score[2]/total)*100;
document.write("Score of Michael is"+name[0]+" is "+ score[0]+". Percentage: "+per[0]+"%");
document.write("<br>Score of Michael is"+name[1]+" is "+ score[0]+". Percentage: "+per[1]+"%");
document.write("<br>Score of Michael is"+name[2]+" is "+ score[0]+". Percentage: "+per[2]+"%");


var color = ["red" ,"blue","green","black"];
var add1;
var add2;
var add3;
var del1;
var a;
var b;
document.write(color);
add1 = prompt("what color did you want to add at begging");
color.unshift(add1)
document.write(color);
add2=prompt("what color did you want to add at begging");
add3=prompt("what color did you want to add at begging");
color.unshift(add2);
color.unshift(add3);
document.write(color);
color.shift();
document.write(color);
color.pop();
document.write(color);
a = Number(prompt("position you want to add"));
b= prompt("name of color you want to add");
color.splice(0,a,b);
document.write(color);





var score = [ 320 , 230 , 480 , 120 ];
document.write(score);
score.sort();
document.write("<br>"+score);


var city =["karachi","lahore","islamabad"+"quetta"+"peshawar"];
var name ;
name = prompt("select city");
if (name == city[0]){
document.write("Karachi,");
}
if (name == city[1]){
    document.write("Lahore,");
}
if (name == city[2]){
    document.write("Islamabad,");
    }
if (name == city[3]){
    document.write("Qutta,");
    }
if (name == city[4]){
    document.write("Peshawar,");
    }


var arr = ["This "," is ", " my ", " cat"];
document.write("Array:<br>"+arr)
document.write("<br>String:<br>"+arr.join( " " ));


var value=["Keyboard","mouse","printer","monitor"];
document.write("Devices:<br>"+value);
document.write("<br>Out:<br>"+value[0]);
document.write("<br>Out:<br>"+value[1]);
document.write("<br>Out:<br>"+value[2]);
document.write("<br>Out:<br>"+value[3]);



var value=["Keyboard","mouse","printer","monitor"];
document.write("Devices:<br>"+value);
document.write("<br>Out:<br>"+value[3]);
document.write("<br>Out:<br>"+value[2]);
document.write("<br>Out:<br>"+value[1]);
document.write("<br>Out:<br>"+value[0]);

var arr=["Apple", "Samsung"," Motorola", "Nokia"," Sony" ," Haier"] ;
document.write(arr);