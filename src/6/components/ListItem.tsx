import * as React from "react";
import { TodoItem } from "./TodoList";
import "../index.less";

interface ListItemProps {
  index: number;
  todo: TodoItem;
  handleDelete: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    todoName: string
  ) => void;
  handleToggle: (todoName: string) => void;
}
class ListItem extends React.Component<ListItemProps> {
  render() {
    const { index, todo, handleDelete, handleToggle } = this.props;
    return (
      <li key={index} className={`todo-item`}>
        <div>
          <input
            type="checkbox"
            id={`${todo.name}`}
            onClick={() => handleToggle(todo.name)}
            checked={todo.todoStatus}
          />
          <label
            htmlFor={`${todo.name}`}
            className={`${todo.todoStatus ? "done" : ""}`}
          >
            {todo.name}
          </label>
        </div>
        <button onClick={(e) => handleDelete(e, todo.name)}>X</button>
      </li>
    );
  }
}

export default ListItem;
