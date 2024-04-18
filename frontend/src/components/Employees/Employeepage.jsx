import React, { useEffect, useState, createContext } from "react";
import { signOut } from "firebase/auth";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
import './Employeepage.css'
import axios from 'axios'
import Tasklists from "./Tasklists";
import Inputtasks from "./Inputtasks";
const listcontext=createContext()
const Employeepage = () => {
    const [ date,setdate ]=useState('')
    const [ time,settime]=useState('')
    const [ employeename,setemployeename ]=useState('')
    const [ list,setlist ]=useState([])
  const navigate = useNavigate();
  const logoutpage = () => {
    signOut(auth).then(() => {
      if (confirm("Are you sure to logout?")) {
        navigate("/");
        console.log("loggged out")
      }
    });
  };
  useEffect(() => {
    auth.onAuthStateChanged(user=>{
        if(user){
            let timestamp=Number(user.metadata.lastLoginAt)
            let date=new Date(timestamp).toLocaleDateString()
            let time=new Date(timestamp).toLocaleTimeString()
            settime(time)
            setdate(date.slice(4))
        }
    })
  }, []);
  const submit=async ()=>{
    try{
        await axios.post(`http://localhost:5000/employeedata`,{
        time:time,
        date:date,
        name:employeename,
        work:list
    }).then(data=>{
        console.log(data)
        alert("Successfully Submitted Your Work")
    }).catch(err=>{
        console.log(err)
        alert('Work not submitted')
    })
    setlist('')
    }catch(err){
        console.log(err)
    }
  }
  return (
    <listcontext.Provider value={{list,setlist}}>
      <h1 className="bg-[#838292] text-center p-4 text-xl">Employee page</h1>
        <div className="grid place-items-center">
      <div>
      <button
        className="bg-red-500 p-2 px-6 rounded block mx-auto"
        onClick={logoutpage}
      >
        Logout
      </button>
      <p className="text-center mt-12">You are login at { time }</p>
      </div>
      <section className="flex flex-col md:flex-row gap-2 justify-center items-center h-[50vh]">
        <div className="rounded p-4 bg-[#2e2e2e]">
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              onChange={(e)=>{setemployeename(e.target.value)}}
              className="p-2 px-2 w-full bg-transparent border rounded outline-none"
            ></input>
          </div>
          <Inputtasks/>
        </div>
        <Tasklists/>
      </section>
      <button onClick={submit} className=" p-2 px-6 rounded bg-teal-700 mx-auto">Submit my Work</button>
    </div>
    </listcontext.Provider>
  );
};

export default Employeepage;
export { listcontext }