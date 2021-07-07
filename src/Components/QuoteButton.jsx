import styled from 'styled-components'

const StyledButton = styled.button`
    color: red;
    font-size: 4rem;
`
const QuoteButton = ({ children, collect }) => {
    return <StyledButton onClick={collect}>{children}</StyledButton>
}

export default QuoteButton