import * as React from "react";
import FilterButtons from "./FilterButtons";
import ListItem from "./ListItem";

export type TodoItem = {
  name: string;
  todoStatus: boolean;
};
export enum FILTERS{
  ALL="All",
  DONE="Done",
  PENDING="Pending"
}

class TodoList extends React.Component<any> {
  state = { todos: [], itemToBeAdded: "", searchValue: "", filter: FILTERS.ALL };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //add the new todo to the list of todos and clear the input field
    const { todos, itemToBeAdded } = this.state;
    e.preventDefault();
    const newTodo = { name: itemToBeAdded, todoStatus: false };
    this.setState({ todos: [...todos, newTodo], itemToBeAdded: "" });
  };
  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ itemToBeAdded: e.target.value });
  };
  handleToggle = (todoName: string) => {
    const { todos } = this.state;
    const editedTodos = todos.map((todo: TodoItem) => {
      if (todo.name === todoName) {
        todo.todoStatus = !todo.todoStatus;
      }
      return todo;
    });
    this.setState({ todos: editedTodos });
  };
  handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    todoName: string
  ) => {
    const { todos } = this.state;
    e.preventDefault();
    this.setState({
      todos: todos.filter((todo: TodoItem) => todo.name !== todoName),
    });
  };
  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
  };
  filteredTodos = (filterName: string): TodoItem[] => {
    //this function returns the list of todos to show according to the applied filter and also the search field
    const { todos, searchValue } = this.state;
    if (filterName === FILTERS.DONE) {
      return todos.filter(
        (todo: TodoItem) =>
          todo.todoStatus === true && todo.name.includes(searchValue)
      );
    } else if (filterName === FILTERS.PENDING) {
      return todos.filter(
        (todo: TodoItem) =>
          todo.todoStatus === false && todo.name.includes(searchValue)
      );
    } else {
      return todos.filter((todo: TodoItem) => todo.name.includes(searchValue));
    }
  };
  isCurrentFilter = (filterName: string) => {
    //checkes if the given filter was the selected filter or not for styling purpose
    return this.state.filter === filterName;
  };
  handleFilter = (filterName: string) => {
    this.setState({ filter: filterName });
  };
  render() {
    return (
      <div className="todo-list-wrapper">
        <h1>TODO</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <section className="add-todo-wrapper">
              <input
                type="text"
                value={this.state.itemToBeAdded}
                onChange={this.handleInput}
              />
              <button>Add</button>
            </section>
            <input
              type="text"
              value={this.state.searchValue}
              onChange={this.handleSearch}
              placeholder="search"
              className="search"
            />
            <ul>
              {this.filteredTodos(this.state.filter).map((task, index) => {
                return (
                  <ListItem
                    index={index}
                    todo={task}
                    handleToggle={this.handleToggle}
                    handleDelete={this.handleDelete}
                  />
                );
              })}
            </ul>
          </form>
          <FilterButtons
            setFilter={this.handleFilter}
            isCurrentFilter={this.isCurrentFilter}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
