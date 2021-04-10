import { fireEvent, render, waitFor } from "@testing-library/react";
import { useEffect } from "react";
import ModalContext, { useModal } from "../";
import WithTheme from "../../../test-utilities/WithTheme";

const DemoModal = () => (
  <div>
    <h1>A simple demo Modal</h1>
  </div>
);

const ContextTesterComponent = ({ open }: { open?: boolean }) => {
  const { closeModal, openModal, isOpen } = useModal();

  useEffect(() => {
    if (open) {
      openModal(<DemoModal />);
    }
  }, [open, openModal]);

  return (
    <div>
      <h1>Modal is {isOpen ? "open" : "closed"}</h1>
      <button id="open-modal" onClick={() => openModal(<DemoModal />)}>
        Open Modal
      </button>
      <button id="close-modal" onClick={() => closeModal()}>
        Close Modal
      </button>
    </div>
  );
};

const renderComponent = (props = {}) => {
  const { container } = render(
    <WithTheme>
      <ModalContext>
        <ContextTesterComponent {...props} />
      </ModalContext>
    </WithTheme>
  );
  return container;
};

describe("ModalContext", () => {
  let container: HTMLElement | null = null;
  it("renders successfully", () => {
    const container = renderComponent();
    expect(container).toBeTruthy();
  });

  describe("when openModal is called", () => {
    beforeEach(() => {
      container = renderComponent();
      const openModalButton = container.querySelector("#open-modal");

      fireEvent.click(openModalButton as HTMLElement);
    });

    it("opens the provided modal", async () => {
      await waitFor(() =>
        expect(container!.textContent).toMatch(/A simple demo Modal/)
      );
    });

    it("has the correct isOpen value", () => {
      expect(container!.textContent).toMatch(/Modal is open/);
    });
  });

  describe("when closeModal is called", () => {
    beforeEach(() => {
      container = renderComponent({ open: true });
      expect(container.textContent).toMatch(/A simple demo Modal/g);

      const closeModalButton = container.querySelector("#close-modal");

      fireEvent.click(closeModalButton as HTMLElement);
    });

    it("opens the provided modal", async () => {
      await waitFor(() =>
        expect(container!.textContent).not.toMatch(/A simple demo Modal/)
      );
    });

    it("has the correct isOpen value", async () => {
      await waitFor(() =>
        expect(container!.textContent).toMatch(/Modal is closed/)
      );
    });
  });
});
