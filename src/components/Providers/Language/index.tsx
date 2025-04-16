'use client'

import { PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18next from '@/config/i18n'

type LanguageProviderProps = {
  locale?: string
} & PropsWithChildren

export default function LanguageProvider({ children, locale }: LanguageProviderProps) {

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}
