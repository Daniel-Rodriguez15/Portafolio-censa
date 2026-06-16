import styles from './AboutSection.module.css'

function AboutSection({ profile }) {
  const initials = profile.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className={styles.about}>
      <div className={styles.avatar}>
        {profile.avatarUrl ? (
          <img src={profile.avatarUrl} alt={`Foto de ${profile.name}`} />
        ) : (
          <span aria-hidden="true">{initials}</span>
        )}
      </div>

      <div className={styles.bio}>
        {profile.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default AboutSection
