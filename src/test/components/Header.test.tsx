import { fireEvent, render } from "@testing-library/react";
import Header from "../../components/Header";
import { HeaderProps } from "../../components/Header/types";
import WithTheme from "../utils/WithTheme";

const renderHeader = (props?: HeaderProps) => {
  props = props || { id: "test", title: "test", onClose: () => {} };
  const { container } = render(
    <WithTheme>
      <Header {...props} />
    </WithTheme>
  );
  return container;
};

describe("Header", () => {
  it("renders successfully", () => {
    const header = renderHeader();
    expect(header).toBeTruthy();
  });

  describe("when a title is provided", () => {
    it("renders the title", () => {
      const header = renderHeader({ title: "My test header", id: "test" });
      expect(header).toHaveTextContent(/My test header/);
    });
  });

  describe("when an onClose function is provided", () => {
    it("calls onClose function", async () => {
      const onClose = jest.fn();
      const header = renderHeader({
        title: "My test header",
        id: "test",
        onClose
      });
      const closeButton = header.querySelector("button");
      await fireEvent.click(closeButton as HTMLButtonElement);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});
