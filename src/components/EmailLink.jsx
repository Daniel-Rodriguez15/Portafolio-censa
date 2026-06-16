import { useState } from 'react'

function EmailLink({ email, className, children }) {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    if (!navigator.clipboard) return
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {})
  }

  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={handleClick}
      title="Click para escribirme o copiar el correo"
    >
      {copied ? '¡Copiado!' : children}
    </a>
  )
}

export default EmailLink
