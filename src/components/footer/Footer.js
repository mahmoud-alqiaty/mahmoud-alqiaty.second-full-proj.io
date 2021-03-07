import React from 'react'
import styled from 'styled-components'
import {LogoLink} from '../Navbar/Navbar'
import {FaFingerprint, FaInstagram, FaTwitter, FaFacebookF} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const FooterContainer = styled.div `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    background-color: #1c2237;
    width: 100%;
    padding: 20px 0 0;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    


    /* @media screen and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px){
        grid-template-columns: repeat(1, 1fr);
    } */
`

const NewsLetter = styled.div `
    text-align: center;
    justify-content: center;
    width: 70%;
    text-transform: capitalize;
    background-color: #f2f2f2;
    color: #111;
    padding: 30px 15px;
    border-radius: 5px;
    box-shadow: 0 0 10px #ddd;

    h2{
        margin-bottom: 5px;
    }

    p{
        margin-bottom: 15px;
    }

    @media screen and (max-width: 768px){
        width: 90%;
    }

    h2{
        font-size: 18px;
    }

`
const NewsletterForm = styled.form `
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        flex-basis: 80%;
        justify-content: center;
        align-items: center;
    }
    
    input{
        border: 1px solid #1c2237;
        border-right: none;
        outline: none;
        padding: 10px 15px;
        font-size: 16px;

        @media screen and (max-width: 768px){
            width: 70%;
            border: 1px solid #1c2237;
            margin-bottom: 5px;
        }
    }

    button{
        padding: 10px;
        border: 1px solid #1c2237;
        border-right: none;
        outline: none;
        background-color: #1c2237;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            background-color: red;
            color: #fff;
        }

        @media screen and (max-width: 768px){
            width: 70%;
            border: 1px solid #1c2237;
            margin-bottom: 5px;
        }
    }

   
`

const FooterCloumnsWrapper = styled.div `
    width: 90%; 
    margin: 70px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    h2{
        text-transform: capitalize;
        margin-bottom: 7px;
    }

    a{
        display: block;
        text-decoration: none;
        color: #fff;
        text-transform: capitalize;
        padding: 3px;

        &:hover{
            opacity: 0.7;
        }
    }

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        row-gap: 20px;
    }

    @media screen and (max-width: 450px){
        grid-template-columns: 1fr;
        row-gap: 20px;
        justify-items: center;
        align-items: center;
    }
`

const CopywriteSection = styled.div `
    width: 100%; 
    padding: 10px 40px;
    background-color: #111;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;

    .social-icons{
        text-align: right;

        a{
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            margin-left: 20px;
        }
    }

    .copywriteText{
        text-align: center;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        row-gap: 20px;

        .copywriteText{
            grid-area: 2 / 1 / span 1 / span 2;
            border-top: 1px solid #ddd;
            padding-top: 4px;
        }
    }

    

    @media screen and (max-width: 450px){
        grid-template-columns: 1fr;
        row-gap: 20px;
    }
`



const Footer = () => {
    const ColContent = [
        'how it works',
        'testimonials',
        'careers',
        'investors',
        'terms of services'
    ]

    const ColHeaders = [
        'about us',
        'contact us',
        'videos',
        'socialmedia'
    ]

    return (
        <FooterContainer>
            <NewsLetter>
                <div className="newsleeter-header">
                    <h2>join our membership to get our new news and trends</h2>
                    <p><i>you can unsubscribe any time</i></p>
                    <NewsletterForm>
                        <input type="email" placeholder="Your Email" />
                        <button type="submit">Subscribe</button>
                    </NewsletterForm>
                </div>
            </NewsLetter>

            <FooterCloumnsWrapper>
                {
                    ColHeaders.map((colheader, colindex)=>{
                        return(
                            <div className="footer-col" key={colindex}>
                                <div className="footer-col-header">
                                    <h2>{colheader}</h2>
                                </div>
                                <div className="footer-col-elements">
                                    {
                                        ColContent.map((item, index)=><Link to="#" key={index}>{item}</Link>)
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </FooterCloumnsWrapper>

            <CopywriteSection>
                <div className="footer-logo">
                    <LogoLink to="/">
                        <FaFingerprint />
                        <span>Finger</span>
                    </LogoLink>
                </div>
                <div className="copywriteText">
                    <p>finger &copy; 2021</p>
                </div>
                <div className="social-icons">
                    <Link to="#"><FaFacebookF /></Link>
                    <Link to="#"><FaTwitter /></Link>
                    <Link to="#"><FaInstagram /></Link>
                </div>
            </CopywriteSection>
        </FooterContainer>
    )
}

export default Footer
