//remove DOM element
let child = document.getElementById('oaxaca');
let parent = document.getElementById('more-destinations');
parent.removeParent(document);

//Button onclick
let element = document.querySelector("button");
function turnButtonRed (){
	element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button"; 
}
element.onclick = turnButtonRed;

//Child-Parent DOM Traversal
let first = document.body.firstChild;
first.innerHTML = "First child";
first.parentNode.innerHTML = "I am the parent and my inner HTML has been replaced!";