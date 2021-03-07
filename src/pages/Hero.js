import React from 'react'
import styled from 'styled-components'

const HeroParent = styled.section `
    display: flex;
    flex-direction: ${({flexDirection})=>flexDirection};
    padding: 150px 50px 100px;
    flex-basis: 50%;
    min-height: calc( 100vh - 0px);
    background-color : ${({bgColor})=>bgColor};
    /* flex-wrap: wrap; */
    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 100px 20px;
    }
`

const TextBox = styled.div `
    width: 50%;
    font-family: 'Open Sans', sans-serif;

    @media screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 30px;
    }

    .small-title{
        font-size: 20px;
        font-weight: 400;
        color: ${({bgColor})=>(bgColor === '#1c2237')? 'rgba(250, 250, 250, 0.7)' : '#111'};
        text-transform: capitalize;
    }

    .main-title{
        font-size: 30px;
        color: ${({bgColor})=>(bgColor === '#1c2237')? '#fff' : '#111'};
        margin: 10px 0 20px
    }

    .description{
        font-size: 18px;
        font-weight: 600;
        color: ${({bgColor})=>(bgColor === '#1c2237')? '#f2f2f2' : '#111'};
        margin-bottom: 50px;
        text-align: justify;
    }

    .text-box-btn{
        border: none;
        outline: none;
        padding: 10px 15px;
        border-radius: 5px;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        background-color: ${({bgColor})=>(bgColor === '#1c2237')? '#f2f2f2' : '#555'};
        color: ${({bgColor})=>(bgColor === '#1c2237')? '#555' : '#f2f2f2'};
        transition: 0.4s;

        &:hover{
            background-color: red;
            color: #fff;
        }
    }
`

const ImgtBox = styled.div `
    width: 50%;
    display: grid;
    justify-content: center;
    /* align-items: center; */

    @media screen and (max-width: 768px){
        width: 100%;
        /* margin-bottom: 30px; */
    }

    img{
        max-width:90%;
    }

`

const Hero = ({
    flexDirection, bg, smallTitle, mainTitle, description,  btnLabel, imgSrc
}) => {
    return (
        <HeroParent flexDirection={flexDirection} bgColor={bg}>

            <TextBox bgColor={bg}>
                <p className="small-title">{smallTitle}</p>
                <h1 className="main-title">{mainTitle}</h1>
                <p className="description">{description}</p>
                <button className="text-box-btn">{btnLabel}</button>
            </TextBox>

            <ImgtBox>
                <img src={imgSrc} alt="a" />
            </ImgtBox>

        </HeroParent>
    )
}

export default Hero
