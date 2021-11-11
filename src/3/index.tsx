import * as React from "react";

//
class Task3 extends React.Component {
  state = {
    inputValue: "",
    data: ["banana","tomato","apple","strawberry"]
  };
  handleInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({inputValue:e.target.value})
  }

  render() {
    const {inputValue,data}=this.state;
    return (
      <div>
        <label>Search Input: </label>
        <input value={inputValue} onChange={this.handleInput}/>
        <br />
        <br />
        {
          data.filter((item)=>item.includes(inputValue)).map((listItem,index)=><li key={index}>{listItem}</li>)
        }
      </div>
    );
  }
}

export default Task3;
