import { Column } from '@/once-ui/components'
import ProjectList from '@/components/ProjectList'
import { Meta } from '@/once-ui/modules'
import { work } from '@/app/resources/content'
import { baseURL } from '@/app/resources/config'

interface WorkPageProps {
  params: {
    lang: string
  }
}
export async function generateStaticParams() {
  const languages = ['en', 'jp']

  return languages.map(lang => ({
    lang,
  }))
}
export async function generateMetadata({ params }: WorkPageProps) {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
  })
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { lang } = await params

  return (
    <Column maxWidth='m'>
      <ProjectList lang={lang} />
    </Column>
  )
}
