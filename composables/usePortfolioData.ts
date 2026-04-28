export interface Project {
  name: string
  desc: string
  tags: string[]
  url: string
  label: string
  image: string
  year: string
  type: string
  featured: boolean
}

export interface SkillGroup {
  label: string
  pills: string[]
}

export const usePortfolioData = () => {
  const projects: Project[] = [
    {
      name: 'Easton.uz',
      desc: 'Corporate website for Easton, featuring a modern design with clean layouts and strong brand presentation.',
      tags: ['HTML', 'CSS', 'JS', 'React', 'Next.js'],
      url: 'https://easton.uz',
      label: 'Easton corporate site',
      image: '/images/projects/easton.jpg',
      year: '2024',
      type: 'Corporate Website',
      featured: true,
    },
    {
      name: 'Solar',
      desc: 'A modern energy company website with clean section layouts, strong typography, and a bold visual hierarchy designed for trust and conversion.',
      tags: ['HTML', 'CSS', 'Bootstrap'],
      url: 'https://ismoilov.github.io/Portfolios/Solar/index.html',
      label: 'Solar energy\ncompany website',
      image: '/images/projects/solar.jpg',
      year: '2024',
      type: 'Corporate Website',
      featured: false,
    },
    {
      name: 'Review.uz',
      desc: 'Product review platform for the Uzbekistan market with listing pages and detail views.',
      tags: ['HTML', 'CSS', 'JS'],
      url: 'https://ismoilov.github.io/Portfolios/review/index.html',
      label: 'Review platform',
      image: '/images/projects/review.jpg',
      year: '2023',
      type: 'Web Platform',
      featured: false,
    },
    {
      name: 'rgsbm.uz',
      desc: 'Institutional multi-page website with structured navigation, document pages, and accessible layout.',
      tags: ['Bootstrap', 'JS'],
      url: 'https://ismoilov.github.io/Portfolios/rgsbm/index.html',
      label: 'Institutional site',
      image: '/images/projects/rgsbm.jpg',
      year: '2023',
      type: 'Institutional Site',
      featured: false,
    },
    {
      name: 'my-city.uz',
      desc: 'City information portal presenting local services, news, and map integration for citizens.',
      tags: ['HTML', 'CSS', 'JS'],
      url: 'https://ismoilov.github.io/Portfolios/my-city/index.html',
      label: 'City info portal',
      image: '/images/projects/my-city.jpg',
      year: '2023',
      type: 'City Portal',
      featured: false,
    },
    {
      name: 'Redmond',
      desc: 'E-commerce landing page showcasing product categories with a polished visual design and call-to-action sections.',
      tags: ['HTML', 'Bootstrap'],
      url: 'https://ismoilov.github.io/Portfolios/redmond/index.html',
      label: 'E-commerce page',
      image: '/images/projects/redmond.jpg',
      year: '2022',
      type: 'E-Commerce',
      featured: false,
    },
  ]

  const skillGroups: SkillGroup[] = [
    { label: 'Frontend', pills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js'] },
    { label: 'SSR Frameworks', pills: ['Next.js', 'Nuxt.js'] },
    { label: 'Backend', pills: ['Node.js', 'Express.js', 'Nest.js', 'REST API'] },
    { label: 'Tools', pills: ['Git', 'Figma'] },
    { label: 'Telegram', pills: ['Telegram Bots', 'Mini Apps'] },
    { label: 'AI', pills: ['OpenAI API', 'Claude API', 'LangChain', 'Prompt Engineering'] },
  ]

  const marqueeItems = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Nuxt.js', 'Next.js',
    'Node.js', 'Express.js', 'Nest.js', 'REST API', 'Git', 'Full-Stack',
    'TypeScript', 'Web Performance', 'Telegram Bots', 'Mini Apps',
    'OpenAI API', 'Claude API', 'LangChain', 'Prompt Engineering', 'AI Integration',
  ]

  return { projects, skillGroups, marqueeItems }
}
