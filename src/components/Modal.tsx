import styles from "./Modal.module.css";
import { IoIosWarning } from "react-icons/io";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalcontainer} onClick={onClose}>
      <div className={styles.modalcontent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.title}>
          <h3>Modal Title</h3>
        </div>
        <div className={styles.content}>
          <p>This is the tiny modal content.</p>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoIosWarning />
            <strong>Do not press K</strong>
            <IoIosWarning />
          </div>
        </div>
        <div>
          <button onClick={onClose} className={styles.buttonexit}>
            Close modal
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
