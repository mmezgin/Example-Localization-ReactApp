import React, { useState } from 'react';
import NavBar from '../../Components/NavBar'
import './login.styles.scss'
import LoginModal from './LoginModal'
import { useTranslation, initReactI18next } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'


export default () => {
  const [state, setState] = useState(false)
  const { t } = useTranslation();
  const [type, setType] = useState(1)
  const ButtonStatus = useSelector((state) => state.Login_Reducer.data)
  const pull_data = (data) => {
    setState(data)
  }
  return (
    <div className='login-main'>
      <NavBar func={pull_data} />
      {!state ? <p className='login-t1'>{t('Welcome')}</p> : <LoginModal />}
    </div>
  )

}
