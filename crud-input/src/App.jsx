import { useState } from 'react'
import './App.css'

function App() {

    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);


    const addRow = () => {
        if (name && age) {
            if (isEditing) {
                // Update the existing row
                const newData = [...data];
                newData[editIndex] = { name, age };
                setData(newData);
                setIsEditing(false);
                setEditIndex(null);
            } else {
                // Add a new row
                setData([...data, { name, age }]);
            }
            // Clear the input fields
            setName("");
            setAge("");
        }
    }

    const editRow = (index) => {
        setName(data[index].name);
        setAge(data[index].age);
        setIsEditing(true);
        setEditIndex(index);
    }

    const removeRow = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);

        setIsEditing(false);
        // Clear the input fields
        setName("");
        setAge("");
    }

    return (
        <>
            <h1>Input Box</h1>
            <form>
                <input
                    className='inputWrap'
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value.replace(/\W/g, ''))}
                />
                <input
                    className='inputWrap'
                    type='text'
                    placeholder='Age'
                    value={age}
                    onChange={(e) => setAge(e.target.value.replace(/\D/g, ""))}
                />
                <button onClick={addRow} type='button'>
                    {isEditing ? 'Update' : 'Add'}
                </button>
            </form>

            <h3>Input Data</h3>
            <table width='100%'>
                <thead>
                    <tr>
                        <th width='50%'>Name</th>
                        <th width='20%'>Age</th>
                        <th width='30%'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                                <td>
                                    <button className='edit mr-10 small-btn' type='button' onClick={() => editRow(index)}>Edit</button>
                                    <button className='small-btn' type='button' onClick={() => removeRow(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default App
