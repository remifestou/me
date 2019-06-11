import React from 'react'

function Skills() {
    let dataSkills = [
        {
            title: "Développement Web",
            description: "Développeur polyvalent, je réalise le back-end & le front-end avec des frameworks JS comme Express JS pour le back & VueJS ou ReactJS pour le front. Je découvre aussi les autres frameworks des autres langages pour trouver celui qui me plaît le plus.",
            color: "white",
            delay: "400"
        },
        {
            title: "UI/UX Design",
            description: "Je conçois des interfaces utilisateurs tout en pretant attention à l’experience utilisateur. Je fais beaucoup de veille en rapport au design pour moderniser le plus possible les interfaces que je crée.",
            color: "orange",
            delay: "800"
        },
        {
            title: "Référencement",
            description: "J’accorde une partie de mon travail sur le respect des règles de référencement naturel et faire en sorte que la visibilité de l’application que j’ai conçu ait une bonne base.",
            color: "white",
            delay: "1200"
        }
    ]

    return (
        dataSkills.map((skill) =>
            skill.color === "white" ? (
                <div 
                    key={skill.title}
                    className="w-ws h-ws bg-white rounded-xxl shadow-ws mb-8 px-8 py-6 -ml-32"
                    data-aos="flip-up"
                    data-aos-delay={skill.delay}
                >
                    <h2 className="text-xl text-black font-bold uppercase leading-none mb-1">{skill.title}</h2>
                    <p className="text-base text-black font-normal m-0">{skill.description}</p>
                </div>
            ) : (
                <div 
                    key={skill.title}
                    className="w-ws h-ws bg-ws rounded-xxl shadow-ws mb-8 px-8 py-6 ml-32"
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