import { createContext } from 'react'

export const ACTIONS = {
  firstNameUpdated: 'FIRST_NAME_UPDATED',
  lastNameUpdated: 'LAST_NAME_UPDATED'
}
export const Reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.firstNameUpdated:
      return { ...state, firstName: action.payload }
    case ACTIONS.lastNameUpdated:
      return { ...state, lastName: action.payload }
    default:
      return state
  }
}
export const DataContext = createContext({
  firstName: 'John',
  lastName: 'Smith'
})
