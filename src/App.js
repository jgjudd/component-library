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
  email: Yup.string().email().required('Email is Required')
})

const App = () => {
  const context = useContext(ThemeContext)
  const data = useContext(DataContext)

  const [state, dispatch] = useReducer(Reducer, data)
  const handleSubmit = (state) => {
    dispatch({ type: ACTIONS.firstNameUpdated, payload: state.firstName })
    dispatch({ type: ACTIONS.emailUpdated, payload: state.email })
    window.alert('Form Submit Success')
  }
  console.log(state)
  return (
    <ThemeContext.Provider value={context}>
      <Header />
      <Container>
        <Row>
          <Col xs='6'>
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
                  <h4>Registration Form</h4>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <lable>First Name</lable>
                    <Field name='firstName' component='input' />
                    <ErrorMessage
                      name='firstName'
                      style={{ color: 'red' }}
                      component='div'
                      onBlur={props.handleBlur}
                      onChange={props.handleChange}
                    />
                    <br />
                    <label>Email</label>
                    <Field name='email' component='input' />
                    <ErrorMessage
                      name='email'
                      style={{ color: 'red' }}
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
