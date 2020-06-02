import React, { useContext, createContext } from 'react'
import { Container, Col, Row } from 'reactstrap'
import Button from './components/Button'

import './App.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

export const ThemeContext = createContext('blue')

const App = (props) => {
  const context = useContext(ThemeContext)

  return (
    <ThemeContext.Provider value={context}>
      <Header />
      <Container>
        <Row>
          <Col>
            <MainContent />
          </Col>
        </Row>
        <Row>
          <Col>
            <MainContent />
            <Button />
          </Col>
        </Row>
      </Container>
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
