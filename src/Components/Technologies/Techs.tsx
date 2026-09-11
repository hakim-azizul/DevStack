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
        {
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technologies.map(tech:Itech => <TechCard key={tech.id} tech={tech} />)}
            </div>
        }
        </>
    )
}

export default Techs;