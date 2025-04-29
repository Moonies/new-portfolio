import { Column } from '@/once-ui/components'
import ProjectList from '@/components/ProjectList'

interface PageProps {
  params: {
    lang: string
  }
}

export default function Work() {
  // const { lang } = await params

  return (
    <Column maxWidth='m'>
      <ProjectList />
    </Column>
  )
}
