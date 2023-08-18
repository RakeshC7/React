import HOC from "./HOC";

const TodoList = ({ data }) => {
    // const [todos, setTodos] = useState([]);
    // const [term, setTerm] = useState([]);

    // useEffect(() => {
    //   const fetchtodos = async () => {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    //     const json = await res.json();
    //     setTodos(json);
    //     console.log(json);
    //   };
    //   fetchtodos();
    // }, []);

    let rendertodos = data.slice(0, 10).map((todo) => {
        return (
            <div key={todo.id}>
                <p>
                    <strong>{todo.title}</strong>
                </p>
            </div>
        );
    });

    // let filteredTodos = todos
    //   .slice(0, 10)
    //   .filter(({ title }) => {
    //     return title.indexOf(term) >= 0;
    //   })
    //   .map((todo) => {
    //     return (
    //       <div key={todo.id}>
    //         <p>
    //           <strong>{todo.title}</strong>
    //         </p>
    //       </div>
    //     );
    //   });

    return (
        <div>
            {/* <h1>Todos List</h1> */}
            {/* <input value={term} onChange={(e) => setTerm(e.target.value)} /> */}
            {rendertodos}
        </div>
    );
};

const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;
