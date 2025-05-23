import { getPosts } from '@/utils/mdxReader'
import { Column } from '@/once-ui/components'
import { ProjectCard } from '@/components/ProjectCard'
import { work } from '@/app/resources/content'
import { Meta } from '@/once-ui/modules'
import { baseURL } from '@/app/resources/config'
interface ProjectsProps {
  range?: [number, number?]
  lang: string
}

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    // path: work.path,
  })
}

export default async function Projects(param: ProjectsProps) {
  const { lang } = await param
  const allProjects = getPosts(['src', 'app', '[lang]', 'work', 'projects', lang])

  // const sortedProjects = allProjects.sort((a, b) => {
  //   return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  // })

  // const displayedProjects = range
  //   ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
  //   : sortedProjects
  return (
    <Column fillWidth gap='xl' marginBottom='40' paddingX='l'>
      {allProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map(member => ({ src: member.avatar })) || []}
          link={post.metadata.link || ''}
        />
      ))}
    </Column>
  )
}
