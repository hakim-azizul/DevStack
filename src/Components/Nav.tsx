import Logo from "../assets/logo-text.png"

const Nav = () => {
    
    return (
        <nav className="py-3 md:py-4 sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur-md">
            <div className='container mx-auto flex justify-between items-center w-full px-4 lg:px-8'>
                <div className="flex-1 md:hidden">
                    <button className="text-slate-800 focus:outline-none flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="flex-1 flex justify-center md:flex-none md:justify-start">
                    <a href="/">
                        <img src={Logo} alt="DevStack Logo" className="h-6 md:h-auto object-contain" />
                    </a>
                </div>
                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex items-center gap-6 text-[15px] font-medium text-slate-800">
                        <li className="cursor-pointer text-[#DB2777] hover:text-[#DB2777] transition-colors">Home</li>
                        <li className="cursor-pointer hover:text-[#DB2777] transition-colors">Technologies</li>
                        <li className="cursor-pointer hover:text-[#DB2777] transition-colors">Project</li>
                        <li className="cursor-pointer hover:text-[#DB2777] transition-colors">About</li>
                        <li className="cursor-pointer hover:text-[#DB2777] transition-colors">Contact</li>
                    </ul>
                </div>
                <div className="flex-1 flex justify-end md:flex-none items-center gap-3 sm:gap-4">
                    <button className="text-[13px] sm:text-sm font-medium text-slate-700 hover:text-[#c01b65] transition-colors">Sign In</button>
                    <button className="btn btn-sm rounded-full px-4 sm:px-5 text-[13px] font-medium min-h-0 h-8 border-none bg-[#DB2777] hover:bg-[#c01b65] text-white">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;