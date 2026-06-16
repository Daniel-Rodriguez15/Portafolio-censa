import styles from './SkillList.module.css'

function SkillList({ skills }) {
  const groups = skills.reduce((acc, skill) => {
    acc[skill.type] = acc[skill.type] ? [...acc[skill.type], skill] : [skill]
    return acc
  }, {})

  return (
    <div className={styles.groups}>
      {Object.entries(groups).map(([type, items]) => (
        <div key={type} className={styles.group}>
          <h3 className={styles.groupTitle}>{type}</h3>
          <ul className={styles.chips}>
            {items.map((skill) => (
              <li key={skill.id} className={styles.chip}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default SkillList
