import styles from "./InfoModal.module.css";

const InfoModal = () => {
  return (
    <div className={styles.infomodal}>
      <p>
        When the mouse hovers the button it updates a state variable called
        <strong> isShown</strong>. The state variable is a boolean variable
        which means that this state is either true or false. The component is
        condionally rendered based on that state. The onMouseEnter event also
        changes the button message. If you then click the button you update
        another state that toggles the hover effect on and off to show the
        modal.
      </p>
    </div>
  );
};

export default InfoModal;
