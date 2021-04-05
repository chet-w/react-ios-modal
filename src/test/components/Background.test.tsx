import { render } from "@testing-library/react";
import { AnimatePresence } from "framer-motion";
import Background from "../../components/Background";
import WithTheme from "../utils/WithTheme";

const renderBackground = (props = {}) => {
  const { container } = render(
    <WithTheme>
      <AnimatePresence>
        <Background {...props} />
      </AnimatePresence>
    </WithTheme>
  );
  return container;
};

describe("Background", () => {
  it("renders successfully", () => {
    const background = renderBackground();
    expect(background).toBeTruthy();
  });

  describe("when it's a mobile device", () => {
    it("has the correct mobile styling", () => {
      const background = renderBackground({ isMobile: true })
        .firstElementChild as HTMLElement;
      const styles = getComputedStyle(background);
      expect(styles).toMatchSnapshot();
    });
  });

  describe("when it's not a mobile device", () => {
    it("has the correct non-mobile styling", () => {
      const background = renderBackground({ isMobile: false })
        .firstElementChild as HTMLElement;
      const styles = getComputedStyle(background);
      expect(styles).toMatchSnapshot();
    });
  });
});
