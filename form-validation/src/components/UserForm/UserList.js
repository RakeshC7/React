import React from "react";
import Card from "../Ui/Card";
import styles from "./UserList.module.css"

const UserList = (props) => {
    console.log(props);
    return (
        <Card>
            {props.children}
            <ul className={styles.userform_list}>
                {
                    props.itemLists.map(item => (
                        <li key={item.id}>
                            <span className="list__usename">{item.username}</span>
                            <span className="list__age">( {item.age} Years Old )</span>
                        </li>
                    ))
                }
            </ul>
        </Card>
    );
}

export default UserList;