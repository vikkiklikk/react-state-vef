import "./App.css";
import InfoButton from "./components/InfoButton";
import Modal from "./components/Modal";
import Module from "./components/Module";
import OpenModal from "./components/OpenModal";

function App() {
  return (
    <>
      <Module />
      <InfoButton />
      <br></br>
      <br></br>
      <OpenModal />
      <Modal />
    </>
  );
}

export default App;
