
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

