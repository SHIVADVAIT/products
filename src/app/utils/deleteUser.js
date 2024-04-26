"use client"
export default function DeleteUser(props){
    const userId = props.id;
    console.log(userId);
    console.log("userId is ", userId);
    const deleteUser = async ()=>{
         let result = await fetch("http://localhost:3000/api/users/"+userId,{
            method: "delete"
         });
         console.log(result);
        //  result = await result.json();
         console.log(result);
         if(result){
            alert("user Deletec"); 
         }  }
         return  <button onClick={deleteUser}> Delete</button>


}

