import React, {useState, useEffect} from 'react'
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5"
import { IconContext } from "react-icons/lib"
import {Nav, NavbarContainer, NavLogo, LogoImg, MobileIcon, NavMenu, NavItem, NavLinks } from "./NavbarElements"
import dsiLogo from '../../images/CUNY-Dominican-Studies-Institute-RGB.png';
import { AnimatePresence } from 'framer-motion'; 
import GlobalStyle from '../../globalStyles';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (window.scrollY >-80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect (() => {
        changeNav()
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: "#fff"}}>
                <Nav active={scroll} click={click}>
                    <AnimatePresence>
                        <GlobalStyle />
                        <NavbarContainer exitBeforeEnter>
                            <NavLogo to='/'>
                                <LogoImg src={dsiLogo}/>
                            </NavLogo>
                            <MobileIcon onClick={handleClick}>
                                {click ? <IoCloseSharp /> : <IoMenuSharp />}
                            </MobileIcon>
                            <NavMenu onClick={handleClick} click={click}>
                                <NavItem>
                                    <NavLinks to="/">Home</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/timeline">Timeline</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/biographies">Biographies</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/addvet">Add Veteran</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/about">About</NavLinks>
                                </NavItem>
                            </NavMenu>
                        </NavbarContainer>
                    </AnimatePresence>
                    
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar