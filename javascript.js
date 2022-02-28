console.log("my javascript program");

//function in javascript

function greet(name){
console.log(name + " is a good girl" );
}

let name ="sanjana";
let name1 ="sanjana";
let name2 ="sanjana";
greet(name);
greet(name1);
greet(name2);

// alert in javascript
alert("this is a message");

// prompt in javascript
let A = prompt("what is your name","Guest");
console.log(A);

// confirm
let deletepost = confirm("Do you really want to delete this post?");
console.log(deletepost);

//loops
let i =0;
for(i=0; i<3; i++){
    console.log(i);
}

// loops
let friends =["sanjana", "jhambia", "payal", "pooja"];
friends.forEach(function f(element){
    console.log("hello Friends," + element + " to javascript");
})

// while loops in js
let j=0;
while(j<4){
    console.log(` ${j} is less than 4`);
    j++;
}
// var caseQty = 144;
//  alert(caseQty);
