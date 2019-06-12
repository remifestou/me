import React from 'react'
import dataSkills from '../datas/DataSkills'

function Skills() {
    return (
        dataSkills.map((skill) =>
            skill.color === "white" ? (
                <div 
                    key={skill.title}
                    className="container-skills md:w-ws md:h-ws bg-white rounded-xxl shadow-ws mb-8 px-8 py-6 mr-32 ml-6 md:ml-0"
                    data-aos="flip-up"
                    data-aos-delay={skill.delay}
                >
                    <h2 className="text-xl text-black font-bold uppercase leading-none mb-1">{skill.title}</h2>
                    <p className="text-base text-black font-normal m-0">{skill.description}</p>
                </div>
            ) : (
                <div 
                    key={skill.title}
                    className="md:w-ws md:h-ws bg-ws rounded-xxl shadow-ws mb-8 px-8 py-6 ml-32 mr-6 md:mr-0"
                    data-aos="flip-down"
                    data-aos-delay={skill.delay}
                >
                    <h2 className="text-xl text-white font-bold uppercase leading-none mb-1">{skill.title}</h2>
                    <p className="text-base text-white font-normal m-0">{skill.description}</p>
                </div>
            )
        )
    );
}
  
export default Skills;