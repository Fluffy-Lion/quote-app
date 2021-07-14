import styled from 'styled-components'

const StyledButton = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 18px;
    border-radius: 3px;
    border-color: #f9a800;

    &:hover {
        background-color: #ff7800;
        color: #fbfbf8
    }
`
const QuoteButton = ({ children, collect }) => {
    return <StyledButton onClick={collect}>{children}</StyledButton>
}

export default QuoteButton