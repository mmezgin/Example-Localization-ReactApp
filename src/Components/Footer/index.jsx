import React, { useState, useEffect } from 'react';
import './index.styles.scss'
import { useTranslation, initReactI18next } from 'react-i18next'
import i18next from 'i18next'

export default () => {
  const [state, setState] = useState(false)
  const { t } = useTranslation();

  return (
    <div className='components-footer'>
      <p className='components-footer-t'>Dummy Footer</p>
    </div>
  )
}
