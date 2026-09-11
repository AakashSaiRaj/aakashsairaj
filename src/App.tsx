import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Menu, X } from 'lucide-react'
import { certifications, experience, profile, projects, skillGroups } from './data'

const nav = ['About', 'Experience', 'Capabilities', 'Credentials', 'Projects']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id))
    }, { rootMargin: '-45% 0px -45% 0px' })
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (name: string) => {
    document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Back to top">ASR<span>.</span></a>
        <nav aria-label="Primary navigation">
          {nav.map((item) => <button className={active === item.toLowerCase() ? 'active' : ''} onClick={() => scrollTo(item)} key={item}>{item}</button>)}
        </nav>
        <a className="availability" href="#contact"><i /> Available for a conversation</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      {menuOpen && <div className="mobile-nav">{nav.map((item) => <button onClick={() => scrollTo(item)} key={item}>{item}</button>)}</div>}

      <section id="top" className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orbit orbit-one" aria-hidden="true" />
        <figure className="orbit orbit-two portrait-orbit">
          <img src="./images/aakash-hero-profile.png" alt="Aakash Sai Raj in profile" />
        </figure>
        <p className="eyebrow appear">01 / SOFTWARE ENGINEER <span>•</span> {profile.location}</p>
        <div className="hero-copy">
          <h1><span className="line reveal">Aakash</span><span className="line reveal delay">Sai Raj<span className="period">.</span></span></h1>
          <p className="hero-intro appear">I build dependable software with a systems mindset, where the invisible details matter as much as the visible outcome.</p>
        </div>
        <div className="hero-foot appear">
          <a className="round-link" href="#experience"><ArrowDownRight /> <span>Explore<br />my work</span></a>
          <p>Currently building at<br /><strong>Amazon Kindle</strong></p>
          <div className="hero-links"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a></div>
        </div>
        <div className="scroll-mark"><span>SCROLL TO DISCOVER</span><i /></div>
      </section>

      <section id="about" className="about section-pad">
        <p className="section-index">02 / ABOUT</p>
        <div className="about-statement"><p className="lead">Good engineering is equal parts <em>curiosity,</em> rigor, and care for the people on the other side of the system.</p><p className="body-copy">I am a software engineer who enjoys untangling complex problems and turning them into calm, durable experiences. My work has moved from cloud deployment systems to Kindle, always with a focus on learning deeply and making a meaningful contribution.</p></div>
        <div className="principles"><span>THINK IN SYSTEMS</span><span>BUILD WITH INTENT</span><span>KEEP LEARNING</span></div>
      </section>

      <section id="experience" className="experience section-pad">
        <p className="section-index">03 / EXPERIENCE</p>
        <div className="section-heading"><h2>A few places<br />I’ve learned to <em>ship.</em></h2><p>A growing career shaped by high-scale products, thoughtful teams, and a real appetite for hard problems.</p></div>
        <div className="roles">
          {experience.map((role, index) => <article className="role" key={role.company}><span className="role-number">0{index + 1}</span><p className="role-period">{role.period}</p><div><p className="role-company">{role.company}</p><h3>{role.title}</h3></div><p className="role-copy">{role.copy}</p><div className="tags">{role.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}
        </div>
      </section>

      <section id="capabilities" className="capabilities section-pad">
        <p className="section-index">04 / CAPABILITIES</p>
        <div className="section-heading"><h2>Engineering with<br /><em>range</em> and depth.</h2><p>A concise snapshot of the areas that shape how I approach software today.</p></div>
        <div className="skills-grid">{skillGroups.map((group) => <article className="skill-card" key={group.number}><span>{group.number}</span><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
      </section>

      <section id="credentials" className="credentials section-pad">
        <p className="section-index">05 / CREDENTIALS</p>
        <div className="section-heading"><h2>Proof of the<br /><em>practice.</em></h2><p>Selected certifications and credentials across cloud, Kubernetes, infrastructure, and AI.</p></div>
        <div className="credential-summary"><span>17 VERIFIED CREDENTIALS</span><span>AWS · CNCF · HASHICORP · ANTHROPIC</span><a href="https://www.credly.com/users/aakashsairaj" target="_blank" rel="noreferrer">View Credly profile <ArrowUpRight /></a></div>
        <div className="credential-grid">
          {certifications.map((credential, index) => <a className="credential-card" key={`${credential.title}-${index}`} href={credential.url} target="_blank" rel="noreferrer" aria-label={`Verify ${credential.title}`}>
            <div className={`credential-mark ${credential.image ? '' : 'credential-mark-text'}`}>{credential.image ? <img src={credential.image} alt="" loading="lazy" /> : <span>{credential.issuer === 'Anthropic' ? 'AI' : '✓'}</span>}</div>
            <div className="credential-copy"><p>{credential.type}</p><h3>{credential.title}</h3><span>{credential.issuer}<ArrowUpRight /></span></div>
          </a>)}
        </div>
      </section>

      <section id="projects" className="projects section-pad">
        <p className="section-index">06 / PROJECTS</p>
        <div className="project-list">{projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.title}><div className="project-art" aria-hidden="true"><span>{index === 0 ? '{ }' : '↗'}</span><i /><i /><i /></div><div className="project-details"><p>{project.type}</p><h3>{project.title}</h3><p className="body-copy">{project.copy}</p><a href={index === 1 ? profile.github : '#contact'} target={index === 1 ? '_blank' : undefined} rel="noreferrer">{project.action} <ArrowUpRight /></a></div></article>)}</div>
      </section>

      <section className="education section-pad">
        <p className="section-index">07 / EDUCATION</p>
        <div className="education-row"><p>2019 — 2023</p><div><h2>GITAM Deemed University</h2><p>B.Tech, Computer Science & Engineering · 9.82 / 10.00</p></div><p className="award">Presidential Gold Medalist<br />Class of 2023</p></div>
      </section>

      <section className="now section-pad"><p className="section-index">08 / NOW</p><div><p className="now-label">CURRENT FOCUS</p><h2>Building, learning,<br />and staying <em>curious.</em></h2><p className="body-copy">Use this space to share the ideas, technologies, or questions currently holding your attention.</p></div></section>

      <footer id="contact" className="contact">
        <p className="section-index">09 / CONTACT</p>
        <h2>Let’s make<br />something <em>useful.</em></h2>
        <a className="email-link" href="mailto:hello@aakashsairaj.com">hello@aakashsairaj.com <ArrowUpRight /></a>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Aakash Sai Raj</p><div><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></div><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  )
}

export default App
