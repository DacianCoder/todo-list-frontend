import {useEffect} from 'react'
import {FaSave, FaTrash} from 'react-icons/all';

function App() {


    useEffect(() => {
        fetch('http://localhost:8090/todo-list', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => result.items)
    }, [])

    return (
        <div className="app">
            <h1>
                My todo list
            </h1>
            <div className="items">
                {['abc', 'Testsdasda sda sdasdas  asd asdasdasdasddas das das das das ', 'a', 't', 'l', 'f'].map(el => <div
                    className="item">{el} <FaTrash className="deleteIcon"/></div>)}
            </div>
            <div className="newTodo">
                <div>
                    <label htmlFor="newTodo">Insert new todo: </label>
                    <input id="newTodo" type="text"/>
                </div>
                <FaSave className="saveIcon"/>
            </div>
        </div>
    )
}

export default App
