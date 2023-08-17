import React, { useState, useEffect } from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [term, setTerm] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            const todo = await res.json();
            setTodos(todo);
        }
        fetchTodos();
    }, []);

    let filteredTodos = todos
        .slice(0, 10)
        .filter(({ title }) => {
            return title.indexOf(term) >= 0;
        })
        .map((todo) => {
            return (
                <div key={todo.id}>
                    <p>
                        <strong>{todo.title}</strong>
                    </p>
                </div>
            );
        }
        );

    return (
        <div>
            <h2>Todos</h2>
            <input value={term} type='text' placeholder='search here' onChange={(e) => setTerm((e.target.value))} />
            {filteredTodos}
        </div>
    )
}

export default TodoList
