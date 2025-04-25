'use client'
import i18next from '@/config/i18n'
import { redirect, usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function DefaultPage() {
  const pathname = usePathname()
  const [lang, _currentPath] = pathname.replace(/^\//, '').split('/')
  const supportedLanguage = i18next.options.supportedLngs as string[]

  useEffect(() => {
    if (supportedLanguage?.includes(lang)) {
      redirect(`/${lang}`)
    } else {
      redirect('/en')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
