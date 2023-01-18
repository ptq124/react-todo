import { useDarkMode } from '../context/DarkModeContext'
import styles from './Header.module.css'
import {HiMoon, HiSun} from 'react-icons/hi'
export default function TodoHeader({filters, filter, handlefilter}){
  const {darkMode, toggleDarkMode} = useDarkMode()

  return (
    <header className={styles.header_layout}>
      <button onClick={toggleDarkMode} className={styles.dark}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      {filters.map((d, index)=>(
        <button className={`${styles.header_btn} ${filter===d && styles.selected}`} key={index} onClick={()=>handlefilter(d)}>{d}</button>
      ))}
    </header>
  )
}
