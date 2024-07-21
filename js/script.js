const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");


const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click",function(){
    searchForm.classList.toggle("active")
})

cartBtn.addEventListener("click",function(){
    cartItem.classList.toggle("active")
})

menuBtn.addEventListener("click",function(){
    navbar.classList.toggle("active")
})