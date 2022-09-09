import React from 'react';

const ListItem = (props) => {
    const {title,link,icon} = props;

    return <li><i className="bi bi-x"></i><i className={icon}></i><a href={link}>{title}</a></li>;
}

export default ListItem;
