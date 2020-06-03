import React, { useContext, useReducer } from 'react'
import { Container, Col, Row } from 'reactstrap'
import Button from './components/Button'

import './App.scss'

import Header from './components/Header'
import Footer from './components/Footer'
/// import MainContent from './components/MainContent'

import { ThemeContext } from './context/ThemeContext'
import { DataContext, Reducer, ACTIONS } from './context/DataContext'

const App = () => {
  const context = useContext(ThemeContext)
  const data = useContext(DataContext)

  const [state, dispatch] = useReducer(Reducer, data)

  function updateState() {
    dispatch({ type: ACTIONS.firstNameUpdated, payload: 'Johnny' })
  }
  console.log(state)
  return (
    <ThemeContext.Provider value={context}>
      <Header />
      <Container>
        <Row>
          <Col>
            <div>
              <p>{state.firstName}</p>
              <p>{state.lastName}</p>
            </div>
            <Button text='Change' onClick={updateState} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
