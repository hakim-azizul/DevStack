import { use } from "react";
import type { Itech } from "../../types";

export interface TechsProps {
    techPromise: Promise<Itech[]>
}

const Techs = ({techPromise}: TechsProps) => {
    
    const techs = use(techPromise)
    return (
        <>
        {
            techs.map(tech =>{
                return (
                    <div>
                        <img src={tech.icon} alt={tech.name} className="w-16" />
                        <h1>{tech.name}</h1>
                    </div>

                )
            })
        }
        </>
    )
}

export default Techs;