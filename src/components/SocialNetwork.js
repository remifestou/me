import React from 'react'
import dataSocialNetwork from '../datas/DataSocial'

function SocialNetwork() {
    return (
        dataSocialNetwork.map((social) => 
            !social.target ? (
                <a 
                    key={social.icon}
                    className={"w-16 h-16 flex justify-center items-center rounded-full bg-" + social.color + "-100 hover:bg-" + social.color + "-200 transition-ws"}
                    href={social.link}
                >
                    <span className={"icon text-white text-2xl icon-" + social.icon}></span>
                </a>
            ) : !social.margin ? (
                <a  
                    key={social.icon}
                    className={"w-16 h-16 flex justify-center items-center rounded-full bg-" + social.color + "-100 hover:bg-" + social.color + "-200 transition-ws"}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.link}
                >
                    <span className={"icon text-white text-2xl icon-" + social.icon}></span>
                </a>
            ) : (
                <a 
                    key={social.icon}
                    className={"w-16 h-16 flex justify-center items-center rounded-full mx-8 bg-" + social.color + "-100 hover:bg-" + social.color + "-200 transition-ws"}
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