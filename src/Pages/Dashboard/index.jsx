import React, { useState } from 'react';
import NavBar from '../../Components/NavBar'
import { useTranslation, initReactI18next } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import './dashboard.styles.scss'

export default () => {
  const [state, setState] = useState(false)
  const { t } = useTranslation();
  const [type, setType] = useState(1)
  const ButtonStatus = useSelector((state) => state.Login_Reducer.data)
  const pull_data = (data) => {
    setState(data)
  }
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
    </div>
  )

}
