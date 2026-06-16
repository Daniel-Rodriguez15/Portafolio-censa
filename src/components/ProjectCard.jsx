import styles from './ProjectCard.module.css'

function ProjectCard({ project }) {
  const {
    title,
    category,
    level,
    description,
    technologies,
    repositoryUrl,
    demoUrl,
    demoLabel,
  } = project

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.badges}>
          <span className={styles.badge}>{category}</span>
          <span className={`${styles.badge} ${styles.badgeLevel}`}>{level}</span>
        </div>
      </header>

      <p className={styles.description}>{description}</p>

      <ul className={styles.tech}>
        {technologies.map((tech) => (
          <li key={tech} className={styles.techItem}>
            {tech}
          </li>
        ))}
      </ul>

      <footer className={styles.actions}>
        {repositoryUrl && (
          <a
            className="btn btn--ghost"
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            Código
          </a>
        )}
        {demoUrl && (
          <a
            className="btn btn--primary"
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            {demoLabel || 'Ver demo'}
          </a>
        )}
      </footer>
    </article>
  )
}

export default ProjectCard
