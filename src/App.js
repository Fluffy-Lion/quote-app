import './App.css';
import { useState } from 'react'
import QuoteCard from './Components/QuoteCard';
import QuoteButton from './Components/QuoteButton';
import MainTitle from './Components/MainTitle'
import QuoteText from './Components/QuoteText';
import HairImg from './Components/HairImg';
import styled from 'styled-components'
import backgroundImage from '../src/styles/blob-scene-haikei.svg'
import hairSvg from './styles/trumpHair.png'

require('dotenv').config()
const PageWrap = styled.div `
    background-image: url(${backgroundImage});
    background-color: #ffaa5f;
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    padding: 20px;
    height: 100vh;
    // border: solid 8px pink;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StyledHeadCont = styled.div `
    // border: solid green 2px;
    display: flex;
    align-items: center;
    justify-content: center;


`
const HeadCont = ({ children }) => {
    return <StyledHeadCont>{children}</StyledHeadCont>
}

const App = () => {

    const [quote, setQuote] = useState("")
    const [error, setError] = useState({ error: false, message: "" })

    const collect = async () => {
        try{
        const response = await fetch('https://tronalddump.io/random/quote')
        if(response.status !== 200){
            throw new Error("oops")
        }
        const data = await response.json()
        setQuote(data.value)
        } catch(error){
            setError({ error: true, message: error.message})
        }
    }
    if(error.error){
        return <h1>an error has occured: {error.message}</h1>
    }
    return (
        <PageWrap>
            <HeadCont>
                <MainTitle>trumper</MainTitle>
                <HairImg src={hairSvg} />
            </HeadCont>
            <QuoteCard>
                <QuoteText text={quote}/>
            </QuoteCard>
            <QuoteButton collect={collect}>get a quote</QuoteButton>
        </PageWrap>
    )
}

export default App;


