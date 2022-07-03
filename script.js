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

//DIG-71477 below
var gitLinks = document.getElementsByTagName('a');
var jirasArray = [];
for (link in gitLinks){
	if(gitLinks[link].href){
	jirasArray.push({
		links: gitLinks[link].href,
		titles: gitLinks[link].innerText,
	});
	}
}
console.log(jirasArray);
