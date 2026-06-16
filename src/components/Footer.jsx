import { profile } from '../data/profile'
import EmailLink from './EmailLink'
import styles from './Footer.module.css'

const YEAR = 2026

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.credit}>
          © {YEAR} {profile.name}
        </p>
        <ul className={styles.links}>
          <li>
            <EmailLink email={profile.contact.email}>Email</EmailLink>
          </li>
          <li>
            <a href={profile.contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          {profile.contact.linkedin && (
            <li>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
