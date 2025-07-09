import HeaderSelect from "../components/header-select";
import ChromaGrid from "../components/chroma";
import DS from "../assets/ds.png";
import WD from "../assets/wd.png";
import JAVA from "../assets/java.png";
import JS from "../assets/js.png";
import ML from "../assets/ml.png"
import PYTHON from "../assets/python.png";


const items = [
    {
        image: WD,
        title: "Web Development",
        subtitle: "It's the creation and maintenance of websites and web applications.",
        borderColor: "#4F46E5",
        gradient: "linear-gradient(145deg,#4F46E5,#000)",
    },
    {
        image: ML,
        title: "Machine Learning",
        subtitle: "It's teaching computers to learn from data.",
        borderColor: "#10B981",
        gradient: "linear-gradient(210deg,#10B981,#000)",
    },
    {
        image: PYTHON,
        title: "Python",
        subtitle: "Build anything, fast: learn Python.",
        borderColor: "#F59E0B",
        gradient: "linear-gradient(165deg,#F59E0B,#000)",
    },
    {
        image: JS,
        title: "Javascript",
        subtitle: "Bring websites to life and build powerful apps with JavaScript, the language of the web.",
        borderColor: "#EF4444",
        gradient: "linear-gradient(195deg,#EF4444,#000)",
    },
    {
        image: JAVA,
        title: "Java",
        subtitle: "Run almost anything, anywhere: learn Java.",
        borderColor: "#8B5CF6",
        gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    },
    {
        image: DS,
        title: "Data Science",
        subtitle: "Uncover hidden patterns and predict the future by transforming raw data into powerful knowledge.",
        borderColor: "#06B6D4",
        gradient: "linear-gradient(135deg,#06B6D4,#000)",
    },
];

function Rselect() {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="bg-[#282828] h-full text-white">
                <HeaderSelect />
            </div>
            <div className="relative bg-[#1A1A1A] z-10 flex flex-col justify-center items-center h-full">
                <h1 className="bungee-text pt-10 text-white text-3xl">Tell me what you wanna start with</h1>
                <div className="relative bg-[#1A1A1A] h-full">
                    <ChromaGrid
                        items={items}
                        radius={300}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />

                </div>
            </div>
        </div>
    );
}

export default Rselect;