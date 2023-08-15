import React, { useState, useEffect } from 'react'

const UserList = () => {

    const [user, setUser] = useState([]);
    const [term, setTerm] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await res.json();
            setUser(users);
        }
        fetchUsers();
    }, []);

    let renderUser = user.map((user) => {
        return (
            <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        );
    })

    return (
        <div>
            <input value={term} type='text' onChange={(e) => setTerm(e.target.value)} />
            {renderUser}
        </div>
    )
}

export default UserList
