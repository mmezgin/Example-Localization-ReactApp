import {
  PAGE_NAME
} from '../Actions/actionTypes'

const initial_data = {
  data: 'Login'
}
const Page_Name_Reducer = (state = initial_data, action: any) => {
  switch (action.type) {
    case PAGE_NAME:
      return { ...state, data: action.payload, error: '' }

    default:
      return state
  }
}
export default Page_Name_Reducer
