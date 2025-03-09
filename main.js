
let sun =document.getElementById("wrapper-sun");

let moon =document.getElementById("wrapper-moon");


let main =document.getElementById("main");
let header =document.querySelector("header")

moon.style.display ="none";
sun.addEventListener("click", function(){
    main.style.backgroundColor ="white";
    sun.style.display ="none";
    moon.style.display ="block";
    header.style.backgroundImage = 'url("./images/bg-desktop-light.jpg")';    
    
})

moon.addEventListener("click", function(){
    main.style.backgroundColor ="#161722";
    main.style.transition ="400ms ease";
    header.style.transition ="400ms ease"
    sun.style.display ="block";
    moon.style.display ="none";
    header.style.backgroundImage ='url("./images/bg-desktop-dark.jpg")'
})


let checkbox =document.getElementById("chexbox");

let matn =document.getElementById("p");

checkbox.addEventListener("click", function(){
    if (checkbox.style.backgroundColor ="transparent"){
        checkbox.style.backgroundColor ="blue";
        matn.style.textDecoration ="line-through";
    } else if(checkbox.style.backgroundColor ="blue"){
        checkbox.style.backgroundColor ="transparent";
        matn.style.textDecoration ="none";
    }
})

let li =document.getElementById("li")

let del =document.getElementById("closeee");
del.addEventListener("click", function(){
    li.style.display ="none";
})

let todo =document.getElementById("todo-input")


let ul =document.querySelector("ul");

let button =document.createElement("button");
let svg =document.createElement("svg");

let matnn =document.createElement("p");

let button2 =document.createElement("button");

let svg2 =document.createElement("svg");
button.appendChild(svg);
button2.appendChild(svg2);
matnn.innerHTML(todo)

todo.addEventListener("keypress", function(event){
    if(event.key ==="Enter"){
        button.appendChild(svg);
        li.className("first-task");
        button.className("checkbox-tugma");
        button2.appendChild(svg2);
        li.appendChild(button, button2, matnn);

    }
})


// checkbox.addEventListener("click", function(){
//     matn.style.textDecoration ="line-through"
// })
// // checkbox.addEventListener("click", function(){

// //     if (checkbox.style.backgroundColor =="transparent"){
// //         checkbox.style.backgroundColor ="lightblue";
// //         matn.style.textDecoration ="line-through"
// //     }
// //     else if (checkbox.style.backgroundColor == "lightblue"){
// //         checkbox.style.backgroundColor ="transparent";
// //     }
    
// })

