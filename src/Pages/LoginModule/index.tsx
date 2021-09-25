import React, { useState } from 'react';
import LeftSideBar from '../../Components/NavBar'
import './login.styles.scss'
import { useTranslation, initReactI18next } from 'react-i18next'
const Login = () => {
  const { t } = useTranslation();
  return (
    <div>
      <LeftSideBar />
      <p>{t('hi')}</p>
    </div>
  )

}

export default Login