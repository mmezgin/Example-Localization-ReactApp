import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import { useTranslation, initReactI18next } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import './contactus.styles.scss'
import User_Data_Action from '../../Redux/Actions/User_Data_Action'
import { useHistory } from 'react-router'
import Page_Name_Action from '../../Redux/Actions/Page_Name_Action'
import Select, { components } from 'react-select'
import PaperPlane from '../../SVG/PaperPlane'

export default () => {
  const [state, setState] = useState(false)
  const { t } = useTranslation()
  const UserInfo = useSelector((state) => state.User_Data_Reducer.data)
  const [type, setType] = useState(1)
  const ButtonStatus = useSelector((state) => state.Login_Reducer.data)
  const [name, setName] = useState(UserInfo.fullName)
  const [email, setEmail] = useState(UserInfo.email)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [emailValid, setEmailValid] = useState(true)
  const [phoneValid, setPhoneValid] = useState(false)
  const [msg, setMsg] = useState('')
  const pull_data = (data) => {
    setState(data)
  }
  const options = [
    { value: 'tr', label: 'TR' },
    { value: 'en', label: 'EN' },
    { value: 'gb', label: 'GB' },
    { value: 'de', label: 'DE' },
    { value: 'se', label: 'SE' },
    { value: 'ke', label: 'KE' },
    { value: 'br', label: 'BR' },
    { value: 'zw', label: 'ZW' },
  ]

  const print = () => {
    console.log(
      t('NameField') + ': ' + name + '\n'
      + t('EmailField') + ': ' + email + '\n'
      + t('PhoneField') + ': ' + phoneNumber + '\n'
      + t('Code') + ': ' + countryCode + '\n'
      + t('TextField') + ': ' + msg + '\n'


    )
  }
  function isEmail(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEmail.test(val)) {
      setEmailValid(true)
    }
    else {
      setEmailValid(false)
    }
    console.log(isEmail)
  }

  function isPhone(val) {
    let regPhone = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if (regPhone.test(val)) {
      setPhoneValid(true)
    }
    else {
      setPhoneValid(false)
    }
    console.log(isEmail)
  }

  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    if (!UserInfo.isLoggedIn) {
      window.alert(t('Alert'))
      dispatch(Page_Name_Action('Login'))
      history.push('/')
    }
  }, [])
  if (UserInfo.isLoggedIn) {
    return (
      <div className='cu-main'>
        <NavBar func={pull_data} />
        <div className='cu-con'>
          <p className='cu-title'>{t('ContactUs')}</p>
          <div className='cu-field-con'>
            <div className='cu-field'>
              <p className='cu-subtitle'>{t('NameField')}</p>
              <div className='cu-input-con'>
                <input className='cu-input' placeholder={t('NameField')} type="text" color={'#ffffff'} value={name} onChange={(txt) => { setName(txt.target.value) }} />
              </div>
            </div>
            <div className='cu-field'>
              <p className='cu-subtitle'>{t('EmailField')}</p>
              <div className='cu-input-con' style={{ borderColor: emailValid ? 'green' : 'red' }}>
                <input className='cu-input'
                  placeholder={t('EmailField')} type="text" color={'#ffffff'}
                  value={email}
                  onChange={(txt) => {
                    setEmail(txt.target.value)
                    isEmail(email)
                  }} />
              </div>
            </div>
            <div className='cu-field'>
              <p className='cu-subtitle'>{t('PhoneField')}</p>
              <div className='cu-input-con' style={{ borderColor: phoneValid ? 'green' : 'red' }}>
                <input className='cu-input' placeholder={t('PhoneField')} type="text" color={'#ffffff'}
                  value={phoneNumber}
                  onChange={(txt) => {
                    setPhoneNumber(txt.target.value)
                    isPhone(phoneNumber)
                  }} />
              </div>
            </div>
            <div className='cu-field-con2'>
              <div className='cu-field'>
                <Select className='cu-select' placeholder={t('Code')} options={options} onChange={(e) => setCountryCode(e.value)} />
              </div>
              <div className='cu-field'>
                <div className='cu-subtitle'>{t('TextField')}</div>
                <div className='cu-input-con2'>
                  <textarea className='cu-textarea' placeholder={t('TextField')} type="text" color={'#ffffff'} value={msg} onChange={(txt) => { setMsg(txt.target.value) }} />
                </div>
              </div>
            </div>
            <div className='cu-concon'>
              <div className='cu-send-con' onClick={print}>
                <PaperPlane />
                <p className='cu-subtitle'>{t('Send')}</p>
              </div>
              <p style={{ color: 'green' }}>{t('FeedBack')}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}
