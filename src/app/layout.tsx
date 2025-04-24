import '@/once-ui/styles/index.scss'
import '@/once-ui/tokens/index.scss'

import classNames from 'classnames'

import { baseURL, meta, og, style } from '@/app/resources/config'
import { Background, Column, Flex, ThemeProvider, ToastProvider } from '@/once-ui/components'
import { Meta } from '@/once-ui/modules'

import { Geist } from 'next/font/google'
import { Geist_Mono } from 'next/font/google'
import { Header } from '@/components/Header'
import LanguageProvider from '@/components/Providers/Language'
import { Footer } from '@/components/Footer'

const primary = Geist({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
})

const code = Geist_Mono({
  variable: '--font-code',
  subsets: ['latin'],
  display: 'swap',
})

type FontConfig = {
  variable: string
}

/*
  Replace with code for secondary and tertiary fonts
  from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined
const tertiary: FontConfig | undefined = undefined
/*
 */

export async function generateMetadata() {
  return Meta.generate({
    title: meta.title,
    description: meta.description,
    baseURL,
    path: '/',
    image: og.image,
  })
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        primary.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
        code.variable,
      )}
    >


      <ThemeProvider>
        <LanguageProvider>
          <ToastProvider>
            <Background
              position="absolute"
              mask={{
                cursor: true
              }}
              gradient={{
                colorEnd: 'static-transparent',
                colorStart: 'accent-solid-medium',
                display: true,
                height: 100,
                opacity: 50,
                tilt: 0,
                width: 100,
              }}

            />
            <Column style={{ minHeight: "100vh" }} as="body" fillWidth margin="0" padding="0">
              <Header />
              <Flex
                position="relative"
                zIndex={0}
                fillWidth
                paddingY="l"
                paddingX="l"
                horizontal="center"
                flex={1}
              >
                <Flex horizontal="center" fillWidth minHeight="0">
                  {children}
                </Flex>
              </Flex>
              <Footer />
            </Column>
          </ToastProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Flex>
  )
}
