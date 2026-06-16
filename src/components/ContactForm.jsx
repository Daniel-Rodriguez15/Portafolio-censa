import { useContactForm } from '../hooks/useContactForm'
import styles from './ContactForm.module.css'

const FIELDS = [
  { name: 'name', label: 'Nombre', type: 'text', as: 'input' },
  { name: 'email', label: 'Correo', type: 'email', as: 'input' },
  { name: 'subject', label: 'Asunto', type: 'text', as: 'input' },
  { name: 'message', label: 'Mensaje', type: 'text', as: 'textarea' },
]

function ContactForm() {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm()

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {FIELDS.map((field) => (
        <div key={field.name} className={styles.field}>
          <label htmlFor={field.name} className={styles.label}>
            {field.label}
          </label>

          {field.as === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              rows={5}
              value={values[field.name]}
              onChange={handleChange}
              className={styles.control}
              aria-invalid={Boolean(errors[field.name])}
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={values[field.name]}
              onChange={handleChange}
              className={styles.control}
              aria-invalid={Boolean(errors[field.name])}
            />
          )}

          {errors[field.name] && (
            <span className={styles.error}>{errors[field.name]}</span>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="btn btn--primary"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </button>

      {status === 'success' && (
        <p className={styles.success} role="status">
          ¡Mensaje enviado! Gracias por escribir.
        </p>
      )}
    </form>
  )
}

export default ContactForm
