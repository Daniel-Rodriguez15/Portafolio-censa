import styles from './ProjectFilters.module.css'

function ProjectFilters({
  categories,
  technologies,
  category,
  technology,
  sortOrder,
  onCategoryChange,
  onTechnologyChange,
  onSortChange,
}) {
  return (
    <div className={styles.filters}>
      <label className={styles.field}>
        <span className={styles.label}>Categoría</span>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className={styles.select}
        >
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Tecnología</span>
        <select
          value={technology}
          onChange={(e) => onTechnologyChange(e.target.value)}
          className={styles.select}
        >
          {technologies.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Orden</span>
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
          className={styles.select}
        >
          <option value="default">Por defecto</option>
          <option value="az">Título (A–Z)</option>
          <option value="za">Título (Z–A)</option>
        </select>
      </label>
    </div>
  )
}

export default ProjectFilters
