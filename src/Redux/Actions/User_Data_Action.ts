import {
  USER_DATA
} from './actionTypes'


const User_Data_Action = (data: any) => {
  return { type: USER_DATA, payload: data }
}
export default User_Data_Action