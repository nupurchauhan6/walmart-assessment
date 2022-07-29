import React, { useState, useEffect } from "react";
import UserCardComponent from './UserCard';


const getUsersUrl = "https://jsonplaceholder.typicode.com/users";

const UserListComponent = () => {

    const [users, setUsers] = useState({});

    useEffect(() => {
        getInitialUsers()
    }, [])

    const getInitialUsers = async () => {
        const response = await fetch(getUsersUrl);
        const jsonData = await response.json();
        setUsers(jsonData);
    }

    useEffect(() => {
        storeLocally()
    }, [users])

    const storeLocally = () => {
        users && users.length && users.map((user) => {
            return localStorage.setItem('userid' + user.id, JSON.stringify(user))
        })
    }

    const styles = {
        cardBody: {
            width: 900,
            margin: 'auto',
            textAlign: '-webkit-center'
        },
        h3:{
            textAlign: '-webkit-center'
        }
    }

    return (
        <div style={styles.cardBody}>
            <h3>Walmart Global Tech Software Engineering Homework Assignment</h3>
            {users && users.length && (users).map(user =>
                <UserCardComponent user={user} key={user.id}/>
            )}
        </div>
    );

}

export default UserListComponent