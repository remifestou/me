import React from 'react'

function Skills() {
    let dataSkills = [
        {
            title: "Développement Web",
            description: "Développeur polyvalent, je réalise le back-end & le front-end avec des frameworks comme ExpressJS ou Laravel pour le back & VueJS ou ReactJS pour le front. Je découvre aussi d'autres frameworks comme le Ruby on Rails, AngularJS ...",
            color: "white",
            delay: "400"
        },
        {
            title: "UI/UX Design",
            description: "Je conçois des interfaces utilisateurs tout en prêtant attention à l’expérience utilisateur. Je fais beaucoup de veille en rapport avec le design pour moderniser le plus possible les interfaces que je crée.",
            color: "orange",
            delay: "800"
        },
        {
            title: "Référencement",
            description: "Je consacre une partie de mon travail au respect des règles de référencement naturel pour faire en sorte que l’application que j’ai conçu ait une bonne visibilité.",
            color: "white",
            delay: "1200"
        }
    ]

    return (
        dataSkills.map((skill) =>
            skill.color === "white" ? (
                <div 
                    key={skill.title}
                    className="w-ws h-ws bg-white rounded-xxl shadow-ws mb-8 px-8 py-6 mr-32"
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