import { createContext,useState } from 'react'

// create a context provider obhect 
export const counterContextObj = createContext()


function ContextProvider({children}) {
    const [counter,setCounter] = useState(1)
    //function to change the state 
    const incrementCounter = ()=>{
        setCounter(counter+1)
    }
    const decrementCounter = ()=>{
        setCounter(counter-1)
    }
  return (
   < counterContextObj.Provider value = {{counter,incrementCounter,decrementCounter}}>
    {children}
    
   </counterContextObj.Provider>

  )
}

export default ContextProvider