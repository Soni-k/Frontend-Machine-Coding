let boxCon=document.querySelector(".box-container")
let box=document.querySelectorAll(".box")
let queue=[];

boxCon.addEventListener("click",function(element){
   let index=element.target.dataset.index;
	//  console.log(index);
	if(index !=undefined){
		queue.push(index);
		box[index].classList.add("green-color")
	}
	if(queue.length==7){
		let cnt=0;
		while(queue.length>0){
			let ind=queue.shift();
			cnt++;
			setTimeout(()=>{
				box[ind].classList.remove("green-color");
			},cnt*1000)
		}
	}


	 
})