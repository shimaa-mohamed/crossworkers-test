import * as React from "react";

/*
     * The IProps interface defines the props in order to typescript to typecheck for errors.
     * 
     * If you would like to proceed without defining types do the following: 
     * const Input: React.SFC<any> = (props) => {
     *                        ^^^
     * 
     * and remove the IProps interface
*/

//
interface IProps {
  inputValue:string;
  handleInput:(e: React.ChangeEvent<HTMLInputElement>)=>void
}
const Input: React.SFC<IProps> = props => {
  const {inputValue,handleInput}=props;
  return (
    <div>
      <label>Search Input: </label>
      <input value={inputValue} onChange={handleInput}/>
    </div>
  );
};

export default Input;
