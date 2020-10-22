import React from "react";
import Drivers from "./Drivers";
import { shallow } from "enzyme";

describe("Drivers component", () => {
  it("rendered", () => {
    const Component = setUp();
    expect(Component).toBeTruthy();
  });
});

function setUp(props = {}) {
  const initialProps = {
    ...props,
    year: "",
  };

  return shallow(<Drivers {...initialProps} />);
}
