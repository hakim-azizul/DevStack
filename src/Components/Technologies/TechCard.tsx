import { type Dispatch, type SetStateAction } from "react";
import type { Itech } from "../../types";
import { toast } from "react-toastify";

export interface TechCardProps {
    tech: Itech
    addedTechs: Itech[]
    setAddedTechs: Dispatch<SetStateAction<Itech[]>>
}

const TechCard = ({ tech, addedTechs, setAddedTechs }: TechCardProps) => {
    const isAdded = addedTechs.some((t) => t.name === tech.name);
    const handleAddBtn = () => {
        if (!isAdded){
            setAddedTechs([...addedTechs, tech]);
            toast.success(`${tech.name} added to stack Successfully! 🎉`);
        }
    };
    const getBadgeStyle = (techName: string) => {
        switch (techName) {
            case "JavaScript":
                return "bg-yellow-50 text-yellow-600";
                
            case "React":
            case "Tailwind CSS":
                return "bg-cyan-50 text-cyan-600";
                
            case "TypeScript":
            case "Docker":
                return "bg-blue-50 text-blue-700";
                
            case "Node.js":
            case "MongoDB":
                return "bg-green-50 text-green-700";
                
            case "Supabase":
                return "bg-emerald-50 text-emerald-600";
                
            case "Git":
            case "Postman":
                return "bg-orange-50 text-orange-700";
                
            case "Next.js":
            case "Vercel":
                return "bg-slate-100 text-slate-700";
                
            default:
                return "bg-rose-50 text-rose-700 border border-slate-100"; 
        }
    };
    return (
        <div 
            className={`p-6 rounded-2xl flex flex-col h-full shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 ${
            isAdded? "border-4 border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(to_bottom_right,#EC4899,#a855f7)_border-box] shadow-[0_0_15px] shadow-purple-500/20 cursor-not-allowed"
            : "bg-white border border-gray-100 cursor-pointer"}`}
            >
            <div className="flex justify-between items-start mb-5">
                <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getBadgeStyle(tech.name)}`}>
                {tech.badge}
                </span>
            </div>
            <div className="grow">
                <h3 className="text-xl font-bold text-slate-900">{tech.name}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {tech.description}
                </p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center mt-6 mb-6">
                <span className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-100">
                {tech.category}
                </span>
                <span className="text-sm text-slate-500">
                {tech.difficulty}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-slate-700">
                <span className="text-amber-400 text-base">★</span> {tech.rating}
                </span>
            </div>
            <button 
                    onClick={() => handleAddBtn()}
                    disabled={isAdded}
                    className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                    isAdded ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                >     
                    {isAdded ? "Added Successfully 🎉" : "Add to Stack"}
            </button>

        </div>
    )
}

export default TechCard;