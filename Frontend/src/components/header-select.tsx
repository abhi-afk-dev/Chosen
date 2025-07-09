import Logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // This navigates back one entry in the history stack
    };
    return (
        <header className="shadow-sm sticky top-0 z-50 ">
            <nav className="px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={Logo} alt="WsCubeTech Logo" className="h-10 rounded" />
                </div>

                <div className="flex items-center space-x-6">
                    <button onClick={handleGoBack} className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-black transition duration-300">
                        Go Back
                    </button>

                </div>
            </nav>
        </header>
    )
}
export default Header