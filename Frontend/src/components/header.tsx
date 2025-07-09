import { Menu, X } from 'lucide-react';
import Logo from "../assets/logo.png"
import React from 'react';
import { Link } from "react-router-dom"

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <header className="shadow-sm sticky top-0 z-50 ">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={Logo} alt="WsCubeTech Logo" className="h-10 rounded" />
                </div>

                <div className="hidden lg:flex items-center space-x-6">
                    <a href="#" className="text-white hover:text-blue-600 font-medium px-2 py-1 rounded">Home</a>
                    <a href="#" className="text-white hover:text-blue-600 font-medium px-2 py-1 rounded">Courses</a>
                    <a href="#" className="text-white hover:text-blue-600 font-medium px-2 py-1 rounded">Contact</a>
                    <Link to="/select">
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-black transition duration-300">
                            Get Started
                        </button>
                    </Link>
                </div>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-[#282828] shadow-lg pb-4">
                    <div className="flex flex-col items-center space-y-4 pt-4">
                        <a href="#" className="block w-4/5 text-center text-white hover:bg-gray-100 py-3 rounded-lg font-medium transition duration-200">Home</a>
                        <a href="#" className="block w-4/5 text-center text-white hover:bg-gray-100 py-3 rounded-lg font-medium transition duration-200">Courses</a>
                        <a href="#" className="block w-4/5 text-center text-white hover:bg-gray-100 py-3 rounded-lg font-medium transition duration-200">Contact</a>
                        <Link to="/select">
                            <button className="w-4/5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-black transition duration-300">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
export default Header