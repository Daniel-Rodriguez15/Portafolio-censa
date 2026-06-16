import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import SkillList from './components/SkillList'
import ProjectsSection from './components/ProjectsSection'
import ContactForm from './components/ContactForm'
import EmailLink from './components/EmailLink'
import ScrollNinja from './components/ScrollNinja'
import { profile } from './data/profile'
import { skills } from './data/skills'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section id="sobre-mi" className="section">
          <div className="container">
            <h2 className="section__title">Sobre mí</h2>
            <p className="section__subtitle">
              Quién soy, qué me interesa y hacia dónde apunto profesionalmente.
            </p>
            <AboutSection profile={profile} />
          </div>
        </section>

        <section id="habilidades" className="section">
          <div className="container">
            <h2 className="section__title">Habilidades</h2>
            <p className="section__subtitle">
              Tecnologías y capacidades con las que trabajo a diario.
            </p>
            <SkillList skills={skills} />
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="container">
            <h2 className="section__title">Proyectos</h2>
            <p className="section__subtitle">
              Filtrá por categoría o tecnología, y ordená la lista a tu gusto.
            </p>
            <ProjectsSection />
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="container">
            <h2 className="section__title">Contacto</h2>
            <p className="section__subtitle">
              ¿Tenés una propuesta o querés que charlemos? Escribime.
            </p>
            <ContactForm />
            <p style={{ marginTop: '2rem', color: 'var(--color-text-muted)' }}>
              También me encontrás en{' '}
              <EmailLink email={profile.contact.email}>
                {profile.contact.email}
              </EmailLink>{' '}
              y en{' '}
              <a href={profile.contact.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollNinja />
    </>
  )
}

export default App
