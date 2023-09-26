import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo } from './../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector((state) => state.todo.todos);
    console.log(todos);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Todo List</h1>
            <ul className='list-none'>
                {
                    todos?.map((todo) => (
                        <li
                            className='mt-4 flex justify-content items-center bg-zinc-800 px-4 py-2 rounded'
                            key={todo.id}
                        >
                            <span className='text-white'>{todo.text}</span>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
                            >X</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Todos;
