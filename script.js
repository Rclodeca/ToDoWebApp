var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelector(".clickMe");
var lis = document.getElementsByTagName('li');
var deleteButtons = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = li.appendChild(document.createElement("BUTTON"));
	btn.innerHTML = 'Delete';
	btn.addEventListener("click", deleteListElement);
	li.appendChild(document.createTextNode(" " + input.value));
	li.onclick = toggleDoneAfterClick;
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneAfterClick() {
	//if (event.target.className = 'delete') console.log('yo');
	event.target.classList.toggle("done");
	console.log("hi");
}

function deleteListElement() {
	event.target.parentNode.remove();
	event.target.remove();
	console.log("deleteing");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//deleteButtons[2].addEventListener("click", deleteListElement);

for(var i = 0; i < lis.length; i++) {
	var anchor = lis[i];
	anchor.onclick = toggleDoneAfterClick;
}

for(var i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", deleteListElement);
}	