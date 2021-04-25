// function add(a,b) {
//     return a + b;
// }
// console.log("Sum of two number is: " + add(4, 5))

// alert("Hi!")

// function saySomething(){
// console.log ("This is the regular way of declaring functions")
// }


// let saySomething1 = function(name1) {
//     console.log("")
// }

// let saySomething2 = () => {
//     console.log("Hi, this function declaration seems cool!")
// }

// saySomething2();

// DOM selector (single element)

// Normal
/*function addTwo(num1, num2) {
    
    let sum = num1+num2
    //console.log(`Sum of ${num1} and ${num2} = ${sum}`)
    
}

// Variable
let subtwo = function (num1, num2) {
    sub = num1 - num2
    return sub
}

// Arrow 
let multiplyTwo = (num1,num2) => {
   // console.log(`Multiplication of ${num1} and ${num2} is: ${num1*num2}`)
}

*/
//addTwo(100, 299);
//console.log(`Subtraction of 5 and 100 is: `+subtwo(5, 100));
//multiplyTwo(7, 9);

//let homies = ["Ork", "Meherab", "Ashraf"]


//let printhomies = function (item,i) {
    //console.log(`Homies are ${item} and their indexes are ${i}`)
//}

//homies.forEach(printhomies)


/*class Animal{
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}


let dog = new Animal("Husky", "Mammal", "white")
let cat = new Animal("Persian", "Mammal", "Brwon")
let cow = new Animal("Australian", "Mammal", "Black and white")
console.log(cow);
console.log(dog);
console.log(cat);
*/



/*
let val = document.getElementById("pow")
val.innerText = ("Yo do not change my man")
val.style.background = "#333"


val = document.querySelector("#newclass")

val.style.background = "#333"
val.innerText = "Not any random content"

val = document.querySelector('h3')
val.innerText = "Hi"
val.style.backgroundColor = "blue"
console.log(val)
*/

//let list = document.querySelector('ol').getElementsByTagName('li')
//list[1].innerText = "PHP"
//console.log(list)

//let listarr = Array.from(list)
//listarr.forEach(function(item) {
   // item.innerText = "Tomal"
//})

//let val1 = document.querySelector('.js');
//val1.innerText = "Prolog"


//let val2 = document.querySelectorAll('ul li')
//val2.forEach(function (item) {
  //  item.innerHTML = '<a href="https://www.instagram.com/">Instagram</a>'
    //console.log(item)
//});

//let list1 = document.querySelector('ol')
//let val3 = list1.children[0];

//list1.forEach(function (item) {
  //      item.
//})
//console.log(val3)

//val3 = list1.firstElementChild;
//val3 = list1.lastElementChild;
//val3 = list1.childElementCount;
//val3 = list1item;
///console.log(val3)


/*let olitem = document.createElement('li');

olitem.appendChild(document.createTextNode("Assembly 8086"));

document.querySelector('ol').appendChild(olitem);



let ulitem1 = document.createElement('li');

let link1 = document.createElement('a');

link1.appendChild(document.createTextNode("Reddit"));
link1.setAttribute('href', 'https://www.reddit.com')
ulitem1.appendChild(link1);

document.querySelector('ul').appendChild(ulitem1);

let ulitem2 = document.createElement('li');
let link2 = document.createElement('a');

link2.appendChild(document.createTextNode("spotify"));

link2.setAttribute('href', 'https://www.spotify.com')

ulitem2.appendChild(link2);

document.querySelector('ul').appendChild(ulitem2);


let newheading = document.createElement('h1')
newheading.appendChild(document.createTextNode("Hello my friend"))

let oldheading = document.querySelector('#pow')

let parent = document.querySelector('.container')

newheading.style.backgroundColor = "#121110"

parent.replaceChild(newheading, oldheading);

let list2 = document.querySelectorAll('li')

console.log(list2)

//list2[0].remove()
*/

let btn = document.querySelector('#sample-button').addEventListener('click', message);

function message() {
    alert("Button clicked")
}

