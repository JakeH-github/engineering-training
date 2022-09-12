import React from 'react';
import ListItem from "./listitem";
import {connect} from "react-redux";

const List = (props) => {
    const data = props.data;
    if(!data){return;}

    return (
        <ul className="primaryList">
            {data.jirasObject.map((item, i) => (
                <ListItem key={i} title={item.title} icon={item.icon} link={item.link}></ListItem>
            ))}
        </ul>
    );
    //return
}


function mapStateToProps(state) {
    const { dataLoaded } = state;
    console.log(state);
    return { data: dataLoaded.data };
}

export default connect(mapStateToProps)(List)

//export default List;
