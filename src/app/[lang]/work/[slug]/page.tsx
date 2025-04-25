import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/Mdx'
import { getPosts } from '@/utils/mdxReader'
import { AvatarGroup, Button, Column, Flex, Heading, SmartImage, Text } from '@/once-ui/components'
import ScrollToHash from '@/components/ScrollToHash'

interface WorkParams {
  params: {
    slug: string
    lang: string
  }
}

export async function generateStaticParams(): Promise<{ slug: string; lang: string }[]> {
  const languages = ['en', 'jp']
  const posts = getPosts(['src', 'app', 'content', 'work', 'projects'])
  // return posts.map(post => ({
  //   slug: post.slug,
  // }))
  const paths: any = []

  posts.forEach(post => {
    languages.forEach(lang => {
      paths.push({ slug: post.slug, lang })
    })
  })

  return paths
}

export default async function Project({ params }: WorkParams) {
  const { slug, lang } = await params
  const post = getPosts(['src', 'app', 'content', 'work', 'projects', `${lang}`]).find(
    post => post.slug === slug
  )

  if (!post) {
    notFound()
  }

  const avatars =
    post.metadata.team?.map(person => ({
      src: person.avatar,
    })) || []

  return (
    <Column as='section' maxWidth='m' horizontal='center' gap='l'>
      <Column maxWidth='xs' gap='16'>
        <Button
          href={`/${lang}/work`}
          variant='tertiary'
          weight='default'
          size='s'
          prefixIcon='chevronLeft'
        >
          {lang === 'en' ? 'Projects' : '戻る'}
        </Button>
        <Heading variant='display-strong-s'>{post.metadata.title}</Heading>
      </Column>
      {post.metadata.images.length > 0 && (
        <SmartImage
          priority
          aspectRatio='16 / 9'
          radius='m'
          alt='image'
          src={post.metadata.images[0]}
        />
      )}
      <Column style={{ margin: 'auto' }} as='article' maxWidth='xs'>
        <Flex gap='12' marginBottom='24' vertical='center'>
          {post.metadata.team && <AvatarGroup reverse avatars={avatars} size='m' />}
          <Text variant='body-default-s' onBackground='neutral-weak'>
            {/* {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)} */}
          </Text>
        </Flex>
        {post && <CustomMDX source={post.content} />}
      </Column>
      <ScrollToHash />
    </Column>
  )
}
