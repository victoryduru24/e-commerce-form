"use strict"

//Selecting Elements

const nameEl = document.querySelector("#name");
const descriptionEl = document.querySelector("#description");
const priceEl = document.querySelector("#price");
const imageEl = document.querySelector("#images");
const categoryEl = document.querySelector("#category");
const availqtyEl = document.querySelector("#quantity");
const submitbtn = document.querySelector("#submit");

submitbtn.addEventListener("click",  function(event){
    event.preventDefault();

    alert("with all my billions😒😒😒🙆‍♀️");

    nameEl.value = "";
    descriptionEl.value = "";
    priceEl.value = "";
    imageEl.value = "";
    categoryEl.value = "";
    availqtyEl.value = "";
})


console.log(priceEl);