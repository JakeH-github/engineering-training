import React from 'react';
import {connect} from "react-redux";

const ErrorMessage = (props) => {
    if (!props.error) return;
    return (
        <div className="alert alert-danger" role="alert">
            This is a danger alert—check it out!
        </div>
    );
}


function mapStateToProps(state) {
    const { dataLoaded: { error }  } = state;
    console.log(error);
    return { error };
}

export default connect(mapStateToProps)(ErrorMessage)
