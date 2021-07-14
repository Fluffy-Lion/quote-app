import './App.css';
import { useState } from 'react'
import QuoteCard from './Components/QuoteCard';
import QuoteButton from './Components/QuoteButton';
import styled from 'styled-components'
import backgroundImage from '../src/styles/blob-scene-haikei.svg'
import MainTitle from './Components/MainTitle'

require('dotenv').config()
const PageWrap = styled.div `
    background-image: url(${backgroundImage});
    margin-right: auto;
    margin-left: auto;
    max-width: 60%;
    padding: 20px;
    height: 60vh;
    border: solid 8px pink;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


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
            <MainTitle />
            <QuoteCard quote={quote} />
            <QuoteButton collect={collect}>click button</QuoteButton>
        </PageWrap>
    )
}

export default App;


