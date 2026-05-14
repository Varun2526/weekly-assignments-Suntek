//using context api 
// import { use, useContext } from 'react'
// import { counterContextObj } from '../contexts/ContextProvider'
// import Test from "../components/Test"
// import {useCounterStore} from "../store/useCounterStore"

// function Home() {
//   return (
//     <div className='text-5xl'>
//       Counter: {counter}
//       <button onClick={changeCounter} className="bg-blue-500 text-white p-2 mt-4 rounded">
//         change
//       </button>
//       < Test />
//     </div>
//   )
// }

//USING ZUSTAND 

import { useCounterStore } from "../store/useCounterStore";
import Test from "../components/Test"

 function Home() {
  console.log("home")
  let newCounter = useCounterStore((state)=>state.newCounter)
  let incrementCounter = useCounterStore((state)=>state.incrementCounter)

  return (
     <div className='text-5xl'>
       Counter: {newCounter}
      <button onClick={incrementCounter} className="bg-blue-500 text-white p-2 mt-4 rounded">
        change
      </button>
      < Test />
    </div>
  )
}


export default Home;