import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
    const [username,setUsername] = useState([])
    const [password,setPassword] = useState([])

    const handledata = (e) =>{
        e.preventDefault()
        const data = {
            username:username,
            password:password
        }
        axios.post('http://localhost:8000/apilogin/',data)
        .then((dat) =>{
           window.location.href = 'http://localhost:3000/contact'
        })
        .catch((erro)=>{
            console.log(erro)
        })

    }
    
    return (  
        <>
        

       
        {/* <div className="h-screen bg-slate-200"> 
            <div  className="w-full h-100  md:w-1/2 mx-8 ml-80 border-2 border-neutral-800 rounded-lg mt-14 "> */}
            <div class="flex justify-center items-center h-screen bg-slate-200 ">
        <div className="block bg-slate-50 p-6 md:w-1/2 rounded-xl shadow-md shadow-slate-300 w-90">


                <h1 className="text-3xl font-bold p-xl mb-5 mt-4 mx-8 pt-4 text-center pb-5 border-b-4 border-black ">Login Here</h1>
                <form method="POST" onSubmit={handledata} className=" mx-8 ">
                            <div className="">
                                <label className="p-3 block font-bold">Username</label>
                                <input type="username" placeholder="Enter Username" value={username} onChange={event=>setUsername(event.target.value)} className="rounded-lg  ml-4 w-10/12 px-4 py-2 bg-gray-200 border focus:border-green-500 focus:bg-white focus:outline-none"  autocomplete autofocus required></input>
                            </div>

                            <div className="mt-4">
                                <label className="p-3 block font-bold">Password</label>
                                <input type="password" placeholder="Fill Your Password" value={password} onChange={event=>setPassword(event.target.value)} className="rounded-lg  ml-4 w-10/12 px-4 py-2 bg-gray-200 border focus:border-green-500 focus:bg-white  focus:outline-none"  autocomplete autofocus required></input>

                            </div>
                            <div className=" text-center" >
                                
                            </div>
                            <div className="text-left mt-3">
                                
                                <a href="/" className="text-sm font-semibold hover:text-blue-700 ml-2 pb-6">Forget Password?</a>

                        </div>
                        <button type="submit" className="bg-green-500 text-white rounded-lg w-20 px-3 py-2 mt-3 mb-3 ml-10 hover:shadow-lg" >Login</button>
                        <p className="text-xs my-2">Don't Have any account?<a href="/register" className="text-blue-600">Sign Up</a></p>
                </form>
                
                
               
            </div>
            </div>
        


        </>
    );
}
 
export default Login;