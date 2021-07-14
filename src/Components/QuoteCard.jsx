import styled from 'styled-components'

const StyledCard = styled.p `
    color: blue;
    height: 200px;
    width: 100%;
    // border: solid 5px blue;
`   
const QuoteCard = ({ children }) => {
    return <StyledCard>{ children }</StyledCard>
}

export default QuoteCard