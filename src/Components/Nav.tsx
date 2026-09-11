import Logo from "../assets/logo-text.png"

const Nav = () => {
    
    return (
        <nav className="py-5 sticky top-0 z-50 bg-base-80 shadow-sm backdrop-blur-3xl">
            <div className='container mx-auto flex justify-between items-center'>
                <img src={Logo} alt="Logo" />
                <div>
                    <ul className="flex justify-center items-center gap-5 text-black font-semibold ">
                        <li className="cursor-pointer  text-[#DB2777] hover:text-[#DB2777] transition-colors duration-300">Home</li>
                        <li className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">Technologies</li>
                        <li className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">Project</li>
                        <li className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">About</li>
                        <li className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">Contact</li>
                    </ul>
                </div>
                <div>
                    <button className="btn btn-link text-black no-underline hover:text-[#c01b65] transition-colors duration-300">Sign In</button>
                    <button className="btn btn-active btn-secondary rounded-full">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;