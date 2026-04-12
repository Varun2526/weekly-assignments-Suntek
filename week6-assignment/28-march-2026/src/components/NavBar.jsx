function NavBar(){
    return(
        <header className="w-full bg-gray-300 border-b border-gray-400">
            <nav className="flex justify-between items-center px-8 py-4">
            <h1 className="font-bold text-xl">LOGO</h1>
            <ul className="flex gap-10">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Register</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
            </nav>
        </header>
    )
}
export default NavBar