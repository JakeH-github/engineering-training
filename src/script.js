import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button';
import utils from './utils'

ReactDOM.render(
<Button/>,
    document.getElementById('root')
);

(async function() {
console.log("Engineering Training!");
console.log("modalButton", modalButton);







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
