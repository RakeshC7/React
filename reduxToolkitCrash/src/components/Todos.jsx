import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo } from './../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    return (
        <>
            <h2 className='text-left'>Todo List</h2>
            <ul className='list-none'>
                {
                    todos.length === 0 && <li className='mt-4 text-sm text-center text-zinc-500 bg-zinc-800 px-4 py-2 rounded'>Todo list is empty !</li>
                }
                {
                    todos?.map((todo) => (
                        <li
                            className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
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
