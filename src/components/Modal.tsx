import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={styles.modalcontainer}>
      <div className={styles.title}>
        <h3>Modal Title</h3>
      </div>
      <div className={styles.content}>This is the modal content.</div>
      <div className={styles.buttonexit}>
        <button>Close modal</button>
      </div>
    </div>
  );
};
export default Modal;
