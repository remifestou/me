import React from 'react'
import { Link } from "react-router-dom"
import { Close } from '@material-ui/icons'
import logo from '../assets/images/logo-me.svg'

function MobileMain(props) {
    return (
        <div className={`mobile-main ${props.newClass}`}>
            <ul className="w-full h-full flex flex-col justify-center items-center -mt-16">
                <img 
                    src={logo}
                    alt="logo remifestou - orange planet"
                    className="w-48"
                />
                <Link
                    className="item-main w-7/12 py-6 border-4 border-black-100 mt-16 cursor-pointer text-center"
                    to="/"
                    onClick={props.onClose}
                >
                    <span className="text-3xl font-extrabold uppercase text-black-100 tracking-wide leading-none">
                        À propos
                    </span>
                </Link>
                <Link 
                    className="item-main w-7/12 py-6 border-4 border-black-100 mt-16 cursor-pointer text-center"
                    to="/contact"
                    onClick={props.onClose}
                >
                    <span className="text-black-100 text-3xl font-extrabold uppercase tracking-wide leading-none">
                        Contact
                    </span>
                </Link>
            </ul>
            <div
                className="close flex justify-center items-center rounded-full w-16 h-16 shadow-xl cursor-pointer"
                onClick={props.onClose}
            >
                <Close className="text-white w-8 h-auto"/>
            </div>
        </div>
    )
}

export default MobileMain