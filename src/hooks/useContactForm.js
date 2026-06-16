import { useEffect, useRef, useState } from 'react'

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SEND_DELAY = 5000

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'El nombre es obligatorio.'
  if (!values.email.trim()) {
    errors.email = 'El correo es obligatorio.'
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = 'El correo no tiene un formato válido.'
  }
  if (!values.subject.trim()) errors.subject = 'El asunto es obligatorio.'
  if (!values.message.trim()) errors.message = 'El mensaje es obligatorio.'

  return errors
}

export function useContactForm() {
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (status === 'success') setStatus('idle')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('sending')
    timer.current = setTimeout(() => {
      setStatus('success')
      setValues(EMPTY_FORM)
    }, SEND_DELAY)
  }

  return { values, errors, status, handleChange, handleSubmit }
}
