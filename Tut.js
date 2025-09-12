let btn = document.querySelector("button");
let body = document.querySelector("body");

let theme = "Light";

btn.addEventListener("click", function(){
    if(theme === "Light"){
        theme = "Dark";
        body.style.backgroundColor = "black";
        body.style.color = "White";
    }
    else{
        theme = "Light";
        body.style.backgroundColor = "White";
        body.style.color = "Black";
    }
});

console.log("Hello World");