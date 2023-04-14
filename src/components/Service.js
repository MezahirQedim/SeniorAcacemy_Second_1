/** @format */

import React, { forwardRef, useEffect } from "react";
import reducer from "../Reducers/serviceReduser";
import "../assets/Icons.css"


const Input = ({onChange, inputRef}) => {

  return(
    <input  className="form-control w-25" onChange={onChange} ref={inputRef}/>
  )
}



const Service = () => {

  const [state, setState] = React.useReducer(reducer,{
    todo: "",
    many: [],
  })


  const inputRef = React.useRef();


  const handleAdd = e => {
    e.preventDefault();
    setState({
      type: "SET_MANY",
      many: state.todo
    })
  }

  const onChange = e => {
    setState({
      type: "SET_TODO",
      value: e.target.value
    })
  }


  // const handleFocus = () => {
  //   // console.log(inputRef)
  //   inputRef.current.focus()
  // }
  

  React.useEffect(() => {
    inputRef.current.focus()
  }, [])


 


  return (
    <div>
      <form onSubmit={handleAdd}>
        <div className="d-flex form-control">
          <Input className="form-control w-25" onChange={onChange}  inputRef={inputRef} />
          <button className="btn btn-info mx-2" type="submit">Add</button>
          {/* <button className="btn btn-success" type="button" onClick={handleFocus}>Focus</button> */}
        </div>
      </form>
      <ul>
        {state.many.map((row, key) => (
          <li key={key}>
            {row}
          </li>
        ))}
      </ul>      
    </div>
  );
};

export default Service;
