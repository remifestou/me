import React from 'react'
import logo from '../assets/images/logo-me.svg'
import logoSm from '../assets/images/logo-sm.svg'

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: window.innerWidth, 
            height: window.innerHeight,
            logo: ''
        };
        
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        this.state.width > 800 ? this.setState({ logo: logo }) : this.setState({ logo: logoSm })
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    render() {
        return (
            <img 
                src={this.state.logo}
                alt="logo remifestou - orange planet"
                className="logo"
            />
        )
    }
}

export default Logo