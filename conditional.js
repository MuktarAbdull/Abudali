//CONDITIONAL STATEMENTS
// Hour
let Hour =10

if (Hour >=6 && Hour <= 12){
console.log('Good morning')
}
else if(Hour >=12 && Hour <=18){

    console.log('Good afternoon')
}
else{
    'Good evening'
}

// LOOPS
// FOR LOOP
// ENITIAL EXPERESION

for (let N = 0; N < 10; N++){
console.log('Sorry', N);
}
//Both works
for (let N = 10; N > 0; N--){
    console.log('Sorry', N);
    }

for (let M = 0; M < 10; M++){
    console.log("Hello Muktar", M)
}

let N = 10;

while (N < 10){
    console.log('hello muktar', N++)
}

const TechBrands =[
    'Facebook',
    'Google',
    'Amazon',
    'Apple'
]
for(Brands of TechBrands)
console.log(Brands)

//WHILE LOOOP
const names =["Ahmed", "Ahmed", "Muktar", "Abdisalam", "Abdullahi","Farah"]
for (name of names){
    console.log(name)
    // console.log(`Hello there $(name)`)
    if(name === "Muktar"){
        console.log("Muktar is in my list!")
        break
    }
    
}

//while loop
let loading = 0;

while(loading < 100){
    console.log("The website is still loading")
    loading++;
}


// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

// for(let step = 0; step < 10; step++){
//     console.log("you have to learn firt html"  +" " + step)
// } 

// let friuts =[
//     'banana',
//         'mango',
//         'orange',
//         'strewbery'
// ]
// console.log(friuts)

// for(let a = 0; a <friuts.length; a++){
//     console.log(friuts[a])
// }

let student ={
    Name: 'Abdullahi',
    lastName: 'Muuse',
    Address: 'Jigjiga',
    District: 'Dudahidi'
}

let text = ""
for(let text in student){
    console.log(student[text]);
}


const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("mukhe").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}

let language = 'Javascript';

let textt = "";
for(let x of language){
   console.log(x)
}

let ali = "";

let a = 0;
while (a < 10){
    console.log(a++)
}
// let A = 0
// do(
//     console.log(a){}
//     While (A< 10)
// )

const cars = [
    'Toyota',
    'BMW',
    'Hyundai',
    'Bugati',
    'Lanparghini',
    'Nissan'
]

let texxt = "";
for(N = 0; N < cars.length; N++){
    textt += cars[N] + "<br>"
    console.log("The CarType is" +" "+ cars[N])
}

let People = [{
    Name: 'Muktar',
    lastName: 'Abdullahi',
    Address:{
        City: 'Jigjiga',
        District: 'Dudahidi',
        Home: 'HM0001'
    },
    Age: '22'
}]

let MN = "";
for(M = 0; M < People.length; M++){
    MN += People[MN] + "<br>"
    console.log("Muktar's Information " + People[MN])
}

const letters = new Set()

const A = "A";
const b = "b";
const c = "c";

letters.add(A);
letters.add(b);
letters.add(c);

letters.forEach(value =>{
    console.log(value)
})


const fruit = new Map([
    ["Banana", 200],
    ["Orange", 400],
    ["Apple", 300],
    ["Lemon", 100]
]);
//CAN CHANGE EXIXTING FILE
fruit.set("Apple", 1000)
    //CAN ADD NEW ARRAY
fruit.set("Papaya", 600)
fruit.delete("Oragne", 400)
console.log(fruit.delete("Orange"))
console.log(fruit.get("Orange", 400))
console.log(fruit.has("Orange"))
console.log(fruit.forEach)


const fruitt = new Map([
    ["Banana", 200],
    ["Orange", 400],
    ["Apple", 300],
    ["Lemon", 100]
]);

let abdull = "";
fruitt.forEach (function(value, key) {
    abdull += key + '  ' + value + "<br>"
  })
document.getElementById("mukhe").innerHTML =  abdull;