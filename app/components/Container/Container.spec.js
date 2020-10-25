import React from "react";
import Container from "./Container";
import Seasons from "../Seasons";
import Races from "../Races";
import { shallow } from "enzyme";

describe("Container component", () => {
  let Component;
  beforeEach(() => {
    Component = setUp();
  });

  it("render Seasons", () => {
    expect(Component.find(Seasons)).toHaveLength(1);
  });

  it("render Races", () => {
    expect(Component.find(Races)).toHaveLength(1);
  });
});

function setUp(props = {}) {
  const initialProps = {
    ...props,
  };

  return shallow(<Container {...initialProps} />);
}
