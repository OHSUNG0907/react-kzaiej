import React from 'react';
import './style.css';

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Wash dishes', done: false },
    { id: 2, text: 'Do laundry', done: false },
    { id: 3, text: 'Take shower', done: false }
  ]);

  return (
    <div>
      <h1>Todo List</h1>

      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

function AddTodo({ setTodos }) {
  const inputRef = React.useRef();
  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text,
      done: false
    };
    console.log(todo);
    setTodos(prevTodos => {
      return prevTodos.concat(todo);
    });
    inputRef.current.value = '';
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input placeholder="Add todo" name="addTodo" ref={inputRef} />
      <br />
      <select name="symbol">
        <option selected value="BTC">
          Bitcoin
        </option>
        <option value="ETH">Ethereum</option>
        <option value="BNB">Binance Coin</option>
        <option value="ADA">Cardano</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
