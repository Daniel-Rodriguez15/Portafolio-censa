import { useEffect, useState } from 'react'
import { getProjects } from '../services/projects.service'

export function useProjects() {
  const [projects, setProjects] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    async function load() {
      setStatus('loading')
      setError(null)

      try {
        const data = await getProjects()
        if (!active) return
        setProjects(data)
        setStatus('success')
      } catch (err) {
        if (!active) return
        setError(err.message)
        setStatus('error')
      }
    }

    load()

    return () => {
      active = false
    }
  }, [])

  return {
    projects,
    status,
    error,
    isLoading: status === 'loading',
    isError: status === 'error',
    isEmpty: status === 'success' && projects.length === 0,
  }
}
