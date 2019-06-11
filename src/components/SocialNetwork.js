import React from 'react'

function SocialNetwork() {
    let dataSocialNetwork = [
        {
            link: "https://www.linkedin.com/in/remifestou/",
            icon: "linkedin",
            color: "#0077B5",
            margin: false,
            target: true
        },
        {
            link: "https://github.com/remifestou",
            icon: "github",
            color: "#000000",
            margin: true,
            target: true
        },
        {
            link: "mailto:remi.festou@icloud.com",
            icon: "gmail",
            color: "#B23121",
            margin: false,
            target: false
        }
    ]

    return (
        dataSocialNetwork.map((social) => 
            !social.margin ? (
                <a  
                    key={social.icon}
                    className="w-16 h-16 flex justify-center items-center rounded-full"
                    style={{ backgroundColor: social.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.link}
                >
                    <span className={"icon text-white text-2xl icon-" + social.icon}></span>
                </a>
            ) : (
                <a 
                    key={social.icon}
                    className="w-16 h-16 flex justify-center items-center rounded-full mx-8"
                    style={{ backgroundColor: social.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.link}
                >
                    <span className={"icon text-white text-2xl icon-" + social.icon}></span>
                </a>
            )
        )
    );
}
  
export default SocialNetwork;