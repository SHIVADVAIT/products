'use client'
import { useEffect, useState } from "react";
import "@/app/style.css"

export default function Page({params}){
    let id = params.userid; 
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    useEffect(()=>{
    getUserDetails()
    }, [])


    const getUserDetails = async (id)=>{
        let data = await fetch("http://localhost:3000/api/users/"+id);
        data = await data.json();
        console.log(data);
        setName(data.result.name);
        setAge(data.result.age);
        setEmail(data.result.email);
  }

  const  updateUser = async()=>{
    console.log(name,age,email,id);
    let result =  await fetch("http://localhost:3000/api/users/"+id
    ,{method:"PUT", body: JSON.stringify({name,age,email})
});
    result = await result.json();
    console.log(result);
    if(result.success){
        alert("user information updated");
    }
    else{
        alert("please try with valid input");
    }
  }
    return(
        <div>
            <h1>Update User Details</h1>
            <input type="text"  className="input-field" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} ></input>
            <input type="number"   className="input-field" value={age} placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}></input>
            <input type="text" className="input-field" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}></input>
            <button className="btn" onClick={updateUser}> Update user</button>
            
        </div>
    )
}