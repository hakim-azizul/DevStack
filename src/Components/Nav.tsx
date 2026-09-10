import Logo from "../assets/logo-text.png"

export interface NavProps {
    prop: string
}

const Nav = ({ prop }: NavProps) => {
    
    return (
        <nav className="py-5 sticky top-0 z-50 bg-base-80 shadow-sm backdrop-blur-3xl">
            <div className='container mx-auto flex justify-between items-center'>
                <img src={Logo} alt="Logo" />
                <div>
                    <ul className="flex justify-center items-center gap-5">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Project</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <button className="btn btn-link text-black no-underline">Sign In</button>
                    <button className="btn btn-active btn-secondary rounded-full">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;