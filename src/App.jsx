import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import styles from "./App.module.css"
import { useState } from "react";
function App() {
  const [displayValue, setDisplayVal] = useState("")
  let onButtonClick = (buttonText) => {
    if (buttonText ==='C'){
      setDisplayVal("");
    } else if (buttonText === '='){
      const result = eval(displayValue);
      setDisplayVal(result);

    }else {
      const newDisplayValue = displayValue + buttonText
      setDisplayVal(newDisplayValue);
      
    }
  }
  return (
    <>
      <div className={styles.calculator}>
        <p className={styles.head}>CALCULATOR</p>
        <Display displayValue = {displayValue}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
        
      </div>
    </>
  )
}

export default App
