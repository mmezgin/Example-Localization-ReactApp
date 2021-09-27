import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar'
import './login.styles.scss'
import { useTranslation, initReactI18next } from 'react-i18next'
import User_Data_Action from '../../Redux/Actions/User_Data_Action'
import Page_Name_Action from '../../Redux/Actions/Page_Name_Action'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

export default () => {
  const { t } = useTranslation();
  const ButtonStatus = useSelector((state) => state.Login_Reducer.data)
  const [mailState, setMailState] = useState(false)
  const [pwState, setPwState] = useState(false)
  const [mail, setMail] = useState('')
  const [pw, setPw] = useState('')
  const [success, setSuccess] = useState('initial')
  const [rnd, setRnd] = useState()
  const [user, setUser] = useState()
  const history = useHistory()
  const dispatch = useDispatch()

  const mailInput = () => {
    setMailState(true)
    setPwState(false)
  }

  const pwInput = () => {
    setMailState(false)
    setPwState(true)
  }

  const loginAttempt = () => {
    let userMail = users.filter(user => user.email == mail);
    let userPw = users.filter(user => user.password == pw);
    userMail[0]?.id == userPw[0]?.id ? setSuccess('success') : setSuccess('fail')
    if (userMail[0]?.id == userPw[0]?.id) {
      setUser(userMail[0])
    }
  }
  useEffect(() => {
    if (success == 'success' && user) {
      let theUser = user
      user.isLoggedIn = true
      setUser(user)
      console.log(user)
      dispatch(User_Data_Action(user))
      dispatch(Page_Name_Action('Dashboard'))
      history.push('/Dashboard')
    }
    setSuccess('initial')
  }, [success])

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
          }}
          onFocus={(e) => {
            setMailState(false)
          }}
        />
      </div>
      <div style={{ marginTop: '20px' }} />
      <div className='login-loginmodal-input-con'
        onClick={pwInput}
        style={{ borderWidth: pwState ? '2px' : '1px' }}>
        <input className='login-loginmodal-input' placeholder={t('Pw')} type="password" color={'#ffffff'}
          onBlur={(e) => {
            setPw(e.target.value)
            setPwState(false)
          }}
          onFocus={(e) => {
            setMailState(false)
          }}
        />
      </div>
      <div style={{ marginTop: '40px' }} />
      <div className='login-loginmodal-button' onClick={loginAttempt}>
        <p className='login-loginmodal-t2'>{t('LoginT')}</p>
      </div>
      <p className='login-loginmodal-t3'>{t('PwForgotten')}</p>
    </div>
  )
}

export const users = [
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
