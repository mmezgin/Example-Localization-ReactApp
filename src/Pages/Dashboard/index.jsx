import React, { useState, useEffect } from 'react'
import NavBar from '../../Components/NavBar'
import { useTranslation, initReactI18next } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import './dashboard.styles.scss'
import User_Data_Action from '../../Redux/Actions/User_Data_Action'
import Page_Name_Action from '../../Redux/Actions/Page_Name_Action'
import { useHistory } from 'react-router'
import Footer from '../../Components/Footer'


export default () => {
  const [state, setState] = useState(false)
  const history = useHistory()
  const { t } = useTranslation()
  const UserInfo = useSelector((state) => state.User_Data_Reducer.data)
  const [type, setType] = useState(1)
  const ButtonStatus = useSelector((state) => state.Login_Reducer.data)
  const pull_data = (data) => {
    setState(data)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    if (!UserInfo.isLoggedIn) {
      window.alert(t('Alert'))
      dispatch(Page_Name_Action('Login'))
      history.push('/')
    }
  }, [])
  return (
    <div className='dashboard-main'>
      <NavBar func={pull_data} />
      <img style={{ marginTop: '5%' }} src="https://cdn.discordapp.com/attachments/711969350717800498/891724802849669120/s2-removebg-preview.png" alt="Girl in a jacket" width="300" height="220"></img>
      <div className='dashboard-t-con'>
        <p className='dashboard-t2'>{t('Title')}</p>
        <p className='dashboard-t'>{t('ScorpionText')}</p>
        <p className='dashboard-t'>{t('ScorpionText')}</p>
        <p className='dashboard-t'>{t('ScorpionText')}</p>
        <p className='dashboard-t'>{t('ScorpionText')}</p>
        <p className='dashboard-t'>{t('ScorpionText')}</p>
        <p className='dashboard-t'>{t('ScorpionText')}</p>
        <p className='dashboard-t'>{t('ScorpionText')}</p>
        <p className='dashboard-t'>{t('ScorpionText')}</p>
        <p className='dashboard-t'>{t('ScorpionText')}</p>
        <p className='dashboard-t'>{t('ScorpionText')}</p>
        <p className='dashboard-t'>{t('ScorpionText')}</p>
        <p className='dashboard-t'>{t('ScorpionText')}</p>
      </div>
      <Footer />
    </div>
  )

}
