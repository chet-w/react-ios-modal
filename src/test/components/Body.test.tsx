import { render } from "@testing-library/react";
import Body from "../../components/Body";
import WithTheme from "../utils/WithTheme";

const renderBody = (children?: JSX.Element[] | JSX.Element | string) => {
  const { container } = render(
    <WithTheme>
      <Body>{children}</Body>
    </WithTheme>
  );
  return container;
};

describe("Body", () => {
  it("renders successfully", () => {
    const body = renderBody();
    expect(body).toBeTruthy();
  });

  describe("when there is content passed to the body", () => {
    it("renders the content", () => {
      const body = renderBody(<div>some content</div>);
      expect(body.innerHTML).toMatch(/<div>some content<\/div>/);
    });
  });

  describe("when there is text content passed to the body", () => {
    it("renders the content", () => {
      const body = renderBody("some text content");
      expect(body.innerHTML).toMatch(/some text content/);
    });
  });
});
