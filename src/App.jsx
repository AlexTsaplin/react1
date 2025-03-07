import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Header from "./components/Header.jsx";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h1>asdasdas</h1>
            <Header text={"Текст 1"} level={1}/>
            <Header text={"Текст 2"} level={2}/>
            <Header text={"Текст 3"} level={3}/>
            <TodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />
        </div>
    );
}

export default App;
