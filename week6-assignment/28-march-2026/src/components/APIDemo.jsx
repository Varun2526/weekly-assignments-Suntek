import { useEffect, useState } from "react";

// function APIDemo() {
//     // let [count,setCount] = useState(100)
//     // const chnageCount = () =>{
//     //     setCount(count +1);
//     // }

//     useEffect(()=>{
//       //  console.log("use effect rendered")
//     },[])
// // console.log("API demo rendered")
// return(
//     <div>
//         <p>
//             API demo
//         </p>
//         <button onClick={chnageCount} className="bg-blue-500 text-white p-2 rounded w-20">
//             Update Count
//         </button>
//         <h1 className="text-2xl font-bold">Count: {count}</h1>
//     </div>
// )
// }

// rendering an api
// intial render -->display --> api call ->rerender -->display

//use effect is used for side effects in react components. 
//it is a hook that allows you to perform certain actions or operations after the component has rendered.


function APIDemo() {
    console.log("API demo rendered")
    let [users,setUsers] = useState([])
    let [loading,setLoading] = useState(false)
    let [error,setError] = useState(null)

    useEffect(()=>{
        async function getData() {
            setLoading(true)
            try{
                let res = await fetch("https://jsonplaceholder.typicode.com/posts")
                let userlist = await res.json()
                //update users
                setUsers (userlist)
            }
            catch (err){
                console.log(err)
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
        getData()
    },[])

    //deal with loading state
        if(loading){    //or loading === true
            return <h1 className="text-center text-5xl">Loading...</h1>
        }   
    //deal with error state
    if((error)!==null){
        return <h1 className="text-center text-5xl text-red-500">Error: {error.message}</h1>
    }
    console.log("Api rendered");
    return (
        <div className="p-10 border-4 m-10 text-center rounded-2xl">
            <h1 className="text-center text-5xl p-4 "> UsersList</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((userObj)=>(
                    <div key={userObj.id} className="bg-gray-200 p-4 rounded shadow">
                        <p className="font-bold">{userObj.title}</p>
                        <p>{userObj.body}</p>
                    </div>
            ))}
            </div>
        </div>
    )
}

export default APIDemo;