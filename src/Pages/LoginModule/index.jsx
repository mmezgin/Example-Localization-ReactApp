import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar'
import './login.styles.scss'
import LoginModal from './LoginModal'
import { useTranslation, initReactI18next } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../../Components/Footer'
import Page_Name_Action from '../../Redux/Actions/Page_Name_Action'
import { useHistory } from 'react-router'


export default () => {
  const [state, setState] = useState(false)
  const { t } = useTranslation()
  const UserInfo = useSelector((state) => state.User_Data_Reducer.data)
  const [type, setType] = useState(1)
  const ButtonStatus = useSelector((state) => state.Login_Reducer.data)
  const pull_data = (data) => {
    setState(data)
  }
  const history = useHistory()
  const dispatch = useDispatch()


  useEffect(() => {
    if (UserInfo.isLoggedIn) {
      dispatch(Page_Name_Action('Dashboard'))
      history.push('/Dashboard')
    }
  }, [])

  return (
    <div className='login-main'>
      <NavBar func={pull_data} />
      {!state ? <p className='login-t1'>{t('Welcome')}</p> : <LoginModal />}
      <Footer />
    </div>
  )

}
