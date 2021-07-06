import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom'
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
            console.log(error)
        }
    }

    return (
        <div>
            <h2>{quote}</h2>
            <button onClick={collect}>get quote</button>
        </div>
    )
}

export default App;
