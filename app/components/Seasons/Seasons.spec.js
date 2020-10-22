import React from "react";
import Seasons from "./Seasons";
import { shallow } from "enzyme";

describe("Seasons component", () => {
  it("rendered", () => {
    const Component = setUp();
    expect(Component).toBeTruthy();
  });
});

function setUp(props = {}) {
  const initialProps = {
    ...props,
    setYear: () => {},
  };

  return shallow(<Seasons {...initialProps} />);
}
