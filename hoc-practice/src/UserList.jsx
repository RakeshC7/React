import React, { useState, useEffect } from 'react';
import withHoc from './withHoc';

const UserList = ({ data }) => {

    // const [user, setUser] = useState([]);
    // const [term, setTerm] = useState('');

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const users = await res.json();
    //         setUser(users);
    //     }
    //     fetchUsers();
    // }, []);

    let renderUser = data.map((user) => {
        return (
            <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        );
    });
    // let filteredUsers = user
    //     .filter(({ name }) => {
    //         return name.indexOf(term) >= 0;
    //     })
    //     .map((user) => {
    //         return (
    //             <div key={user.id}>
    //                 <p>
    //                     <strong>{user.name}</strong>
    //                 </p>
    //             </div>
    //         );
    //     }
    //     );

    return (
        <div>
            {/* <h2>Users</h2> */}
            {/* <input value={term} type='text' placeholder='search here' onChange={(e) => setTerm((e.target.value))} /> */}
            {renderUser}
        </div>
    )
}

const SearchUsers = withHoc(UserList, "users")

export default SearchUsers
