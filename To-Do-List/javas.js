let input=document.querySelector("#input");
let addBtn=document.querySelector("#add-btn");
let items=document.querySelector("#items");

addBtn.addEventListener("click",function(e){
	let values=input.value;
	// console.log(values);
	addItem(values);
});

function addItem(text){
	let div=document.createElement("div");
	div.classList.add("item");
	items.appendChild(div);

	let span = document.createElement("span");
  span.classList.add("text");
  span.innerText = text;
  div.appendChild(span);

	let markBtn=document.createElement("button");
	markBtn.classList.add("mark-btn");
	markBtn.innerHTML = "✅";
	div.appendChild(markBtn);

	let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = "🗑️";
  div.appendChild(deleteBtn);

	input.value = "";
  input.focus();
}

items.addEventListener("click", function (e) {
  let btnClicked = e.target;

  if (btnClicked.classList.contains("mark-btn")) {
    btnClicked.parentElement.firstChild.classList.toggle("completed");
  } 
	else if (btnClicked.classList.contains("delete-btn")) 
		{
    btnClicked.parentElement.remove();
  }
});






































// let a = [1, 8, 3];
// let b = [,8, 5, 6];

// console.log(a + b);


// let x = 025;
// let y = 015;

// console.log(x - y);/

// const a = [1, 2, 3];
// const b = [...a];
// b.push(4);

// console.log(a); //1 2 3
// console.log(b); //1 2 3 4 