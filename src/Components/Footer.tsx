import Logo from '../assets/logo-text.png';
export function Footer() {
    
    return (
        <footer className="py-4 mt-8 bg-white border-t border-slate-100">
            <div className="container mx-auto py-10 ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <img src={Logo} alt="Logo" className="h-8 mb-4 object-contain"/>
                        <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-xs">Curated tools, technologies, and resources for developers buildingmodern software.</p>
                        <ul className="flex space-x-6 text-sm font-medium text-slate-700">
                            <li className="hover:text-purple-600 cursor-pointer transition-colors">GitHub</li>
                            <li className="hover:text-purple-600 cursor-pointer transition-colors">Twitter</li>
                            <li className="hover:text-purple-600 cursor-pointer transition-colors">LinkedIn</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4 tracking-wide text-sm">PRODUCT</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4 tracking-wide text-sm">COMPANY</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li className="hover:text-purple-600 cursor-pointer transition-colors">About</li>
                            <li className="hover:text-purple-600 cursor-pointer transition-colors">Contact</li>
                            <li className="hover:text-purple-600 cursor-pointer transition-colors">Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4 tracking-wide text-sm">LEGAL</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li className="hover:text-purple-600 cursor-pointer transition-colors">Privacy Policy</li>
                            <li className="hover:text-purple-600 cursor-pointer transition-colors">Terms of Service</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 px-3 md:px-0 border-t border-slate-100 flex justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} DevStack. All rights reserved.</p>
                    <div className=" flex space-x-4">
                        <a href="#" className="hover:text-purple-400">Privacy</a>
                        <a href="#" className="hover:text-purple-400">Terms</a>
                    </div>
                </div>
            </div>    
        </footer>
    )
}