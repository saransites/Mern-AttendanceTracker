import React , { useContext, useState }from "react";
import { listcontext } from "./Employeepage";
const Inputtasks = () => {
    const { list,setlist }=useContext(listcontext)
    const [ inputval,setinputval ]=useState('')
    const handlechange=(e)=>{
        setinputval(e.target.value)
    }
    const handleadd=(e)=>{
        setlist(prev=>[...prev,inputval])
        setinputval('')
    }

  return (
    <div className="mb-2">
      <label>Add to Tasks</label>
      <input
        type="text"
        value={inputval}
        onChange={handlechange}
        className="p-2 px-2 w-full bg-transparent border rounded outline-none"
      ></input>
      <button onClick={handleadd} className="bg-gray-500 p-2 px-6 rounded mt-2">Add</button>
    </div>
  );
};

export default Inputtasks;
