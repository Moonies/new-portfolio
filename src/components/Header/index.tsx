'use client'

import { usePathname } from 'next/navigation'

import { Fade, Flex, Line, Switch, ThemeSwitcher, ToggleButton } from '@/once-ui/components'
import styles from './header.module.scss'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const pathname = usePathname()
  const [lang, _currentPath] = pathname.replace(/^\//, '').split('/')

  const { i18n } = useTranslation('common')

  const [language, setLanguage] = useState<'en' | 'jp'>('en')

  const handleSwitchLanguage = useCallback(
    async (language: string) => {
      const newLanguage = language === 'en' ? 'jp' : 'en'
      // console.log(language === 'en' ? 'jp' : 'en')
      setLanguage(newLanguage)
      await i18n.changeLanguage(newLanguage)
      const pathWithoutLang = pathname.split('/').slice(2).join('/')
      console.log(pathWithoutLang)
      if (pathWithoutLang) {
        window.history.replaceState({ lang: newLanguage }, '', `/${newLanguage}/${pathWithoutLang}`)
      } else {
        window.history.replaceState({ lang: newLanguage }, '', `/${newLanguage}`)
      }
      // Update the URL with the new language
    },
    [i18n, pathname]
  )

  return (
    <>
      <Fade hide='s' fillWidth position='fixed' height='80' zIndex={9} />
      <Fade show='s' fillWidth position='fixed' bottom='0' to='top' height='80' zIndex={9} />
      <Flex
        fitHeight
        className={styles.position}
        as='header'
        zIndex={9}
        fillWidth
        padding='8'
        horizontal='center'
      >
        <Flex fillWidth horizontal='center'>
          <Flex
            background='surface'
            border='neutral-medium'
            radius='m-4'
            shadow='l'
            padding='4'
            horizontal='center'
          >
            <Flex gap='4' vertical='center' textVariant='body-default-s'>
              <ToggleButton
                prefixIcon='home'
                href={`/${i18n.language}`}
                selected={pathname === `/${i18n.language}`}
              />
              <Line vert maxHeight='24' />
              <ToggleButton
                className='s-flex-hide'
                prefixIcon='person'
                href={`/${i18n.language}/about`}
                label={'about'}
                selected={pathname === `/${lang}/about`}
              />
              <ToggleButton
                className='s-flex-show'
                prefixIcon='person'
                href={`/${i18n.language}/about`}
                selected={pathname === `/${lang}/about`}
              />
              <ToggleButton
                className='s-flex-hide'
                prefixIcon='grid'
                href='/work'
                label={'work'}
                selected={pathname.startsWith('/work')}
              />
              <ToggleButton
                className='s-flex-show'
                prefixIcon='grid'
                href='/work'
                selected={pathname.startsWith('/work')}
              />
              <Switch
                isChecked={language === 'en'}
                onToggle={() => handleSwitchLanguage(language)}
                label={language.toUpperCase()}
              />
              <ThemeSwitcher />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
