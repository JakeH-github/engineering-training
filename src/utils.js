import store from './store';


const utils = {

        loadData: function(callBack){
            const callEndpoint = async () => await fetch('/getJiraTickets').then((value) =>{
                value.json().then((data) => {
                    callBack(data);
                });
            });
            callEndpoint();

    },
}

export default utils;
