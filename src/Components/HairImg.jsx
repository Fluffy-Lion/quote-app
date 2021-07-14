import styled from 'styled-components'

const StyledImg = styled.img `
    border: solid red 4px;
    width: 40%;
`

const HairImg = ({ src }) => {
    return <StyledImg src={src} />
}

export default HairImg
