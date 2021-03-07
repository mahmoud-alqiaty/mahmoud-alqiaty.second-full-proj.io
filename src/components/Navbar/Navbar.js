import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import {FaFingerprint, FaBars, FaTimes} from 'react-icons/fa'
import { NavbarData } from './NavbarData'



const Nav = styled.nav `
    width: 100%;
    height: 60px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1c2237;
    position: fixed;
    z-index: 1000;
`

export const LogoLink = styled(Link) `
    font-size: 30px;
    font-weight: 900;
    text-decoration: none;
    color: #fff;

    span {
        margin-left: 10px;
        font-family: 'PT Sans', sans-serif;
    }
`

// ========== menu ===========

const Menu = styled.ul `
    list-style-type: none;
    display: grid;
    grid-auto-flow: column;
    column-gap: 30px;
    font-family: 'PT Sans', sans-serif;

    li{
        display: flex;
        flex-direction: column;
    }

    li span {
        width: 0;
        height: 3px;
        background-color: red;
        transition: 0.3s;
    }

    li:hover span {
        width: 100%;
    }

    a{
        color: #fff;
        text-decoration: none;
        text-transform: capitalize;
        font-size: 18px;
        font-weight: 700;
    }

    /* ------- Sign up button ----- */

    .nav-signUp{
        background-color: #fff;
        padding: 3px 8px 0;
        border-radius: 3px;
        margin-left: 30px;
        transition: 0.2s;
    }

    .nav-signUp span {
        opacity: 0;
    }

    .nav-signUp a {
        color: #333;
    }

    .nav-signUp:hover{
        background-color: #eee;
    }


    /* ---------menu in Mobile----- */
    ${({mobile})=>
        mobile && css `
            grid-template-columns: auto;
            grid-auto-flow: row;
            grid-auto-rows: 10%;
            gap: 20px 0;
            justify-items: center;
            align-items: center;
            height: calc( 100vh - 60px );
            width: 100%;
            padding: 20px 0;
            position: absolute;
            top: ${({menuIcon})=> menuIcon? '60px' : '-100vh'};
            left: 0;
            opacity: ${({menuIcon})=> menuIcon? 1 : 0};
            z-index: 10;
            background-color: darkblue;
            transition: 0.5s;

            li{
                width: 100%;
                align-items: center;
                justify-content: center;
            }

            li span{
                display: none;
            }

            .nav-signUp {
                background-color: #fff;
                padding: 10px 20px;
                border-radius: 5px;
                margin-left: 0;
                width: 50%;
            }

            .nav-signUp a {
                color: #333;
            }

            .nav-signUp:hover{
                background-color: #eee;
            }
        `

    }
`

const MenuBtn = styled.div `
    color: #fff;
    font-size: 30px;
    cursor: pointer;
`

const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false)
    const [mobile, setMobile] = useState(true)

    const handleMenuIcon = ()=>{
        setMenuIcon(!menuIcon)
    }

    const hideMenu = ()=>{
        setMenuIcon(false)
    }



    const handleMobileIcon = ()=>{
        if(window.innerWidth<=768){setMobile(true)}
        else{setMobile(false)}
    }

    window.addEventListener('resize', handleMobileIcon)

    useEffect(() => {
        handleMobileIcon();
    }, [])


    return (
        <Nav>
            <div >
                <LogoLink to="/">
                    <FaFingerprint />
                    <span>Finger</span>
                </LogoLink>
            </div>

            <Menu mobile={mobile} menuIcon={menuIcon} >
                    {
                        NavbarData.map((item, index)=>
                            <li key={index} className={item.cname} onClick={hideMenu}>
                                <NavLink to={item.path}>
                                    {item.title}
                                </NavLink>
                                <span></span>
                            </li>
                        )
                    }
            </Menu>

                {
                    mobile &&<div onClick={handleMenuIcon}> 
                                <MenuBtn>
                                    {menuIcon? <FaTimes /> : <FaBars />}
                                </MenuBtn>
                            </div>
                }
            
            

        </Nav>
    )
}

export default Navbar
