function Navbar(){
    return(
        <nav className="   border-b border-gray-100">
            <div className=" mx-auto px-6 py-4 flex justify-between items-center">
                
                {/* Logo */}
                <a href="/" className="text-2xl font-bold text-gray-900  hover:text-blue-600 ">
                    Logo
                </a>
                
                {/* Nav Links */}
                <ul className="flex gap-8 items-center">
                    <li>
                        <a href="/" className="text-sm text-gray-600 font-medium hover:text-gray-900 ">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/register" className="text-sm text-gray-600 font-medium hover:text-gray-900 ">
                            Register
                        </a>
                    </li>
                    <li>
                        <a href="/login" className="text-s font-medium px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 ">
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar