import styles from './RequestState.module.css'

export function Loader({ label = 'Cargando…' }) {
  return (
    <div className={styles.state} role="status">
      <span className={styles.spinner} aria-hidden="true" />
      <p>{label}</p>
    </div>
  )
}

export function ErrorState({ message = 'Ocurrió un error.' }) {
  return (
    <div className={`${styles.state} ${styles.error}`} role="alert">
      <p>⚠️ {message}</p>
    </div>
  )
}

export function EmptyState({ message = 'No hay resultados.' }) {
  return (
    <div className={styles.state}>
      <p>{message}</p>
    </div>
  )
}
