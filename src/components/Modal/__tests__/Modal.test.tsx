import { fireEvent, render } from "@testing-library/react";
import Modal from "../";
import { ModalProps } from "../types";
import WithTheme from "../../../test-utilities/WithTheme";

const renderModal = (props?: ModalProps) => {
  props = props || { id: "test", title: "test" };
  const { container } = render(
    <WithTheme>
      <Modal {...props} />
    </WithTheme>
  );
  return container;
};

describe("Modal", () => {
  it("renders successfully", () => {
    const modal = renderModal();
    expect(modal).toBeTruthy();
  });
});
