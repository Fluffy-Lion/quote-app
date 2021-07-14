import styled from 'styled-components'

const StyledTitle = styled.h1 `
    font-size: 30px;
    color: black;
`
const MainTitle = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>
}

export default MainTitle