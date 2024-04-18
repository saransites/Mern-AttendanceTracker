import React,{ useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from "../../firebase";
const Signup = ({ handlesignup }) => {
  const [signdata,setsigndata]=useState({
    email:"",
    password:""
  })
  const {email,password}=signdata
  const handlesign=(e)=>{
    e.preventDefault()
    setsigndata(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const gotologinpage=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password).then(()=>{
      console.log("registered")
    }).catch((err)=>{
      console.log(err)
    })
    setsigndata({
      email:"",
      password:""
    })
  }
  return (
    <>
      <div className="p-8 rounded max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign up</h2>
        <form onSubmit={gotologinpage}>
            <div className="mb-4">
                <label className="block text-left font-semibold">Email</label>
                <input type="email" value={signdata.email} onChange={handlesign} name="email" className="mt-1 px-4 py-2 w-full border text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required></input>
            </div>
            <div className="mb-4">
                <label className="block text-left font-semibold">Password</label>
                <input type="password" value={signdata.password} onChange={handlesign} name="password" className="mt-1 px-4 py-2 w-full border text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required></input>
            </div>
            <input
            type="submit"
        onClick={handlesignup}
        className="bg-[#4d4d4d] border text-white transition-all hover:bg-[#8272928d] p-2 px-6 rounded"
      >
      </input>
        </form>
      
    </div>
    </>
  );
};

export default Signup;
