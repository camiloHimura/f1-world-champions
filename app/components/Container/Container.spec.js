import React from "react";
import Container from "./Container";
import { shallow } from "enzyme";

describe("Container component", () => {
  it("rendered", () => {
    const Component = setUp();
    expect(Component).toBeTruthy();
  });
});

function setUp(props = {}) {
  const initialProps = {
    ...props,
  };

  return shallow(<Container {...initialProps} />);
}
