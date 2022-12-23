import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserForm/UserList"
import "./App.css";

function App() {
	const [userDatabase, setUserDatabase] = useState([]);

	const saveUserDataHandler = (uName, uAge) => {
		setUserDatabase(prevData => {
			return [...prevData, {
				username: uName,
				age: uAge,
				id: Math.random().toString()
			}];
		});
	}
	return ( 
		<div className = "container" >
			<UserForm onUserData={saveUserDataHandler}></UserForm>
			<UserList itemLists={userDatabase}>
				{ userDatabase.length === 0 && <h3 className="text-center">No list item added.</h3> }
			</UserList>
		</div>
	);
}

export default App;
