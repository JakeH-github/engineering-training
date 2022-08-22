import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataLoaded: false };
    }

    render() {
        return <button>Load Data</button>;
    }
}
