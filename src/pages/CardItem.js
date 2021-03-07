import React from 'react'
import { GiScaleMail } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Card = styled.div `
    width: 32%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    border-radius: 10px;
    background-color: ${({bg})=>bg};
    color: #fff;
    transition: 0.4s;
    transform: ${({bigger})=>bigger? "scaleY(1.05)" : "scalY(1)"};
    &:hover{
        transform: scale(1.05);
    }

    @media screen and (max-width: 850px){
        width: 100%;
        margin-bottom: 40px;
    }
`
const CardHeader = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    margin-bottom: 30px;

    .icon{
        font-size: 36px;
        /* margin-bottom: 10px; */
        color: #fff;
    }

    h3{
        text-transform: uppercase;
        font-size: 16px;
        margin-bottom: 10px;
    }

    h1{
        font-size: 24px;
    }
    
    span{
        font-weight: 400;
        font-style: italic;
        font-size: 14px;
        /* color: rgba(100, 100, 10, 0.5); */
    }
    
`

const CardBody = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    margin: 40px 0;

    div{
        margin-bottom: 15px;
    }
`

const CardButton = styled(Link) `
    width: 80%;
    background-color: ${({bg})=> bg === "#00f"?  '#1c2237' : "#00f" };
    font-weight: 500;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px 15px;
    color: #fff;
    text-align: center;
    cursor: pointer;

    &:hover{
        background-color: red;
    }
`

const CardItem = ({bg, icon, title, price, feature1, feature2, feature3, bigger}) => {
    return (
        <Card bg={bg} bigger={bigger}>
            <CardHeader>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <h1>{price}</h1>
                <span>per month</span>
            </CardHeader>

            <CardBody>
                <div>{feature1}</div>
                <div>{feature2}</div>
                <div>{feature3}</div>
            </CardBody>

            <CardButton bg={bg}>
                Choose Plane
            </CardButton>
        </Card>
    )
}

export default CardItem
