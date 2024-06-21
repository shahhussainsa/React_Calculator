import styles from "./ButtonContainer.module.css"
const ButtonContainer = ({onButtonClick}) => {

  const buttonNames = ["C",
    "/",
    "*",
    "-",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    ".",
    "1",
    "2",
    "3",
    "=",
  ];
  
  return(
    <>
      <div className={styles.buttonContainer}>
        {buttonNames.map((buttonNames) => (
          <button className={styles.button} onClick={() => onButtonClick(buttonNames)}>{buttonNames}</button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;