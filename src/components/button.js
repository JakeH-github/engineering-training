import React from 'react';
import utils from "../utils";
import store from '../store';


export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }


    handleOnClick(){
        const dataLoaded = store.getState().dataLoaded;
        if (dataLoaded) {
            return
        }

        store.dispatch({type:"TOGGLE_DATALOADING"})

        utils.loadData((data)=>{
            store.dispatch({type:"TOGGLE_DATALOADED"})
            store.dispatch({type:"TOGGLE_SUCCESS", data})
        });

    }
    render() {
        return <button onClick={this.handleOnClick}>Load Data</button>;
    }
}
