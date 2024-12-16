let button=document.querySelector("#btn")
let modal=document.querySelector("#modal")
let close=document.querySelector("#close")

button.addEventListener("click",function(element){
	modal.style.display="block"
})
close.addEventListener("click",function(element){
	modal.style.display="none"
})
