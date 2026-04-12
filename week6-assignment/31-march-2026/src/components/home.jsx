import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../context/ContextProvider'

function home() {
  const { counter, incrementCounter, decrementCounter } = useContext(counterContextObj)

  return (
    <div className='bg-pink-500 h-screen grid grid-cols-2 gap-4 p-4 text-4xl text-center text-white '>
        <div className='bg-orange-400 m-auto'>EditCounter1
            <br />
             {counter}
              <br />
      <button  className="bg-purple-600 p-3 m-3" onClick={incrementCounter}>+</button>
      <button className="bg-purple-600 p-3 m-3" onClick={decrementCounter}>-</button>
      </div>
       <div className='bg-orange-400 m-auto'>EditCounter2
         <br />
            {counter}
          <br />
      <button className="bg-purple-600 p-3 m-3" onClick={incrementCounter}>+</button>
      <button className="bg-purple-600 p-3 m-3" onClick={decrementCounter}>-</button>
      </div>
       <div className='bg-orange-400 m-auto'>EditCounter3
            <br />
            {counter}
          <br />
      <button className="bg-purple-600 p-3 m-3" onClick={incrementCounter}>+</button>
      <button className="bg-purple-600 p-3 m-3" onClick={decrementCounter}>-</button>
      </div>
       <div className='bg-orange-400 m-auto'>EditCounter4
            <br />
            {counter}
        <br />
      <button className="bg-purple-600 p-3 m-3" onClick={incrementCounter}>+</button>
      <button className="bg-purple-600 p-3 m-3" onClick={decrementCounter}>-</button>
      </div>
       
    </div>
  )
}

export default home
