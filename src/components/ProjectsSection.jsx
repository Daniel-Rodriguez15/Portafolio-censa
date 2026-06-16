import { useProjects } from '../hooks/useProjects'
import { useFilteredProjects } from '../hooks/useFilteredProjects'
import ProjectCard from './ProjectCard'
import ProjectFilters from './ProjectFilters'
import { Loader, ErrorState, EmptyState } from './RequestState'
import styles from './ProjectsSection.module.css'

function ProjectsSection() {
  const { projects, isLoading, isError, error, isEmpty } = useProjects()
  const filter = useFilteredProjects(projects)

  if (isLoading) return <Loader label="Cargando proyectos…" />
  if (isError) return <ErrorState message={error} />
  if (isEmpty) return <EmptyState message="Todavía no hay proyectos publicados." />

  return (
    <>
      <ProjectFilters
        categories={filter.categories}
        technologies={filter.technologies}
        category={filter.category}
        technology={filter.technology}
        sortOrder={filter.sortOrder}
        onCategoryChange={filter.setCategory}
        onTechnologyChange={filter.setTechnology}
        onSortChange={filter.setSortOrder}
      />

      {filter.filteredProjects.length === 0 ? (
        <EmptyState message="Ningún proyecto coincide con el filtro." />
      ) : (
        <div className={styles.grid}>
          {filter.filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  )
}

export default ProjectsSection
