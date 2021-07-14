import styled from 'styled-components'

const StyleText = styled.p `
    margin: 0;
    font-size: 30px;
    color: #ffd500;
    text-shadow: 0px -2px 0px #000, 0px 2px 4px #000;
    font-family: 'Trebuchet MS', sans-serif;
    text-align: center;
`

const QuoteText = ({ text }) => {
    return <StyleText id="paragraph">{text}</StyleText>
}

export default QuoteText