import React from 'react'
import styled from 'styled-components'
import CardsSection from './CardsSection'
import Hero from './Hero'
import { HeroOne, HeroTow, HeroThree, HeroFour} from './HerosData'

const MainHome = styled.section `
    min-height: 100vh;
    min-width: 100%;
`
const Home = () => {
    return (
        <MainHome>
            <Hero {...HeroOne} />
            <Hero {...HeroTow} />
            <Hero {...HeroThree} />
            <CardsSection />
            <Hero {...HeroFour} />
        </MainHome>
    )
}

export default Home
