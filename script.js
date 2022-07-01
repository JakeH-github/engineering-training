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