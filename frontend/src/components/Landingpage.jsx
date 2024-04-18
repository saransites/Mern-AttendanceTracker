import React, { useEffect, useState } from 'react'
import  auth  from '../firebase'
import { useNavigate } from 'react-router-dom'
import Adminpage from './Admin/Adminpage'
import Employeepage from './Employees/Employeepage'
const Landingpage = () => {
    const navigate=useNavigate()
    const [ admin,setadmin ]=useState("")
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                navigate('/landing')
                if(user.uid == "QYM4DEGs8qfZgPxS8dPGbadovaf2"){
                    setadmin(true)
                }else{
                    setadmin(false)
                }
            }
        })
    },[])
  return (
    <div>
        {admin ? <Adminpage/>:<Employeepage/>}
    </div>
  )
}

export default Landingpage