import React from 'react';
import utils from "../utils";
import store from '../store';
import { connect } from 'react-redux'
import styled from 'styled-components';

const ModalContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.5);
    z-index: 10;
`;

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.loading){
          return  <ModalContainer>
            {/*<div className="overlay-container">*/}
                    <div className="loading-modal-container" id="modalContainer">
                    <div id="loading-icon-container">
                    <i className="spinner-border"></i>

                    <span>Loading...</span>

                </div>
                </div>
          </ModalContainer>
                {/*</div>*/}
        }
    }
}

function mapStateToProps(state) {
    const { dataLoaded } = state;
    return { loading: dataLoaded.loading };
}

export default connect(mapStateToProps)(Modal)
