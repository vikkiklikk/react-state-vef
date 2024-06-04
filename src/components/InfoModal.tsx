import styles from "./InfoModal.module.css";

const InfoModal = () => {
  return (
    <div className={styles.infomodal}>
      <p>
        When the mouse hovers the button it updates a state variable called
        <strong> isShown</strong>. The state variable is a boolean variable
        which means that this state is either true or false. If you hover then
        its true. When the mouse exits the button area the state updates to
        false which triggers the dom to not show the InfoModal component.
      </p>
    </div>
  );
};

export default InfoModal;
