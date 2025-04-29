import { Column } from '@/once-ui/components'
import ProjectList from '@/components/ProjectList'

interface PageProps {
  params: {
    lang: string
  }
}

export default async function WorkPage({ params }: PageProps) {
  const { lang } = await params

  return (
    <Column maxWidth='m'>
      <ProjectList lang={lang} />
    </Column>
  )
}
