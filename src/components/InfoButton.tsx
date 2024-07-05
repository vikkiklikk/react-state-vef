import { useState } from "react";
import InfoModal from "./InfoModal";

const InfoButton = () => {
  const [isShown, setIsShown] = useState(false);
  const [hoverEffect, setHoverEffect] = useState<boolean>(true);
  const [buttonMessage, setButtonMessage] = useState<string>("Hover me!");

  const onHoverEnterHandler = () => {
    if (hoverEffect) {
      console.log("mouse enter");
      setIsShown(true);
      setButtonMessage("Click to toggle!");
    }
  };

  const onHoverExitHandler = () => {
    if (hoverEffect) {
      console.log("mouse exit");
      setIsShown(false);
      setButtonMessage("Hover me!");
    }
  };

  const onClickHandler = () => {
    console.log("clicked");
    if (hoverEffect) {
      setHoverEffect(false);
    } else setHoverEffect(true);
  };

  return (
    <>
      <p>Hover this button to recieve more information</p>
      <button
        onMouseEnter={onHoverEnterHandler}
        onMouseLeave={onHoverExitHandler}
        onClick={onClickHandler}
      >
        {buttonMessage}
      </button>
      {isShown && <InfoModal />}
    </>
  );
};

export default InfoButton;
