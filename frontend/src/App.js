import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodosList } from "./components/TodosList";
import { AddTodo } from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
      });
  }, []);

  return (
    <div className="App">
      <AddTodo
        todoValue={todoInput}
        onChangeTodoValue={(value) => {
          setTodoInput(value);
        }}
        onAddTodo={() => {
          setTodos([...todos, { id: uuid(), content: todoInput }]);
          setTodoInput("");
        }}
      />
      <TodosList todos={todos} />
    </div>
  );
}

export default App;
