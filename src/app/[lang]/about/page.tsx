'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

export default function AboutPage() {
  const { t } = useTranslation('common')
  return <div>{t('welcome')}</div>
}
