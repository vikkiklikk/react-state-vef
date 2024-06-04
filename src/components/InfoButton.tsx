import { useState } from "react";
import InfoModal from "./InfoModal";

const InfoButton = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <p>Hover this button to recieve more information</p>
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        Hover me!
      </button>
      {isShown && <InfoModal />}
    </>
  );
};

export default InfoButton;
