import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar'
import './login.styles.scss'
import { useTranslation, initReactI18next } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'

export default () => {
  const { t } = useTranslation();
  const ButtonStatus = useSelector((state) => state.Login_Reducer.data)
  const [mailState, setMailState] = useState(false)
  const [pwState, setPwState] = useState(false)
  const [mail, setMail] = useState('')
  const [pw, setPw] = useState('')
  const [success, setSuccess] = useState('initial')
  const [success2, setSuccess2] = useState('initial')
  const [rnd, setRnd] = useState()

  const mailInput = () => {
    setMailState(true)
    setPwState(false)
  }

  const pwInput = () => {
    setMailState(false)
    setPwState(true)
  }
  const loginAttempt = () => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == mail && users[i].password == pw) {
        setSuccess2('Success')
      }
    }
    success != 'initial' ? '' :
      success == 'Success' ? '' :
        setSuccess('Fail')

  }
  useEffect(() => {
    console.log(success)
  }, [success])

  const users = [
    {
      id: 1,
      email: 'mert_ezgin@scorp.com',
      password: '123456',
      fullName: 'Mert Mehmet Ezgin',
      phoneNumber: '05533570887',
      countryCode: 'tr'
    },
    {
      id: 2,
      email: 'john_mcsmith@scorp.com',
      password: '654321',
      fullName: 'John Mcsmith',
      phoneNumber: '123456789',
      countryCode: 'en'
    },
  ]
  return (
    <div className='login-loginmodal-con'>
      <p className='login-loginmodal-t1'>{t('LoginT')}</p>
      <div style={{ marginTop: '30px' }} />
      <div className='login-loginmodal-input-con'
        onClick={mailInput}
        style={{ borderWidth: mailState ? '2px' : '1px' }}>
        <input className='login-loginmodal-input' placeholder={t('Mail')} type="text" color={'#ffffff'}
          onBlur={(e) => {
            setMail(e.target.value)
            setMailState(false)
          }} />
      </div>
      <div style={{ marginTop: '20px' }} />
      <div className='login-loginmodal-input-con'
        onClick={pwInput}
        style={{ borderWidth: pwState ? '2px' : '1px' }}>
        <input className='login-loginmodal-input' placeholder={t('Pw')} type="password" color={'#ffffff'}
          onBlur={(e) => {
            setPw(e.target.value)
            setPwState(false)
          }} />
      </div>
      <div style={{ marginTop: '40px' }} />
      <div className='login-loginmodal-button' onClick={loginAttempt}>
        <p className='login-loginmodal-t2'>{t('LoginT')}</p>
      </div>
      <p className='login-loginmodal-t3'>{t('PwForgotten')} </p>
    </div>
  )

}
