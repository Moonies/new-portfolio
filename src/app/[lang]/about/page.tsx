'use client'

import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from '@/once-ui/components'
import React, { JSX } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './about.module.scss'
import { person, about as CreateAbout, social } from '@/app/resources/content'
// import TableOfContents from './components/TableContents';

export default function AboutPage() {
  const { t } = useTranslation('about')
  const about = CreateAbout(t)
  const _structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map(experience => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map(institution => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map(skill => skill.title),
    },
  ]
  return (
    <Column maxWidth='m'>
      <Flex fillWidth mobileDirection='column' horizontal='center'>
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            minWidth='160'
            paddingX='l'
            paddingBottom='xl'
            gap='m'
            flex={3}
            horizontal='center'
          >
            <Avatar src={person.avatar} size='xl' />
            <Flex gap='8' vertical='center'>
              <Icon onBackground='accent-weak' name='globe' />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap='8'>
                {person.languages.map((language, index) => (
                  <Tag key={index} size='l'>
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight='160'
            vertical='center'
            marginBottom='32'
          >
            <Heading className={styles.textAlign} variant='display-strong-xl'>
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant='display-default-xs'
              onBackground='neutral-weak'
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop='20'
                paddingBottom='8'
                gap='8'
                wrap
                horizontal='center'
                fitWidth
              >
                {social.map(
                  item =>
                    item.link && (
                      <div key={item.name}>
                        <Button
                          className='s-flex-hide'
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size='s'
                          variant='secondary'
                        />
                        <IconButton
                          className='s-flex-show'
                          size='l'
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant='secondary'
                        />
                      </div>
                    )
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant='body-default-l' fillWidth gap='m' marginBottom='xl'>
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as='h2' id={about.work.title} variant='display-strong-s' marginBottom='m'>
                {about.work.title}
              </Heading>
              <Column fillWidth gap='l' marginBottom='40'>
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal='space-between' vertical='end' marginBottom='4'>
                      <Text id={experience.company} variant='heading-strong-l'>
                        {experience.company}
                      </Text>
                      <Text variant='heading-default-xs' onBackground='neutral-weak'>
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant='body-default-s' onBackground='brand-weak' marginBottom='m'>
                      {experience.role}
                    </Text>
                    <Column as='ul' gap='16'>
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text
                          as='li'
                          variant='body-default-m'
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop='m' paddingLeft='40' wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border='neutral-medium'
                            radius='m'
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius='m'
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as='h2' id={about.studies.title} variant='display-strong-s' marginBottom='m'>
                {about.studies.title}
              </Heading>
              <Column fillWidth gap='l' marginBottom='40'>
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap='4'>
                    <Text id={institution.name} variant='heading-strong-l'>
                      {institution.name}
                    </Text>
                    <Text variant='heading-default-xs' onBackground='neutral-weak'>
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as='h2'
                id={about.technical.title}
                variant='display-strong-s'
                marginBottom='40'
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap='l'>
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap='4'>
                    <Text variant='heading-strong-l'>{skill.title}</Text>
                    <Text variant='body-default-m' onBackground='neutral-weak'>
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop='m' gap='12' wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border='neutral-medium'
                            radius='m'
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius='m'
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  )
}
