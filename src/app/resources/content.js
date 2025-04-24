// import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "SARUN",
  lastName: "PETCHSOONGSAKUL",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "FRONT-END Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Thai", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Thai", "Japnese", "English"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Moonies",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/sarun-petchsoongsakul-b87680200",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:sarun.petchsoongsakul@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Front-End Developer</>,
  subline: (
    <>
      I`m Sarun, a Front-End Developer
      <br /> I consistently keep an eye on emerging technology trends,
      aiming for continuous self-improvement and striving for further accomplishments.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
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
    title: "Introduction",
    description: (
      <>
        I have experience in web application development.
        Through my previous experiences, I have been involved in numerous projects,
        learning techniques and best practices to create outstanding interfaces that cater to user needs.
        I consistently keep an eye on emerging technology trends,
        aiming for continuous self-improvement and striving for further accomplishments.
        Looking ahead, I am eager to venture into back-end development tasks as well.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "株式会社さんせん清水",
        timeframe: "2024 - Present",
        role: "Front-End and System Engineer",
        achievements: [
          <>
            Migrate older in-house software to current languages for easy maintenance and management
          </>,
          <>
            Create in-house software for support another engineer team
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/project/ISF/isf-1.png",
            alt: "ISF Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/project/ISF/isf-2.png",
            alt: "ISF Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/project/ISF/isf-3.png",
            alt: "ISF Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Thai Credit Retail Bank",
        timeframe: "2020 - 2022",
        role: "Assitant Maneger Front-End Develop team",
        achievements: [
          <>
            Migrate in-house software and add new feature to use AWS cloud
          </>,
          <>
            Create Mobile Bank Application
          </>,
        ],
        images: [],
      },
      {
        company: "Ayudhya Development Leasing Co.,Ltd.",
        timeframe: "2019 - 2020",
        role: "Front-End Develop (Contarct)",
        achievements: [
          <>
            Migrate in-house software from basic html to angular JS
          </>,
          <>
            Redesign BackOffice workflow
          </>,
        ],
        images: [],
      },
      {
        company: "3BROADBAND",
        timeframe: "2016 - 2019",
        role: "Junior Front-End Develop",
        achievements: [
          <>
            Migrate in-house software from basic html to angular JS
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "KING MONKUT’S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK",
        description: <>Studied Information Technology.</>,
      },
      {
        name: "京都民際日本語学校",
        description: <>Studied Japnese languages.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/work/figma-1.png",
            alt: "work image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Nextjs",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/work/miro-1.png",
            alt: "work image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/miro-2.png",
            alt: "work image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Angular",
        description: <>A framework by Google for building large-scale, single-page web applications using TypeScript.</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "React Native",
        description: <>A framework for building native mobile apps for iOS and Android using React.</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "TypeScript",
        description: <>A typed superset of JavaScript that enhances code quality and maintainability.</>,
        // optional: leave the array empty if you don't want to display images
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
