import type { Dispatch, SetStateAction } from "react"
import type { Itech } from "../../types"
import AddedCard from "./AddedCard"

export interface StackProps {
    addedTechs: Itech[]
    setAddedTechs: Dispatch<SetStateAction<Itech[]>>
}

const Stack = ({ addedTechs, setAddedTechs }: StackProps) => {
    const handleRemove = (techName: string) => {
        setAddedTechs((prev) => prev.filter((t) => t.name !== techName));
    };
    return (
        <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
                <p className="text-sm text-slate-500 mt-1">
                {addedTechs.length === 0
                    ? "No technologies selected yet."
                    : `${addedTechs.length} Technologies Selected.`}
                </p>
            </div>
            {addedTechs.length === 0 ? (
                <div className="border-2 border-dashed border-slate-200 rounded-xl py-12 flex items-center justify-center">
                <p className="text-sm font-medium text-slate-400">Your stack is empty.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {addedTechs.map((tech) => (
                        <AddedCard
                        key={tech.name}
                        tech={tech}
                        handleRemove={() => handleRemove(tech.name)}
                        />
                    ))}
                    <button 
                        onClick={() => setAddedTechs([])}
                        className="font-medium text-xl border-2 border-red-500 bg-white hover:bg-red-600 text-red-500 hover:text-white py-2 px-4 rounded-lg transition-colors"
                    >
                        Remove All
                    </button>
                </div>
                

            )}
        </div>
    )
}

export default Stack;