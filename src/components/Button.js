import React from 'react'
import styled from 'styled-components'

const SubmitButton = styled.button`
  background-color: blue;
  font-weight: 500;
  padding: 10px 10px 10px 10px;
  margin: 1px 5px 1px 1px;
  min-width: 133px;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1), 0 20px 20px 0 rgba(0, 0, 0, 0.1);
  span {
    background-color: blue;
    color: white;
    font-size: 18px;
    line-height: 0.72;
    letter-spacing: 1px;
    text-align: center;
  }
`

const Button = (props) => {
  return (
    <SubmitButton onClick={props.onClick}>
      <span> {props.text} </span>
    </SubmitButton>
  )
}
Button.defaultProps = {
  text: 'Next'
}

export default Button
