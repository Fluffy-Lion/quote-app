import './App.css';
import { useState } from 'react'
import QuoteCard from './Components/QuoteCard';
import QuoteButton from './Components/QuoteButton';

require('dotenv').config()

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
        <div>
            <QuoteCard quote={quote} />
            <QuoteButton collect={collect}>click button</QuoteButton>
        </div>
    )
}

export default App;


