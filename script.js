console.log("Engineering Training!");
console.log("modalButton", modalButton);

function openLoadingScreen() {
	var loadingScreen = document.getElementsByClassName('overlay-container');
	loadingScreen[0].style.display = 'block';
}

function closeLoadingScreen() {
	var loadingScreen = document.getElementsByClassName('overlay-container');
	loadingScreen[0].style.display = 'none';
}

//DIG-71441 below
var gitLinks = document.getElementsByTagName('a');
for (link in gitLinks){
	if(gitLinks[link].href){
	console.log(gitLinks[link].href);
	}
}
for (text in gitLinks){
	if(gitLinks[text].innerText){
	console.log(gitLinks[text].innerText);
	}
}