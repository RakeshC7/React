import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
	const [userList, setUserList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		// console.log("uName , uAge" , uName, uAge);..
		setUserList( prevUsersList => {
			return [...prevUsersList,
				{
					name: uName,
					age: uAge,
					id: Math.random().toString()
				}
			];
		});
	}
	return (
		<React.Fragment>
			<AddUser onAddUser={addUserHandler}></AddUser>
			<UsersList users={userList}></UsersList>
		</React.Fragment>
	);
}

export default App;
