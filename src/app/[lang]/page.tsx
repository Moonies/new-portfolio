'use client'

import {
  Heading,
  Text,
  Button,
  IconButton,
  Column,
  Row,
  RevealFx,
  Flex,
  Avatar,
} from '@/once-ui/components'
import { ScrollToTop } from '@/once-ui/components/ScrollToTop'
import { home as CreatHome, about as CreatAbout, person } from '@/app/resources/content'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
export default function Home() {
  const pathname = usePathname()
  const { t: tHome } = useTranslation('home')
  const { t: tAbout } = useTranslation('about')

  const [lang, _currentPath] = pathname.replace(/^\//, '').split('/')
  const home = CreatHome(tHome)
  const about = CreatAbout(tAbout)
  const _links = [
    {
      href: 'https://once-ui.com/docs/theming',
      title: 'Themes',
      description: 'Style your app in minutes',
    },
    {
      href: 'https://once-ui.com/docs/flexComponent',
      title: 'Layout',
      description: 'Build responsive layouts',
    },
    {
      href: 'https://once-ui.com/docs/typography',
      title: 'Typography',
      description: 'Scale text automatically',
    },
  ]

  return (
    <Column maxWidth='m' gap='xl' horizontal='center'>
      <ScrollToTop>
        <IconButton variant='secondary' icon='chevronUp' />
      </ScrollToTop>
      <Column fillWidth paddingY='l' gap='m'>
        <Column maxWidth='s'>
          <RevealFx translateY='4' fillWidth horizontal='start' paddingBottom='m'>
            <Heading wrap='balance' variant='display-strong-l'>
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY='8' delay={0.2} fillWidth horizontal='start' paddingBottom='m'>
            <Text wrap='balance' onBackground='neutral-weak' variant='heading-default-xl'>
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY='12' delay={0.4} horizontal='start'>
            <Button
              id='about'
              data-border='rounded'
              href={`/${lang}/about`}
              variant='secondary'
              size='m'
              arrowIcon
            >
              <Flex gap='8' vertical='center'>
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }}
                    src={person.avatar}
                    size='m'
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <Row
        position='relative'
        // as='footer'
        // fillWidth
        // paddingX='l'
        // paddingTop='128'
        // paddingBottom='80'
      >
        {/* <Background
          borderTop='brand-alpha-strong'
          mask={{
            x: 50,
            y: 0,
          }}
          position='absolute'
          grid={{
            display: true,
            width: '0.25rem',
            color: 'brand-alpha-strong',
            height: '0.25rem',
          }}
        /> */}
      </Row>
    </Column>
  )
}
