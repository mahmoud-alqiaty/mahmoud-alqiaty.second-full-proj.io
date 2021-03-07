import React from 'react'
import styled from 'styled-components'
import CardItem from './CardItem'
import { CarditemOne, CarditemTow, CarditemThree } from './CardItemData'

const CardsDivion = styled.div `
    min-height: calc(100vh - 60px);
    background-color: #f2f2f2;
    padding: 120px;
    font-family: 'Open Sans', sans-serif;

    .pricing_section-heading{
        display: inline-block;
        padding-bottom: 10px;
        color: #111;
        text-transform: capitalize;
        font-size: 40px;
        margin-bottom: 30px;
        border-bottom: 5px solid red;
        border-radius: 5px;
    }

    @media screen and (max-width: 850px){
        padding: 120px 70px;
    }

    @media screen and (max-width: 640px){
        padding: 120px 20px;
    }
    
`
const CardsWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;

    .bigger{
        transform: scale(1.2);
    }

    @media screen and (max-width: 850px){
        flex-direction: column;
    }

`
const CardsSection = () => {
    return (
        <CardsDivion>
            <h1 className='pricing_section-heading'>
                pricing
            </h1>
            <CardsWrapper>
                <CardItem {...CarditemOne} />
                <CardItem {...CarditemTow} />
                <CardItem {...CarditemThree} />
            </CardsWrapper>
        </CardsDivion>
    )
}

export default CardsSection
