import React, { useContext, useReducer } from 'react'
import { Container, Col, Row } from 'reactstrap'
import Button from './components/Button'

import './App.scss'

import Header from './components/Header'
import Footer from './components/Footer'
/// import MainContent from './components/MainContent'

import { ThemeContext } from './context/ThemeContext'
import { DataContext, Reducer, ACTIONS } from './context/DataContext'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validation = Yup.object().shape({
  firstName: Yup.string().required('First Name is Required'),
  email: Yup.string().required('Email is Required')
})

const App = () => {
  const context = useContext(ThemeContext)
  const data = useContext(DataContext)

  const [state, dispatch] = useReducer(Reducer, data)
  const handleSubmit = () => {
    dispatch({ type: ACTIONS.firstNameUpdated, payload: 'Johnny' })
    dispatch({ type: ACTIONS.emailUpdated, payload: 'Jack@gmail.com' })
    window.alert('Form Submit Success')
  }
  console.log(state)
  return (
    <ThemeContext.Provider value={context}>
      <Header />
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={{
                firstName: '',
                email: ''
              }}
              validationSchema={validation}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit}>
                  <div>
                    <Field name='firstName' component='input' />
                    <ErrorMessage
                      name='firstName'
                      component='div'
                      onBlur={props.handleBlur}
                      onChange={props.handleChange}
                    />
                    <br />
                    <Field name='email' component='input' />
                    <ErrorMessage
                      name='email'
                      component='div'
                      onBlur={props.handleBlur}
                      onChange={props.handleChange}
                    />
                  </div>
                  <br />
                  <div>
                    <p>{state.firstName}</p>
                    <p>{state.email}</p>
                  </div>
                  <div>
                    <Button text='submit' />
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
