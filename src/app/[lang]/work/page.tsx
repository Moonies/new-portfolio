import { Column } from '@/once-ui/components'
import Projects from './components/Project'

interface PageProps {
  params: {
    lang: string
  }
}

export default async function WorkPage({ params }: PageProps) {
  const { lang } = await params

  return (
    <Column maxWidth='m'>
      <Projects lang={lang} />
      work page
    </Column>
  )
}
