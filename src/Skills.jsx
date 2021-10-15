import React from "react"
import Skill from "./Skill"
import SkillData from "./SkillData"

const Skills = ()=>{
    return(
        <>
            <div className = 'skills'>
                <h1 style = {{textAlign:'center', paddingTop:'1.5%'}} > Skills </h1>
                <div className = 'skills-outer'>
                   {SkillData.map((val, ind)=>{
                        return(
                            <Skill 
                                imgLink={val.imgLink}
                                name = {val.name}
                                key = {val.key}
                                text = {val.text}
                            />
                        )
                   })}
                </div>
            </div>
            
        </>
    )
}

export default Skills