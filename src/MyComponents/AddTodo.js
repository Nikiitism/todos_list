import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !Desc){
            alert("Title or description cannot be blank.")
        }
        else{
          addTodo(title,Desc);
          setTitle("");
          setDesc("");
        }
       
    }

   
  return (

    <div className="container my-3">
        <h3 className='text-center'>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={Desc}  onChange={(e)=>setDesc(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
