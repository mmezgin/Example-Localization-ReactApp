import {
  LOGIN_DATA
} from './actionTypes'


const Login_Action = (data: any) => {
  return { type: LOGIN_DATA, payload: data }
}
export default Login_Action
