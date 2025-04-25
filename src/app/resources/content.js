// import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: 'SARUN',
  lastName: 'PETCHSOONGSAKUL',
  get name() {
    return `${this.firstName} ${this.lastName}`
  },
  role: 'FRONT-END Developer',
  avatar: '/images/avatar.jpg',
  location: 'Asia/Thai', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['Thai', 'Japnese', 'English'], // optional: Leave the array empty if you don't want to display languages
}

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/Moonies',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://linkedin.com/in/sarun-petchsoongsakul-b87680200',
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:sarun.petchsoongsakul@gmail.com',
  },
]

const home = t => {
  return {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>{t('headline')}</>,
    subline: (
      <>
        {t('subline.line1')}
        <br /> {t('subline.line2')}
      </>
    ),
  }
}

const about = t => {
  return {
    label: t('label'),
    title: t('title'),
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
      display: true,
      subItems: false,
    },
    avatar: {
      display: true,
    },
    intro: {
      display: true,
      title: t('intro.title'),
      description: <>{t('intro.description')}</>,
    },
    work: {
      display: true, // set to false to hide this section
      title: t('work.title'),
      experiences: [
        {
          company: t('work.experiences.company4.name'),
          timeframe: t('work.experiences.company4.timeframe'),
          role: t('work.experiences.company4.role'),
          achievements: t('work.experiences.company4.achievements', { returnObjects: true }),
          images: [
            // optional: leave the array empty if you don't want to display images
            {
              src: '/images/work/project/ISF/isf-1.png',
              alt: 'ISF Project',
              width: 16,
              height: 9,
            },
            {
              src: '/images/work/project/ISF/isf-3.png',
              alt: 'ISF Project',
              width: 16,
              height: 9,
            },
            {
              src: '/images/work/project/hayaraku/hayaraku-1.png',
              alt: 'ISF Project',
              width: 16,
              height: 9,
            },
            {
              src: '/images/work/project/hayaraku/hayaraku-3.png',
              alt: 'ISF Project',
              width: 16,
              height: 9,
            },
          ],
        },
        {
          company: t('work.experiences.company3.name'),
          timeframe: t('work.experiences.company3.timeframe'),
          role: t('work.experiences.company3.role'),
          achievements: t('work.experiences.company3.achievements', { returnObjects: true }),

          images: [],
        },
        {
          company: t('work.experiences.company2.name'),
          timeframe: t('work.experiences.company2.timeframe'),
          role: t('work.experiences.company2.role'),
          achievements: t('work.experiences.company2.achievements', { returnObjects: true }),

          images: [],
        },
        {
          company: t('work.experiences.company1.name'),
          timeframe: t('work.experiences.company1.timeframe'),
          role: t('work.experiences.company1.role'),
          achievements: t('work.experiences.company1.achievements', { returnObjects: true }),

          images: [],
        },
      ],
    },
    studies: {
      display: true, // set to false to hide this section
      title: t('studies.title'),
      institutions: [
        {
          name: t('studies.institutions.study1.name'),
          description: t('studies.institutions.study1.description'),
        },
        {
          name: t('studies.institutions.study2.name'),
          description: t('studies.institutions.study2.description'),
        },
      ],
    },
    technical: {
      display: true, // set to false to hide this section
      title: t('technical.title'),
      skills: [
        {
          title: t('technical.skill.skill1.title'),
          description: t('technical.skill.skill1.description'),
          // optional: leave the array empty if you don't want to display images
          images: [
            {
              src: '/images/work/figma-1.png',
              alt: 'work image',
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: t('technical.skill.skill2.title'),
          description: t('technical.skill.skill2.description'),
          // optional: leave the array empty if you don't want to display images
          images: [
            {
              src: '/images/work/miro-1.png',
              alt: 'work image',
              width: 16,
              height: 9,
            },
            {
              src: '/images/work/miro-2.png',
              alt: 'work image',
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: t('technical.skill.skill3.title'),
          description: t('technical.skill.skill3.description'),
        },
        {
          title: t('technical.skill.skill4.title'),
          description: t('technical.skill.skill4.description'),
        },
        {
          title: t('technical.skill.skill5.title'),
          description: t('technical.skill.skill5.description'),
        },
        {
          title: t('technical.skill.skill6.title'),
          description: t('technical.skill.skill6.description'),
        },
      ],
    },
  }
}

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
}

export { person, social, home, about, work }
