import React from "react"

import MechanicPage from "../Template/MechanicPage"
import CompPage from "../Template/CompPage"

interface ProjectsPagesProps{
    type: string
}

const ProjectsPages: React.FC<ProjectsPagesProps> = ({type}) =>{

    return (
            <>
                {type === 'mech' ?
                    <MechanicPage />
                    :
                    <CompPage />
                }

            </>
    )
}

export default ProjectsPages