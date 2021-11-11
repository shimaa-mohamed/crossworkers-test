import * as React from "react";

//
class Task2 extends React.Component {
  state = {
    value: ''
  };

  handleInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({value:e.target.value})
  }
  render() {
    const {value}=this.state;
    return (
      <div>
        <label>Controlled Input: </label>
        <input value={value} onChange={this.handleInput}/>
        <br />
        <br />
        <p>{value}</p>
      </div>
    );
  }
}

export default Task2;
