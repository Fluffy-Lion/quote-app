import styled from 'styled-components'

const StyledCard = styled.p `
    color: blue;
    height: 200px;
    width: 200px;
    border: solid 5px blue;
`   
const QuoteCard = ({ quote }) => {
    return <StyledCard>{quote}</StyledCard>
}

export default QuoteCard