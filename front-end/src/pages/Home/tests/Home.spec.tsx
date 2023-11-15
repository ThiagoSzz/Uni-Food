import { render, screen } from "@testing-library/react";
import { Home } from "../Home";

describe("Home page", () => {
  const setup = () => {
    return render(<Home />);
  };

  it("Should match the snapshot", () => {
    const view = setup();

    expect(view.container).toMatchSnapshot();
  });

  it("Should show the Testing text on the Flexbox container", () => {
    setup();

    const testingText = screen.getByTestId("home-flexbox");

    expect(testingText).toHaveTextContent("Testing");
  });
});
