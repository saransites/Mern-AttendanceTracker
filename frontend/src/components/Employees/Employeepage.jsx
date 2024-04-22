import React, { useEffect, useState, createContext } from "react";
import { signOut } from "firebase/auth";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
// import './Employeepage.css'
import axios, { all } from 'axios'
import Tasklists from "./Tasklists";
import Inputtasks from "./Inputtasks";
const listcontext=createContext()

const Employeepage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [id,setid]=useState('')
  const [employeename, setemployeename] = useState('');
  const [list, setlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        let timestamp = Number(user.metadata.lastLoginAt);
        let date = new Date().toISOString();
        let time = new Date(timestamp).toLocaleTimeString();
        setTime(time);
        setDate(date.slice(0,10));
        setemployeename(user.email.slice(0,user.email.indexOf('@')))
        setid(user.uid.slice(0,-5))
      }
    });
  }, []);

  const logoutPage = () => {
    signOut(auth).then(() => {
      if (window.confirm("Are you sure to logout?")) {
        navigate("/login");
      }
    });
  };

  const submit = async () => {
    if(list.length === 0 || !employeename){
      alert("Input field Empty")
      return
    }
    try {
      await axios.post(`http://localhost:5000/employeedata`, {
        id:id,
        time:time,
        date:date,
        name:employeename,
        work:list
      }).then((data)=>{
        alert(data.data)
      }).catch((err)=>{
          if(err.response.status == 400){
            alert(err.response.data)
          }
          else{
            alert("Work not submitted")
          }
      })
    } catch (error) {
      alert('Work not submitted');
    }
  }
  return (
    <listcontext.Provider value={{list,setlist}}>
      <h1 className="bg-[#838292] text-center p-4 text-xl">Employee page</h1>
        <div className="grid place-items-center h-[80vh]">
      <div className="flex gap-2 items-center">
        <p className="text-center my-4">You are login at { time }</p>
        <button
          className="bg-red-500 p-2 px-6 rounded"
          onClick={logoutPage}
        >
          Logout
        </button>
      </div>
      <section className="flex flex-col md:flex-row gap-2 justify-center items-center">
        <div className="rounded p-4 bg-[#2e2e2e]">
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              value={employeename}
              className="p-2 px-2 w-full bg-transparent border rounded outline-none"
              readOnly
            ></input>
          </div>
          <Inputtasks/>
        </div>
        <Tasklists/>
      </section>
      {
        list.length>0?<button onClick={submit} className={`transition-all p-2 px-6 my-4 rounded bg-teal-700 mx-auto`}>Submit my Work</button>:<></>
      }
    </div>
    </listcontext.Provider>
  );
};

export default Employeepage;
export { listcontext }