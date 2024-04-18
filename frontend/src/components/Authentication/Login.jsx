import { signInWithEmailAndPassword } from "firebase/auth";
import React,{ useState , useEffect} from "react";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
const Login = ({ handlesignup }) => {
  const navigate=useNavigate()
  const [logindata,setlogindata]=useState({
    email:"",
    password:""
  })
  const handlelogin=(e)=>{
    setlogindata(prev=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const { email,password }=logindata
  const gotolandingpage=(e)=>{
    e.preventDefault()
    if(!email || !password) alert("Email and Password cannot be Empty")
    signInWithEmailAndPassword(auth,email,password).then(()=>{
      navigate('/landing')
    }).catch(()=>{
      console.log("Wrong Password")
    })
  }
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
        if(user){
            navigate('/landing')
        }
    })
},[])
  return (
    <>
      <div className="p-8 max-w-md w-full">
        <h2 className="font-semibold tracking-wider text-center my-4 text-3xl">Login</h2>
        <form onSubmit={gotolandingpage} className="space-y-4">
            <div>
              <label className="text-left block">Email</label>
                <input type="email" value={logindata.email} onChange={handlelogin} name="email" placeholder="Username" className=" w-full py-3 px-4 rounded-md text-black focus:outline-none focus:bg-opacity-50"></input>
            </div>
            <div>
              <label className="text-left block">Password</label>
                <input type="password" value={logindata.password} onChange={handlelogin} name="password" placeholder="Password" className=" w-full py-3 px-4 rounded-md text-black focus:outline-none focus:bg-opacity-50"></input>
            </div>
            <div>
                <button type="submit" className="w-full bg-[#82729255] py-3 px-4 hover:bg-[#82729296] rounded-md text-white font-semibold transition duration-300 ease-in-out hover:from-pink-600 hover:to-purple-600 focus:outline-none">Login</button>
            </div>
        </form>
      <div>
        <span>Don't have an account?</span>
      <button
        onClick={handlesignup}
        className="underline hover:scale-95 transition-all duration-500 mt-2 p-2 px-4 rounded w-fit mx-auto"
      >
        Signup
      </button>
      </div>
    </div>
    </>
  );
};

export default Login;
