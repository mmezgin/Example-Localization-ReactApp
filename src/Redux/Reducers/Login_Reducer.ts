import {
  LOGIN_DATA
} from '../Actions/actionTypes'

const initial_data = {
  data: false
}
const Login_Reducer = (state = initial_data, action: any) => {
  switch (action.type) {
    case LOGIN_DATA:
      return { ...state, data: action.payload, error: '' }

    default:
      return state
  }
}
export default Login_Reducer
