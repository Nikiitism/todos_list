import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {

  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }

  return (
   
    <div className="container" style={myStyle}>
      <h3 className="my-3 text-center">Todos List</h3>
      {props.todos.length===0? "No Todos to Display":
     props.todos.map((todo,index)=>{
     return(
      <React.Fragment key={todo.sno || index}>
      <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete}/> <hr/>
      </React.Fragment>
     )
     })}
      

    </div>
  )
}

export default Todos
