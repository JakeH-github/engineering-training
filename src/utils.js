


const utils = {

        loadData: function(callBack){
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

export default utils;
