import {useState} from 'react';

function Counter(){
    const [count,setCount]=useState(0);
    
    const increment=()=>{
        setCount(count + 1);
    };
    const decrement=()=>{
        setCount(count - 1);
    };
    
    return(
        <div className="flex flex-row items-center gap-4 mt-10 border-4 mx-50 text-center p-5 rounded-2xl "> 
            <h1 className="text-2xl font-bold text-center ">Count: {count}</h1>
            <button className= "flex bg-blue-500 text-white p-2 rounded w-10 m-20" onClick={increment}>
                +
            </button>
            <button className="bg-red-500 text-white p-2 rounded w-10" onClick={decrement}>
                -
            </button>
        </div>
    )
}
export default Counter;