import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as UpArrow} from '../../assets/up-arrow-circle.svg'
import { menuAnimation, closeMenu } from '../../animations/animations'

const Header = ({ history, dimension }) => {
    const [menuState, setMenuState] = useState({ menuOpened: false })

    useEffect(() => {
        history.listen(() => setMenuState({ menuOpened: false}))
        if(menuState.menuOpened) {
            menuAnimation(dimension)
        } else {
            closeMenu()
        }
    }, [menuState.menuOpened])
    return (
        <div className="header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="logo">
                        <NavLink to="/" exact >AGENCY.</NavLink>
                    </div>
                    <div className="navbar-toggle">
                        <div className="hamburger-menu" onClick={() => setMenuState({ menuOpened: true })}>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="hamburger-menu-close" onClick={() => setMenuState({ menuOpened: false })}>
                            <UpArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)
