import {
  USER_DATA
} from '../Actions/actionTypes'

const initial_data = {
  data: {
    email: '',
    password: '',
    fullName: '',
    isLoggedIn: false,
    phoneNumber: '',
    countryCode: ''
  }
}
const User_Data_Reducer = (state = initial_data, action: any) => {
  switch (action.type) {
    case USER_DATA:
      return { ...state, data: action.payload, error: '' }

    default:
      return state
  }
}
export default User_Data_Reducer
