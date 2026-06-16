import { profile } from '../data/profile'
import NinjaIcon from './NinjaIcon'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.kicker}>Portafolio profesional</p>
          <h1 className={styles.title}>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.tagline}>{profile.tagline}</p>

          <div className={styles.actions}>
            <a href="#proyectos" className="btn btn--primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn--ghost">
              Contacto
            </a>
          </div>
        </div>

        <div className={styles.art} aria-hidden="true">
          <NinjaIcon size={260} className={styles.mask} />
        </div>
      </div>
    </section>
  )
}

export default Hero
