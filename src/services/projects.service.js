const PROJECTS_URL = '/data/projects.json'

export async function getProjects() {
  const response = await fetch(PROJECTS_URL)

  if (!response.ok) {
    throw new Error(`No se pudieron cargar los proyectos (HTTP ${response.status})`)
  }

  return response.json()
}
