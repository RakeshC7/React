import "./App.css";
import SearchTodos from "./TodoList";
import SearchUser from "./UserList";

export default function App() {
  return (
    <div className="App">
      <SearchUser />
      <SearchTodos />
    </div>
  );
}
