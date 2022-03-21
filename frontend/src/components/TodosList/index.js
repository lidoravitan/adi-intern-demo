import { TodoItem } from "../TodoItem";

export const TodosList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem key={todo.id} content={todo.content} />
    ))}
  </ul>
);
