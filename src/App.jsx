import React, {useEffect, useState} from 'react'

function App() {
    const [items, setItems] = useState([])

    useEffect(() => {
        loadTodoList();
    }, [])

    function loadTodoList() {
        fetch("http://localhost:8080/todo-list")
            .then(r => r.json())
            .then(r => setItems(r.items))
    }

    return (
        <div className="app">
            <h1>My todo list</h1>
            <div className="items">
                {
                    items.map(item => <div className={"item"}>{item}</div>)
                }
            </div>
        </div>
    )
}

export default App
