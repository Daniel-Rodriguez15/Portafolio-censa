import { useMemo, useState } from 'react'

const ALL = 'Todos'

export function useFilteredProjects(projects) {
  const [category, setCategory] = useState(ALL)
  const [technology, setTechnology] = useState(ALL)
  const [sortOrder, setSortOrder] = useState('default')

  const categories = useMemo(() => {
    const unique = [...new Set(projects.map((p) => p.category))]
    return [ALL, ...unique]
  }, [projects])

  const technologies = useMemo(() => {
    const unique = [...new Set(projects.flatMap((p) => p.technologies))]
    return [ALL, ...unique.sort()]
  }, [projects])

  const filteredProjects = useMemo(() => {
    let result = projects.filter((project) => {
      const matchesCategory = category === ALL || project.category === category
      const matchesTech =
        technology === ALL || project.technologies.includes(technology)
      return matchesCategory && matchesTech
    })

    if (sortOrder === 'az') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortOrder === 'za') {
      result = [...result].sort((a, b) => b.title.localeCompare(a.title))
    }

    return result
  }, [projects, category, technology, sortOrder])

  return {
    category,
    setCategory,
    technology,
    setTechnology,
    sortOrder,
    setSortOrder,
    categories,
    technologies,
    filteredProjects,
  }
}

export { ALL }
