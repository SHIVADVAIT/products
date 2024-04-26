"use client"
import { useState } from "react";
import "./../style.css"
export default function Page(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email, setEmail] = useState("");
    const addUser= async ()=>{
    let response = await fetch("http://localhost:3000/api/users",{
        method: "Post",
        body: JSON.stringify({name,age,email})
    });
    response = response.json();
    console.log(response);
    console.log(response.age);
    if(response.success){
        alert("New User created");
    }
    else{
        alert("some error with data");
    }
    }
    return(
        <div>
            <h1 className="add-user"> Add New User</h1>
            <input type = "text"  placeholder = "Enter Name" className="input-field" value= {name} onChange={(e)=>setName(e.target.value)}   />
            <input type = "text" placeholder = "Enter Age " className="input-field" value= {age} onChange={(e)=>setAge(e.target.value)} />
            <input type = "text" placeholder = "Enter Email" className="input-field"  value= {email} onChange={(e)=>setEmail(e.target.value)} />
           <button onClick={addUser} className="btn">Add uSer</button>

        </div>
    )
}