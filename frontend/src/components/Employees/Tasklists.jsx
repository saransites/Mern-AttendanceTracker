import React , { useContext }from "react";
import { listcontext } from "./Employeepage";
const Tasklists = () => {
    const { list,setlist }=useContext(listcontext)
    const handleremove = (idx) => {
      let temparr = [...list];
      temparr.splice(idx, 1);
      setlist(temparr);
    }
  return (
    <div className="bg-[#2e2e2e] p-2">
      <p className="border-b-2 my-2">Task Lists</p>
      {
        list.length==0?<p className="bg-red-600 p-1">Task is Empty</p>:
      <ul className="">
        {
            list.map((item,index)=>{
                return <div className="my-2 grid grid-cols-[0.5fr_2fr_1fr] place-items-center" key={index}>
                <span>{index+1}.</span>
                  <li key={index}>{item}</li>
                  <button onClick={()=>{handleremove(index)}} className="bg-red-500 p-2 px-4 rounded">Remove</button>
                </div>
            })
        }
      </ul>
      }
      
    </div>
  );
};

export default Tasklists;
