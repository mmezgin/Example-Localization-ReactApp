import React, { useState, useEffect } from 'react';
import './index.styles.scss'
import { useSelector, useDispatch } from 'react-redux'
import Scorpion from '../../SVG/Scorpion'
import Home from '../../SVG/Home'
import ContactUs from '../../SVG/ContactUs'
import { useTranslation, initReactI18next } from 'react-i18next'
import Select from 'react-select'
import i18next from 'i18next'
import Login_Action from '../../Redux/Actions/Login_Action'
import { useHistory } from 'react-router-dom'

export default (props) => {
  const [state, setState] = useState(false)
  const dispatch = useDispatch()
  const Language = useSelector((state) => state.Page_Name_Reducer.data)
  const UserInfo = useSelector((state) => state.User_Data_Reducer.data)
  const { t } = useTranslation();
  const history = useHistory()
  const navigateTool = () => {
    history.push('/Tool')
  }
  console.log(UserInfo)

  const options = [
    { value: 'tr', label: 'Türkçe' },
    { value: 'en', label: 'English' },

  ]
  const ButtonStatus = () => {
    setState(!state)
  }
  useEffect(() => {
    props.func(state)
  }, [state])

  return (
    <div className='components-navbar'>
      <div className='components-navbar-leftside'>
        <Scorpion />
        {Language ? <p className='components-navbar-t1'>{t(Language)}</p> : <div />}
      </div>
      <div className='components-navbar-rightside'>
        {UserInfo.isLoggedIn ?
          <div>
            <Home style={{ marginRight: '10px' }} />
            <ContactUs style={{ marginRight: '40px' }} />
          </div>
          : <p className='components-navbar-t2' style={{ borderWidth: state ? '2px' : '1px' }} onClick={ButtonStatus}>{t('LoginT')}</p>}
        <Select className='x' placeholder={t('Language')} options={options} onChange={(e) => i18next.changeLanguage(e.value)} />
      </div>
    </div>
  )
}
