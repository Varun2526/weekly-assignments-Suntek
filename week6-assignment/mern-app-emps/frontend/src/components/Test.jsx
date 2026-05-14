import { useContext} from "react"
import  { counterContextObj } from "../contexts/ContextProvider"

function Test() {
    console.log("Test")
       const { counter1, changeCounter1 } = useContext(counterContextObj);
  return (
    <div>
         Counter: {counter1}
      <button onClick={changeCounter1} className="bg-blue-500 text-white p-2 mt-4 rounded">
        change
      </button>
    </div>
  )
}

export default Test
