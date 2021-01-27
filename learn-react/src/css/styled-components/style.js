import styled from 'styled-components'

export const Header = styled.div`
  font-size: 20px;
  color: red;
`

export const Footer = styled.div`
  color: yellow;
  &:hover {
    color: blue;
  }
  &::after {
    content: "页脚"
  }
`
