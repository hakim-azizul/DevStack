import type { Itech } from "../../types";

export interface AddedCardProps {
  tech: Itech;
  handleRemove: () => void;
}

const AddedCard = ({ tech, handleRemove }: AddedCardProps) => {
    
    return (
        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-slate-50 hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                <div>
                <h4 className="text-sm font-bold text-slate-800">{tech.name}</h4>
                <span className="text-xs font-medium text-slate-500">{tech.category}</span>
                </div>
            </div>
            
            {/* ডিলিট বাটন */}
            <button
                onClick={handleRemove}
                className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-all"
                title="Remove from stack"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}

export default AddedCard;