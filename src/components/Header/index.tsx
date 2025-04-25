'use client'

import { redirect, usePathname } from 'next/navigation'

import { Fade, Flex, Line, Switch, ThemeSwitcher, ToggleButton } from '@/once-ui/components'
import styles from './header.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from '@/config/i18n'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()
  const [lang, _currentPath] = pathname.replace(/^\//, '').split('/')
  const supportedLanguage = i18next.options.supportedLngs as string[]
  const router = useRouter()
  const { i18n, t } = useTranslation('common')

  const [language, setLanguage] = useState<'en' | 'jp'>('en')

  const handleSwitchLanguage = useCallback(
    async (language: string) => {
      const newLanguage = language === 'en' ? 'jp' : 'en'
      setLanguage(newLanguage)
      await i18n.changeLanguage(newLanguage)
      const pathWithoutLang = pathname.split('/').slice(2).join('/')
      const newPath = pathWithoutLang ? `/${newLanguage}/${pathWithoutLang}` : `/${newLanguage}`
      router.push(newPath)

      // Update the URL with the new language
    },
    [i18n, pathname, router]
  )

  useEffect(() => {
    if (supportedLanguage?.includes(lang)) {
      setLanguage(lang as 'en' | 'jp')
      i18n.changeLanguage(lang)
    } else {
      redirect('/en')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

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
                label={t('button.about')}
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
                href={`/${i18n.language}/work`}
                label={t('button.work')}
                selected={pathname.includes(`/${lang}/work`)}
              />
              <ToggleButton
                className='s-flex-show'
                prefixIcon='grid'
                href={`/${i18n.language}/work`}
                // selected={pathname === `/${lang}/work`}
                selected={pathname.includes(`/${lang}/work`)}
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
