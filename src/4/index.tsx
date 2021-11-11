import * as React from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";

//
class Task4 extends React.Component {
  state = {
    inputValue: "",
    data: ["banana","tomato","apple","strawberry"]
  };
  handleInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({inputValue:e.target.value})
  }
  render() {
    return (
      <div>
        <Input handleInput={this.handleInput} inputValue={this.state.inputValue}/>
        <br />
        <List listArray={this.state.data} inputValue={this.state.inputValue}/>
      </div>
    );
  }
}

export default Task4;
