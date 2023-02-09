import React, {useEffect, useState} from 'react'
import {FaSave} from "react-icons/all.js";

function App() {
    const [items, setItems] = useState([])
    const [newTodo, setNewTodo] = useState('')

    useEffect(() => {
        loadTodoList();
    }, [])

    function loadTodoList() {
        fetch("http://localhost:8080/todo-list")
            .then(r => r.json())
            .then(r => setItems(r.items))
    }

    function saveNewTodo() {
        const body = JSON.stringify({items: [...items, newTodo]});
        fetch("http://localhost:8080/todo-list", {method: 'POST', body:body})
            .then(() => {
                setNewTodo("");
                loadTodoList();
            })

    }

    return (
        <div className="app">
            <h1>My todo list</h1>
            <div className="items">
                {
                    items.map(item => <div className={"item"}>{item}
                    </div>)
                }
            </div>
            <div className="newTodo">
                <label htmlFor="newTodo">Insert new todo: </label>
                <input type="text" id="newTodo" value={newTodo} onChange={ev => setNewTodo(ev.target.value)}/>
                <FaSave className="saveIcon" onClick={saveNewTodo}/>
            </div>
        </div>
    )
}

export default App
