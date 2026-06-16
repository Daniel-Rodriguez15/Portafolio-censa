import { useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import NinjaIcon from './NinjaIcon'
import ThemeToggle from './ThemeToggle'
import styles from './Header.module.css'

const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

function Header() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.brand} onClick={() => setOpen(false)}>
          <NinjaIcon size={28} className={styles.brandMark} />
          {profile.name}
        </a>

        <div className={styles.actions}>
          <nav
            className={open ? `${styles.nav} ${styles.navOpen}` : styles.nav}
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  activeId === item.id
                    ? `${styles.link} ${styles.linkActive}`
                    : styles.link
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-label="Abrir menú de navegación"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className={styles.toggleBar} />
            <span className={styles.toggleBar} />
            <span className={styles.toggleBar} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
