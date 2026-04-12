import {useState} from "react";

function TestRefTypes(){
    //state
    const [user,setUser]=useState({username:"Ravi", age: 21,city: "hyd"});
    const [marks,setMarks]=useState([12,34,53,23,45]);

    const updateUser=()=>{
        setUser({...user, username:"Rajesh",age:34})
    }

    const updateMarks=()=>{
        setMarks([...marks, 56]);
    }

    return(
        <div className="p-10 border-4 m-10 text-center rounded-2xl">
            <h1 className="text-2xl font-bold">Username: {user.username}</h1>
            <h1 className="text-2xl font-bold">Age: {user.age}</h1>
            <h1 className="text-2xl font-bold">City: {user.city}</h1>
            <button className="bg-blue-500 text-white p-2 rounded w-20" onClick={updateUser}>
                Update User
            </button>
            {
               marks.map((m)=><h1 key={m} className="text-lg">Mark: {m}</h1>)
            }
            <button className="bg-green-500 text-white p-2 rounded w-20" onClick={updateMarks}> 
                Update Marks
            </button>
        </div>
    )
}
export default TestRefTypes;