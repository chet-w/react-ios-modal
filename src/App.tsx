import Modal from "./components/Modal";
import { useModal } from "./components/ModalContext";

function App() {
  const DemoModal = () => (
    <Modal
      title="A demo modal"
      closable
      onClose={(event) => console.log("onClose!")}
      clickOutsideToClose
      footerOptions={[
        {
          content: "OK",
          onClick: (event) => console.log(event)
        },
        {
          content: "Maybe",
          onClick: (event) => console.log(event)
        },
        {
          content: "Cancel",
          onClick: (event) => console.log(event)
        }
      ]}
    >
      <p>Content!</p>
    </Modal>
  );

  const { openModal } = useModal();

  return (
    <div className="app" style={{ background: "red", height: "100vh" }}>
      <button type="button" onClick={() => openModal(<DemoModal />)}>
        asdas
      </button>
    </div>
  );
}

export default App;
