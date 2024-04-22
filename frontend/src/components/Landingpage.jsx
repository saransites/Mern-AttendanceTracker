import React, { useEffect, useState } from 'react'
import  auth  from '../firebase'
import { useNavigate } from 'react-router-dom'
import Adminpage from './Admin/Adminpage'
import Employeepage from './Employees/Employeepage'
const Landingpage = () => {
    const data=[
        {
            pos:"Admin",
            content:"Only admin can login the page"
        },
        {
            pos:"Employee",
            content:"Only Employee can login the page"
        }
    ]
    const navigate=useNavigate()
    const handlepage=()=>{
        navigate(`/login`)
    }
  return (
    <div className='flex flex-col md:flex-row gap-4 justify-center items-center h-screen'>
        {
            data.map((item,index)=>{
                return <div key={index} onClick={handlepage} className='bg-[#4f397c] cursor-pointer p-4 text-center w-3/4 md:w-[45%]'>
                <h1 className='font-bold text-xl'>{item.pos}</h1>
                <p>{item.content}</p>
            </div>
            })
        }
    </div>
  )
}

export default Landingpage