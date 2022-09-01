import React from 'react';
import utils from "../utils";
import store from '../store';
import { connect } from 'react-redux'



class Modal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.loading){
          return  <div class="overlay-container">
                    <div class="loading-modal-container" id="modalContainer">
                    <div id="loading-icon-container">
                    <i class="spinner-border"></i>

                    <span>Loading...</span>

                </div>
                </div>
                </div>
        }
    }
}

function mapStateToProps(state) {
    const { dataLoaded } = state;
    return { loading: dataLoaded.loading };
    console.log(state);
}

export default connect(mapStateToProps)(Modal)
