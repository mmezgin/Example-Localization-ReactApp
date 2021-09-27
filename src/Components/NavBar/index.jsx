import React, { useState, useEffect } from 'react';
import './index.styles.scss'
import { useSelector, useDispatch } from 'react-redux'
import Scorpion from '../../SVG/Scorpion'
import LogoutIcon from '../../SVG/Logout'
import Home from '../../SVG/Home'
import Menu from '../../SVG/Menu'
import ContactUs from '../../SVG/ContactUs'
import { useTranslation, initReactI18next } from 'react-i18next'
import Select, { components } from 'react-select'
import i18next from 'i18next'
import Login_Action from '../../Redux/Actions/Login_Action'
import User_Data_Action from '../../Redux/Actions/User_Data_Action'
import { useHistory } from 'react-router-dom'
import Page_Name_Action from '../../Redux/Actions/Page_Name_Action'
import Modal from 'react-modal'
import useWindowDimensions from '../../Utils/responsive'

export default (props) => {
  const { height, width } = useWindowDimensions();
  const [state, setState] = useState(false)
  const [menuState, setMenuState] = useState(true)
  const dispatch = useDispatch()
  const Language = useSelector((state) => state.Page_Name_Reducer.data)
  const UserInfo = useSelector((state) => state.User_Data_Reducer.data)
  const { t } = useTranslation();
  const history = useHistory()
  const [modalIsOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'tr', label: 'TR' },
    { value: 'en', label: 'EN' },
  ]
  console.log(width)

  const ButtonStatus = () => {
    setState(!state)
  }
  const toggleModal = () => {
    setIsOpen(!modalIsOpen)
  }
  const toggleMenu = () => {
    setMenuState(!menuState)
  }

  const Logout = () => {
    dispatch(User_Data_Action({
      email: '',
      password: '',
      fullName: '',
      isLoggedIn: false,
      phoneNumber: '',
      countryCode: ''
    }))
    dispatch(Page_Name_Action('Login'))
    history.push('/')
  }

  useEffect(() => {
    props.func(state)
  }, [state])

  if (width > 600) {
    return (
      <div className='components-navbar'>
        <div className='components-navbar-leftside'>
          <Scorpion />
          {Language ? <p className='components-navbar-t1'>{t(Language)}</p> : <div />}
        </div>
        <div className='components-navbar-rightside'>
          {UserInfo.isLoggedIn ?
            <div className='components-navbar-icon-con'>
              <Home onClick={() => {
                dispatch(Page_Name_Action('Dashboard'))
                history.push('/Dashboard')
              }} />
              <ContactUs onClick={() => {
                dispatch(Page_Name_Action('ContactUs'))
                history.push('/ContactUs')
              }} />
              {!modalIsOpen ?
                <p className='components-navbar-t2' onClick={toggleModal}>{UserInfo.fullName}</p> :
                <div className='components-navbar-con3'>
                  <p className='components-navbar-t2' onClick={toggleModal}>{UserInfo.email}</p>
                  <LogoutIcon onClick={Logout} />
                </div>
              }
              <Select className='components-navbar-select' placeholder={t('Language')} options={options} onChange={(e) => i18next.changeLanguage(e.value)} />
            </div>
            :
            <div className='components-navbar-icon-con2'>
              <p className='components-navbar-t2' style={{ borderWidth: state ? '2px' : '1px' }} onClick={ButtonStatus}>{t('LoginT')}</p>
              <Select className='components-navbar-select' placeholder={t('Language')} options={options} onChange={(e) => i18next.changeLanguage(e.value)} />
            </div>
          }
        </div>
      </div>
    )
  }
  if (width <= 600) {
    return (
      <div className='components-navbar'>
        {menuState ? <div className='components-navbar-leftside'>
          <Scorpion />
          {Language ? <p className='components-navbar-t1'>{t(Language)}</p> : <div />}
        </div> : <div />}
        {menuState ? <Menu onClick={toggleMenu} /> :
          <div className='components-navbar-rightside'>
            <Menu onClick={toggleMenu} opacity={0.5} />
            {UserInfo.isLoggedIn ?
              <div className='components-navbar-icon-con'>
                <Home onClick={() => {
                  dispatch(Page_Name_Action('Dashboard'))
                  history.push('/Dashboard')
                }} />
                <ContactUs onClick={() => {
                  dispatch(Page_Name_Action('ContactUs'))
                  history.push('/ContactUs')
                }} />
                {!modalIsOpen ?
                  <p className='components-navbar-t2' onClick={toggleModal}>{UserInfo.fullName}</p> :
                  <div className='components-navbar-con3'>
                    <p className='components-navbar-t2' onClick={toggleModal}>{UserInfo.email}</p>
                    <LogoutIcon onClick={Logout} />
                  </div>
                }
                <Select className='components-navbar-select' placeholder={t('Language')} options={options} onChange={(e) => i18next.changeLanguage(e.value)} />
              </div>
              :
              <div className='components-navbar-icon-con2'>
                <p className='components-navbar-t2' style={{ borderWidth: state ? '2px' : '1px' }} onClick={ButtonStatus}>{t('LoginT')}</p>
                <Select className='components-navbar-select' placeholder={t('Language')} options={options} onChange={(e) => i18next.changeLanguage(e.value)} />
              </div>
            }
          </div>}
      </div>
    )
  }
}
