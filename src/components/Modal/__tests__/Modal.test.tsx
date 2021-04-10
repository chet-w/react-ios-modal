import { render } from "@testing-library/react";
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

  it("has the correct mobile styling", () => {
    const background = renderModal().firstElementChild as HTMLElement;
    const styles = getComputedStyle(background);
    expect(styles).toMatchSnapshot();
  });
});
