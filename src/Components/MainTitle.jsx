import styled from 'styled-components'

const StyledTitle = styled.h1 `
    font-size: 70px;
    margin: 10px;
    color: #ffd500;
    font-family: 'Trebuchet MS', sans-serif;
    text-shadow: 1px 1px 1px black, 2px 2px 2px black;
`
const MainTitle = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>
}

export default MainTitle