import Modal from "./components/Modal";
import { useModal } from "./components/ModalContext";

function App() {
  const DemoModal = () => (
    <Modal
      id="demo-modal"
      title="A demo modal"
      closable
      onClose={() => console.log("onClose!")}
      clickOutsideToClose
    >
      <p>Whatever modal content you want</p>
    </Modal>
  );

  const { openModal } = useModal();

  return (
    <div className="app">
      <button type="button" onClick={() => openModal(<DemoModal />)}>
        Open modal
      </button>
    </div>
  );
}

export default App;
