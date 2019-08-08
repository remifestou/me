import React from 'react'
import Logo from './Logo'
import { Link } from "react-router-dom"
import { Menu } from '@material-ui/icons';

import MobileMain from './MobileMain'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            status: 'hide'
        }

        this.showMenu = this.showMenu.bind(this)
        this.hideMenu = this.hideMenu.bind(this)
    }

    showMenu() {
        this.setState({ status: 'show' });
    }

    hideMenu() {
        this.setState({ status: 'hide' });
    }

    render() {
        return (
            <ul className="header flex items-center">
                <li>
                    <Link to="/">
                        <Logo />
                    </Link>
                </li>
                <li className="item text-lg font-extrabold uppercase ml-6 cursor-pointer">
                    <Link className="text-black-100 tracking-wide leading-none link" to="/">
                        À propos
                    </Link>
                </li>
                <li className="item text-lg font-extrabold uppercase ml-6 cursor-pointer">
                    <Link className="text-black-100 tracking-wide leading-none link" to="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Menu 
                        className="main w-10 h-auto cursor-pointer"
                        onClick={this.showMenu}
                    />
                </li>
                <MobileMain onClose={this.hideMenu} newClass={this.state.status}/>
            </ul>
        )
    }
}
  
export default Header