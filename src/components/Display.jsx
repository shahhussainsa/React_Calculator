import styles from "../App.module.css"

const Display= ({displayValue}) => {
  return <input className={styles.display} style={{margin: '10px'}}type="text" value={displayValue} readOnly/>
};
export default Display;