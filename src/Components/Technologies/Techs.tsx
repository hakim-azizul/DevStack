import { use, useState } from "react";
import type { Itech } from "../../types";
import TechCard from "./TechCard";
import Stack from "./Stack";

export interface TechsProps {
    techPromise: Promise<Itech[]>
}

const Techs = ({techPromise}: TechsProps) => {
    const[addedTechs, setAddedTechs] = useState<Itech[]>([])
    
    const techs = use(techPromise)
    return (
        <>
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore the <span className="text-blue-600">Technologies</span></h1>
            <p className="text-gray-600 mb-8">Pick one technology per category to build your ideal stack.</p>
            <div className="grid lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techs.map((tech:Itech) => <TechCard 
                    key={tech.id} 
                    tech={tech} 
                    addedTechs={addedTechs}
                    setAddedTechs={setAddedTechs}/>)}
                </div>
                <div className="lg:col-span-1">
                    <Stack addedTechs={addedTechs} setAddedTechs={setAddedTechs} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Techs;