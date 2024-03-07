

const btn = document.querySelector(".btn");
const div = document.querySelector(".container");
const container = document.querySelectorAll(".emoji");
const feedback =document.querySelectorAll(".feedback")

container.forEach((element) =>{
    element.addEventListener("click", () =>{
        btn.addEventListener("click", () =>{
            div.innerHTML = `Thank You! <br> <br> We will use Your FeedBack to improve our Services. <br> <br>`;
            div.innerHTML += `FeedBack: ${element.textContent}`;
        })
    })
})







