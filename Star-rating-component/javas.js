let starCon =document.querySelector("#star-con")
let star=document.querySelectorAll(".star")
let filled=0;

starCon.addEventListener("click",function(element){
	let currClicked =element.target.dataset.index;

	// console.log(currClicked);
	for (let i = 0; i < filled; i++) {
		star[i].classList.remove("star-filled")
		
	}
	for (let i = 0; i < currClicked; i++) {
		  star[i].classList.add("star-filled");
	}
	document.getElementById("count").innerText=`Rating Count : ${currClicked}`
	  
	filled=currClicked;
	
});

starCon.addEventListener("mouseover",function(element){
	let currClicked =element.target.dataset.index;

	// console.log(currClicked);
	for (let i = 0; i < 5; i++) {
		star[i].classList.remove("star-filled")
		
	}
	for (let i = 0; i < currClicked; i++) {
		  star[i].classList.add("star-filled");
	}
});

starCon.addEventListener("mouseleave",function(element){
	// console.log(currClicked);
	for (let i = 0; i < 5; i++) {
		star[i].classList.remove("star-filled")
		
	}
	for (let i = 0; i < filled; i++) {
		  star[i].classList.add("star-filled");
	}
});