import { useScrollProgress } from '../hooks/useScrollProgress'
import NinjaIcon from './NinjaIcon'
import styles from './ScrollNinja.module.css'

function ScrollNinja() {
  const progress = useScrollProgress()

  const top = `calc(12vh + ${progress} * 70vh)`

  return (
    <div className={styles.ninja} style={{ top }} aria-hidden="true">
      <NinjaIcon size={44} tailsClassName={styles.tails} />
    </div>
  )
}

export default ScrollNinja
