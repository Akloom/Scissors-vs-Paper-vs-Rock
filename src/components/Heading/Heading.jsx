import styles from './Heading.module.css'
import Counter from './Counter/Counter'

const Heading = ({counterWin, counterLose, counterDraw}) => {
  return (
    <div className={styles.heading + ' ' + 'container'}>
      <h1 className={styles.title}>Rock vs Paper vs Scissors</h1>
      <Counter counterWin={counterWin} counterLose={counterLose} counterDraw={counterDraw} />
    </div>
  )
}

export default Heading