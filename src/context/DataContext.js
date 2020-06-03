import { createContext } from 'react'

export const ACTIONS = {
  firstNameUpdated: 'FIRST_NAME_UPDATED',
  emailUpdated: 'EMAIL_UPDATED'
}
export const Reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.firstNameUpdated:
      return { ...state, firstName: action.payload }
    case ACTIONS.emailUpdated:
      return { ...state, email: action.payload }
    default:
      return state
  }
}
export const DataContext = createContext({
  firstName: 'John',
  email: 'JohnSmith@abc.com'
})
