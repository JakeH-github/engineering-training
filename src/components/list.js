import React from 'react';
import ListItem from "./listitem";

const List = (props) => {
    const data = {
        "jirasObject": [{
            "icon": "bi bi-check-circle-fill",
            "title": "Conditional equality check",
            "link": "https://totalwine.atlassian.net/browse/DIG-71865"
        }, {
            "icon": "bi bi-check-circle-fill",
            "title": "Object Methods, and using 'this'",
            "link": "https://totalwine.atlassian.net/browse/DIG-71886"
        }, {
            "icon": "bi bi-check-circle-fill",
            "title": "JavaScript Classes using 'this'",
            "link": "https://totalwine.atlassian.net/browse/DIG-71939"
        }]
    }

    return (
        <ul className="primaryList">
            {data.jirasObject.map((item, i) => (
                <ListItem key={i} title={item.title} icon={item.icon} link={item.link}></ListItem>
            ))}
        </ul>
    );
    //return
}

export default List;
