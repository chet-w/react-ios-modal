import Modal from "./components/Modal";

function App() {
  return (
    <div className="app">
      <button type="button">asdas</button>
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
    </div>
  );
}

export default App;
