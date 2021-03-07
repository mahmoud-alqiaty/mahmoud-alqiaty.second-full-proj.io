import { SiFreelancer } from 'react-icons/si'
import { GiGoldBar } from 'react-icons/gi'
import { GrDiamond } from 'react-icons/gr'

export const CarditemOne = {
    bg: '#00f',
    icon: <SiFreelancer />,
    title: 'starter',
    price: '$8.99',
    feature1: '100 transitions',
    feature2: '2% Cash Back',
    feature3: '$10,000 Limit'
};

export const CarditemTow = {
    bg: '#1c2237',
    icon: <GiGoldBar />,
    title: 'gold',
    price: '$29.99',
    feature1: '1000 transitions',
    feature2: '3.5% Cash Back',
    feature3: '$100,000 Limit',
    bigger: true
};

export const CarditemThree = {
    bg: '#00f',
    icon: <GrDiamond />,
    title: 'diamond',
    price: '$99.99',
    feature1: 'unlimited transitions',
    feature2: '5% Cash Back',
    feature3: 'unlimited spending'
};