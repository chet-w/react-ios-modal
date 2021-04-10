import { render, fireEvent, getByTestId } from "@testing-library/react";
import { useRef } from "react";
import { useClickOutside } from "../..";

const DemoComponent = ({ handler }: { handler: () => void }) => {
  const DemoComponentRef = useRef(null);
  useClickOutside(DemoComponentRef, handler);

  return (
    <div>
      <div
        style={{
          height: 1000,
          width: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        data-testid="background"
      />
      <div
        style={{ height: 100, width: 100 }}
        ref={DemoComponentRef}
        data-testid="target"
      />
    </div>
  );
};

describe("useClickOutside", () => {
  let handler: jest.Mock<any, any> | null = null;
  let container: HTMLElement | null = null;

  beforeEach(() => {
    handler = jest.fn();
    container = render(<DemoComponent handler={handler} />).container;
  });

  describe("when the target component is clicked", () => {
    it("does not call the callback function", () => {
      const target = getByTestId(container!, "target");
      fireEvent.click(target);
      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe("when the something outside the target component is clicked", () => {
    it("calls the callback function", () => {
      const background = getByTestId(container!, "background");
      fireEvent.click(background);
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });
});
