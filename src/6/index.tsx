import * as React from "react";

import TodoList from "./components/TodoList";
// Components
/*
* Create the components you need in the components folder.
* You may find inspiration in task 4
*/

// Style
/*
* Use this less file to create your own styles.
*/
import "./index.less";

//
class Task6 extends React.Component {
  render() {
    return (
      <div>
        <TodoList/>
      </div>
    );
  }
}

export default Task6;
