import {
  render,
  fireEvent,
  getByTestId,
  waitFor
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Fragment, useRef } from "react";
import { useFocusTrap } from "../..";

const FocusableElements = () => (
  <Fragment>
    <button id="test-1" />
    <a href="/" id="test-2">
      Link
    </a>
    <input type="text" id="test-3" />
    <textarea id="test-4" />
    <select id="test-5" />
    <details id="test-6" />,
    <div tabIndex={1} id="test-7" />
    <div tabIndex={-1} />
  </Fragment>
);

const DemoComponent = ({
  noElements,
  withHeader
}: {
  noElements?: boolean;
  withHeader?: boolean;
}) => {
  const DemoComponentRef = useRef(null);
  useFocusTrap(DemoComponentRef);

  return (
    <div>
      <div
        ref={DemoComponentRef}
        id="test"
        aria-labelledby={withHeader ? "test_header" : undefined}
      >
        {withHeader && <header id="test_header" tabIndex={0}></header>}
        {!noElements && <FocusableElements />}
      </div>
      <button id="test-no" />
    </div>
  );
};

describe("useFocusTrap", () => {
  describe("when there are focussable elements", () => {
    let container: HTMLElement | null = null;
    beforeEach(() => {
      container = render(<DemoComponent />).container;
    });

    describe("when pressing tab normally", () => {
      it("focuses the next focusable element in the document", async () => {
        (container?.querySelector("#test-1") as HTMLElement).focus();
        userEvent.tab({});
        expect(container?.querySelector("#test-2")).toHaveFocus();
      });
    });

    describe("when pressing shift + tab when the first focussable element in the container is focussed", () => {
      beforeEach(() => {
        (container?.querySelector("#test-1") as HTMLElement).focus();
        userEvent.tab({ shift: true });
      });

      it("focuses the last focussable element in the container", () => {
        expect(container?.querySelector("#test-7")).toHaveFocus();
      });
      it("does not focus the last element in the document which is outside the container", () => {
        expect(container?.querySelector("#test-no")).not.toHaveFocus();
      });
    });

    describe("when pressing tab when the last focussable element in the container is focussed", () => {
      beforeEach(() => {
        (container?.querySelector("#test-7") as HTMLElement).focus();
        userEvent.tab();
      });

      it("focuses the first focussable element in the container", () => {
        expect(container?.querySelector("#test-1")).toHaveFocus();
      });

      it("does not focus the next element in the document which is outside the container", () => {
        expect(container?.querySelector("#test-no")).not.toHaveFocus();
      });
    });
  });

  describe("when there are no focussable elements", () => {
    let container: HTMLElement | null = null;
    beforeEach(() => {
      container = render(<DemoComponent noElements />).container;
    });

    describe("when pressing tab", () => {
      beforeEach(() => {
        userEvent.tab();
      });

      it("does not focus any element", () => {
        expect(container?.querySelector(":focus")).toBeNull();
      });

      it("does not focus the next focussable element outside the container", () => {
        expect(container?.querySelector("#test-no")).not.toHaveFocus();
      });
    });
  });

  describe("when there is a header to focus", () => {
    it("focuses the header on mount", () => {
      const { container } = render(<DemoComponent withHeader />);
      const header = container.querySelector("#test_header");
      expect(header).toHaveFocus();
    });
  });
});
