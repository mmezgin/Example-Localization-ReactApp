import React, { useState } from 'react';
import NavBar from '../../Components/NavBar'
import './login.styles.scss'
import { useTranslation, initReactI18next } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
  const { t } = useTranslation();
  const ButtonStatus = useSelector((state) => state.Login_Reducer.data)

  return (
    <div className='login-main'>
      <NavBar />
      {!ButtonStatus ? <p className='login-t1'>{t('Welcome')}</p> : <div />}
    </div>
  )

}

export default Login