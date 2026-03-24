import "./App.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Userlist from "./components/Userlist"

function App() {
  return(
    <div className="flex flex-col min-h-screen bg-indigo-200">
      <Navbar />
      <div className="m-10 " style={{minHeight: "75vh"}}>
        <Userlist />
      </div>
      <Footer />
    </div>
  )
}

export default App