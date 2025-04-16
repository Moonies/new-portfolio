'use client'

import React, { useState } from 'react'

import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  AvatarGroup,
  PasswordInput,
  SmartLink,
  Dialog,
  Line,
  LogoCloud,
  Background,
  useToast,
  Card,
  Fade,
  DateRange,
  IconButton,
  Switch,
  Column,
  Row,
  StyleOverlay,
  ThemeSwitcher,
} from '@/once-ui/components'
import { ScrollToTop } from '@/once-ui/components/ScrollToTop'

export default function Home() {
  const [selectedValue, setSelectedValue] = useState('')
  const [selectedRange, setSelectedRange] = useState<DateRange>()
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false)
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false)
  const [firstDialogHeight, setFirstDialogHeight] = useState<number>()
  const { addToast } = useToast()
  const [intro, setIntro] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tags, setTags] = useState<string[]>(['UX / UI', 'Design systems', 'AI / ML'])
  const [twoFA, setTwoFA] = useState(false)

  const handleSelect = (value: string) => {
    console.log('Selected option:', value)
    setSelectedValue(value)
  }

  const links = [
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

  const validateIntro = (value: React.ReactNode) => {
    if (typeof value === 'string' && value.length < 10) {
      return (
        <Row horizontal='center' marginBottom='12' gap='8'>
          <Icon name='errorCircle' />
          Intro must be at least 10 characters long.
        </Row>
      )
    }
    return null
  }

  const validateLogin = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regex.test(email)) {
      return 'Email and / or password is invalid.'
    }
    return null
  }

  return (
    <Column fillWidth paddingY='80' paddingX='s' horizontal='center' flex={1}>
      <ScrollToTop>
        <IconButton variant='secondary' icon='chevronUp' />
      </ScrollToTop>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: '4',
        }}
        position='fixed'
        top='0'
        left='0'
        to='bottom'
        height={5}
        fillWidth
        blur={0.25}
      />
      {/* <Row position='fixed' top='0' fillWidth horizontal='center' zIndex={3}>
        <Row
          data-border='rounded'
          horizontal='space-between'
          maxWidth='l'
          paddingRight='64'
          paddingLeft='32'
          paddingY='20'
        >
          <Logo size='s' icon={false} href='https://once-ui.com' />
          <Row gap='12' hide='s'>
            <Button
              href='https://discord.com/invite/5EyAQ4eNdS'
              prefixIcon='discord'
              size='s'
              label='Discord'
              weight='default'
              variant='tertiary'
            />
            <Button
              href='https://github.com/once-ui-system'
              prefixIcon='github'
              size='s'
              label='GitHub'
              weight='default'
              variant='tertiary'
            />
            <Row position='fixed' top='20' right='20'>
              <StyleOverlay
                position='fixed'
                top='8'
                right='8'
                style={{ height: 'calc(100vh - var(--static-space-16))' }}
              />
            </Row>
          </Row>
          <Row gap='16' show='s' horizontal='center' paddingRight='24'>
            <IconButton
              href='https://discord.com/invite/5EyAQ4eNdS'
              icon='discord'
              variant='tertiary'
            />
            <IconButton
              href='https://github.com/once-ui-system/nextjs-starter'
              icon='github'
              variant='tertiary'
            />
            <Row position='fixed' top='20' right='20'>
              <StyleOverlay
                position='fixed'
                top='8'
                right='8'
                style={{ height: 'calc(100vh - var(--static-space-16))' }}
              />
            </Row>
          </Row>
        </Row>
      </Row> */}
      <Column
        overflow='hidden'
        as='main'
        maxWidth='l'
        position='relative'
        radius='xl'
        horizontal='center'
        border='neutral-alpha-weak'
        fillWidth
      >
        <Column
          fillWidth
          horizontal='center'
          gap='48'
          radius='xl'
          paddingTop='80'
          position='relative'
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position='absolute'
            grid={{
              display: true,
              width: '0.25rem',
              color: 'neutral-alpha-medium',
              height: '0.25rem',
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position='absolute'
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: 'accent-solid-medium',
              colorEnd: 'static-transparent',
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position='absolute'
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: 'brand-solid-strong',
              colorEnd: 'static-transparent',
            }}
          />
          <Column fillWidth horizontal='center' gap='32' padding='32' position='relative'>
            <InlineCode radius='xl' shadow='m' fit paddingX='16' paddingY='8'>
              Start by editing
              <Text onBackground='brand-medium' marginLeft='8'>
                app/page.tsx
              </Text>
            </InlineCode>
            <Heading wrap='balance' variant='display-strong-xl' align='center' marginBottom='16'>
              Code faster than AI
            </Heading>
            <Button
              id='readDocs'
              target='_blank'
              label='Open docs'
              href='https://once-ui.com/docs'
              variant='secondary'
              arrowIcon
            />
            <Column horizontal='center' paddingTop='64' fillWidth gap='24'>
              <Line maxWidth={4} marginBottom='16' background='neutral-alpha-medium' />
              <AvatarGroup
                marginBottom='8'
                reverse
                size='s'
                avatars={[
                  {
                    src: '/images/l.jpg',
                  },
                  {
                    src: '/images/z.jpg',
                  },
                ]}
              />
              <Heading marginBottom='12' as='h2' align='center' variant='heading-default-l'>
                Brought to you by indie creators
                <br /> behind stellar projects:
              </Heading>
              <LogoCloud
                paddingBottom='104'
                columns='3'
                mobileColumns='1'
                limit={3}
                fillWidth
                logos={[
                  {
                    icon: false,
                    wordmarkSrc: '/trademark/dopler-wordmark.svg',
                    href: 'https://dopler.app',
                    size: 'm',
                  },
                  {
                    icon: false,
                    wordmarkSrc: '/trademark/design-engineers-wordmark.svg',
                    href: 'https://club.dropler.io',
                    size: 'm',
                  },
                  {
                    icon: false,
                    wordmarkSrc: '/trademark/enroll-wordmark.svg',
                    href: 'https://enroll.dopler.app',
                    size: 'm',
                  },
                  {
                    icon: false,
                    wordmarkSrc: '/trademark/magic-portfolio-wordmark.svg',
                    href: 'https://magic-portfolio.com',
                    size: 'm',
                  },
                ]}
              />
            </Column>
          </Column>
        </Column>
        <Row
          position='relative'
          as='footer'
          fillWidth
          paddingX='l'
          paddingTop='128'
          paddingBottom='80'
        >
          <Background
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
          />
          <Column
            position='relative'
            textVariant='body-default-xs'
            onBackground='neutral-medium'
            horizontal='center'
            align='center'
            fillWidth
            gap='16'
          >
            <Logo wordmark={false} size='s' />
            <Text size='m'>
              <Text onBackground='neutral-weak'>2025 /</Text> Once UI
            </Text>
            <SmartLink href='https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file'>
              MIT License
            </SmartLink>
            {/* <ThemeSwitcher marginTop='24' /> */}
          </Column>
        </Row>
      </Column>

      <Dialog
        isOpen={isFirstDialogOpen}
        onClose={() => setIsFirstDialogOpen(false)}
        title='Account details'
        description='Manage your security settings and password.'
        base={isSecondDialogOpen}
        onHeightChange={height => setFirstDialogHeight(height)}
        footer={
          <>
            <Button variant='secondary' onClick={() => setIsFirstDialogOpen(false)}>
              Close
            </Button>
          </>
        }
      >
        <Column paddingTop='24' fillWidth gap='24'>
          <Switch
            reverse
            isChecked={twoFA}
            onToggle={() => setTwoFA(!twoFA)}
            label='2FA'
            description='Enable two factor authentication'
          />
          <Button onClick={() => setIsSecondDialogOpen(true)}>Change password</Button>
        </Column>
      </Dialog>
      <Dialog
        isOpen={isSecondDialogOpen}
        onClose={() => setIsSecondDialogOpen(false)}
        title='Change password'
        stack
        description='Choose a new password for your account.'
        minHeight={firstDialogHeight}
        footer={
          <>
            <Button variant='secondary' onClick={() => setIsSecondDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={() => setIsSecondDialogOpen(false)}>Save</Button>
          </>
        }
      >
        <PasswordInput id='resetPassword' label='New password' />
      </Dialog>
    </Column>
  )
}
