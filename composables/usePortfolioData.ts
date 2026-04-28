export interface Project {
  name: string
  desc: string
  tags: string[]
  url: string
  label: string
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
      name: 'Solar',
      desc: 'A modern energy company website with clean section layouts, strong typography, and a bold visual hierarchy designed for trust and conversion.',
      tags: ['HTML', 'CSS', 'Bootstrap'],
      url: 'https://ismoilov.github.io/Portfolios/Solar/index.html',
      label: 'Solar energy\ncompany website',
      year: '2024',
      type: 'Corporate Website',
      featured: true,
    },
    {
      name: 'Review.uz',
      desc: 'Product review platform for the Uzbekistan market with listing pages and detail views.',
      tags: ['HTML', 'CSS', 'JS'],
      url: 'https://ismoilov.github.io/Portfolios/review/index.html',
      label: 'Review platform',
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
  ]

  const marqueeItems = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Nuxt.js', 'Next.js',
    'Node.js', 'Express.js', 'Nest.js', 'REST API', 'Git', 'Full-Stack',
    'TypeScript', 'Web Performance', 'Telegram Bots', 'Mini Apps',
  ]

  return { projects, skillGroups, marqueeItems }
}
