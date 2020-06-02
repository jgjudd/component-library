import React from 'react'
import styled from 'styled-components'

const HeaderWithStyles = styled.header`
  background-color: ${(props) => (props.red ? 'red' : 'blue')};
  color: white;
`

const Header = () => {
  return (
    <HeaderWithStyles red>
      <div>Div1</div>
      <div>Div2</div>
    </HeaderWithStyles>
  )
}

export default Header
