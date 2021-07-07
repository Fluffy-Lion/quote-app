import styled from 'styled-components'

const StyledCard = styled.p `
    color: blue;
`   
const QuoteCard = ({ quote }) => {
    return <StyledCard>{quote}</StyledCard>
}

export default QuoteCard