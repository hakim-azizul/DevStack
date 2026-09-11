import { use } from "react";
import type { Itech } from "../../types";
import TechCard from "./TechCard";

export interface TechsProps {
    techPromise: Promise<Itech[]>
}

const Techs = ({techPromise}: TechsProps) => {
    
    const techs = use(techPromise)
    return (
        <>
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Explore the <span className="text-blue-600">Technologies</span></h1>
            <p className="text-gray-600 mb-6">Pick one technology per category to build your ideal stack.</p>
            <div>
                {
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {techs.map((tech:Itech) => <TechCard key={tech.id} tech={tech} />)}
                    </div>
                }
            </div>
        
        </div>
        </>
    )
}

export default Techs;