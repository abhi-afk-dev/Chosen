import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Header from '../components/header';
import { Link } from "react-router-dom"
function WS() {
    return (
        <div className="font-inter antialiased bg-[#282828] text-white h-screen">
            <Header />

            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 text-center rounded-b-xl shadow-lg">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Learn and Grow with Us
                    </h1>
                    <p className="text-lg md:text-xl mb-8 opacity-90">
                        Your journey to success starts here.
                    </p>
                    <Link to="/select">
                        <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-500 transition duration-300 shadow-xl">
                            Explore
                        </button>
                    </Link>
                </div>
            </section>

            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Focus</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        We provide quality education in various IT domains, helping students build essential skills for the modern job market. Our simplified approach ensures a clear and effective learning experience.
                    </p>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-300 py-12 px-4">
                <div className="container mx-auto text-center">
                    <div className="flex justify-center space-x-6 mb-8">
                        <a href="#" className="text-gray-400 hover:text-white transition duration-200"><Facebook size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-200"><Instagram size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-200"><Linkedin size={24} /></a>
                    </div>
                    <ul className="space-y-3 text-sm mb-8">
                        <li className="flex items-center justify-center">
                            <MapPin size={18} className="mr-2 text-blue-400" />
                            <span>Main Pali Road, Jodhpur (Raj.)</span>
                        </li>
                        <li className="flex items-center justify-center">
                            <Phone size={18} className="mr-2 text-blue-400" />
                            <span>+91-12345-67890</span>
                        </li>
                        <li className="flex items-center justify-center">
                            <Mail size={18} className="mr-2 text-blue-400" />
                            <span>info@example.com</span>
                        </li>
                    </ul>
                    <div className="border-t border-gray-700 pt-8 text-sm">
                        &copy; {new Date().getFullYear()} Basic Clone. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default WS;
