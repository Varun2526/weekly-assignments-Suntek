import './App.css'
import Counter from './components/Counter'
import TestRef from './components/TestRefTypes'
import APIDemo from './components/APIDemo'
import FormDemo from './components/FormDemo'
import NavBar from "./components/NavBar"
import UserForm from './components/UserForm'


function App() {
 console.log("app rendered")
  //return <TestRef />
	//return <Counter />
	 //return <APIDemo />
  //return <FormDemo /> 
  return (
    <>
      <NavBar />
       <UserForm/>
      
    </>
  )
}

export default App
