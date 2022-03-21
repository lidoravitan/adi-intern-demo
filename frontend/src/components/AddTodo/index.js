import { Button } from "../Button";
import { Input } from "../Input";

export const AddTodo = (props) => (
  <div>
    <Input
      onChangeText={(value) => props.onChangeTodoValue(value)}
      value={props.todoValue}
    />
    <Button
      onClick={() => {
        props.onAddTodo();
      }}
    >
      Add Todo
    </Button>
  </div>
);
