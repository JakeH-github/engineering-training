

(async function() {
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


const utils = {
  loadData: function(callBack, dataLoaded){
    if(dataLoaded === false){
      openLoadingScreen();
      const dataLoading = setTimeout(printData,1000);
        const callEndpoint = async () => await fetch('/getJiraTickets').then((value) =>{
            value.json().then((data) => {
                this.renderData(data).then((value) => {
                document.getElementsByClassName('primaryList')[0].innerHTML = value;
                console.log(data);
                callBack();
                });
            });
        });
        callEndpoint();

    }
    else{
      console.log("Data is already loaded.")
    }
  },
 renderData: function(data){
    return new Promise((resolve, reject) => {
      let response = '';
      data.jirasObject.forEach(function(item, index) {
        let {icon, link, title } = item;
        response += `<li><i class="bi bi-x"></i><i class="${icon}"></i><a href="${link}">${title}</a></li>`;
      })
      resolve(response);
    });
  }
}


function printData(){
	closeLoadingScreen();
	console.log("Data loaded");
}

const initModalButton=()=>{
	return new Promise((resolve, reject) => {
		let dataLoaded = false;
		console.log("dataLoaded", dataLoaded)
		modalButton.addEventListener("click", ()=>{
			utils.loadData(()=>{
				dataLoaded=true;
				resolve(dataLoaded);
			},dataLoaded);
		})
	})
}


console.log("BEFORE initModalButton is called");
await initModalButton();
console.log("AFTER initModalButton is called");

})();
