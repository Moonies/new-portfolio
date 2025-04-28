import { Column } from '@/once-ui/components'
import { Projects } from './components/Project'

interface PageProps {
  params: {
    lang: string
  }
}

export default function WorkPage({ params }: PageProps) {
  const { lang } = params

  return (
    <Column maxWidth='m'>
      <Projects lang={lang} />
    </Column>
  )
}
