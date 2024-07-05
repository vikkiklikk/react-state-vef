import { useState } from "react";
import "./App.css";
import InfoButton from "./components/InfoButton";
import Modal from "./components/Modal";
import Module from "./components/Module";
import NoStrangersToLove from "./components/NoStrangersToLove";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <header>
        <Module />
        <InfoButton />
      </header>
      <main>
        <div>
          <button onClick={openModal}>Open Modal</button>
        </div>
        <div>
          <Modal show={showModal} onClose={closeModal} />
        </div>
        <div>
          <NoStrangersToLove />
        </div>
      </main>
    </>
  );
}

export default App;
