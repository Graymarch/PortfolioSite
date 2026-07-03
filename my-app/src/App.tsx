import './App.css'
import { WorkCard } from './components/WorkCard'
import { SocialLink } from './components/SocialLink'

export type WorkItem = {
  title: string
  description: string
  link: string
  imageSrc: string
}

export type SocialItem = {
  label: string
  url: string
}

function App() {
  const works: WorkItem[] = [
    {
      title: 'Project One',
      description: 'A sample product showcase with a clear introduction and project summary.',
      link: 'https://example.com/project-one',
      imageSrc: createPlaceholderImage('Project One'),
    },
    {
      title: 'Project Two',
      description: 'A lightweight case study for a dashboard or interface concept.',
      link: 'https://example.com/project-two',
      imageSrc: createPlaceholderImage('Project Two'),
    },
    {
      title: 'Project Three',
      description: 'An example work item that can be replaced with a real case study later.',
      link: 'https://example.com/project-three',
      imageSrc: createPlaceholderImage('Project Three'),
    },
  ]

  const socials: SocialItem[] = [
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com' },
    { label: 'Twitter', url: 'https://x.com' },
  ]

  return (
    <main className="portfolio-shell">
      <header className="hero-header">
        <img className="profile-photo" src="/PFP.jpg" alt="Profile portrait" />
        <div>
          <h1>Software Engineer</h1>
          <p>This is my portfolio of past works and experiences.</p>
        </div>
      </header>

      <div className="content-grid">
        <section className="selected-work-section">
          <h2>Selected Work</h2>
          <div className="work-grid">
            {works.map((work) => (
              <WorkCard key={work.title} {...work} />
            ))}
          </div>
        </section>

        <div className="side-panel">
          <section className="recent-work-panel">
            <h2>Recent Work</h2>
            <ul className="recent-work-list">
              <li>Product redesign for a client dashboard</li>
              <li>Migration of a legacy reporting workflow</li>
              <li>Prototype for a new internal tool</li>
            </ul>
          </section>

          <section className="social-panel">
            <h2>Socials</h2>
            <ul className="social-list">
              {socials.map((social) => (
                <SocialLink key={social.label} {...social} />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}

function createPlaceholderImage(title: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="100%" height="100%" fill="#f3f3f3" />
      <rect x="40" y="40" width="720" height="420" rx="18" fill="#ffffff" stroke="#cccccc" stroke-width="2" />
      <rect x="70" y="90" width="240" height="20" rx="4" fill="#d9d9d9" />
      <rect x="70" y="130" width="320" height="14" rx="4" fill="#e5e5e5" />
      <rect x="70" y="180" width="210" height="140" rx="10" fill="#efefef" />
      <rect x="310" y="180" width="180" height="20" rx="4" fill="#d9d9d9" />
      <rect x="310" y="214" width="160" height="12" rx="4" fill="#e5e5e5" />
      <rect x="310" y="240" width="140" height="12" rx="4" fill="#e5e5e5" />
      <text x="70" y="392" font-family="Arial, sans-serif" font-size="28" fill="#444444">${title}</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export default App
