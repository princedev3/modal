//{}[]
const btn = document.querySelector(".btn")
const modal = document.querySelector(".modal")
const closemodal = document.querySelector(".closemodal")

btn.addEventListener("click",function(){
    modal.classList.add("showmodal")
})
closemodal.addEventListener("click",function(){
    modal.classList.remove("showmodal")
})