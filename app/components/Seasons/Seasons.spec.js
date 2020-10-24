import React from "react";
import Seasons from "./Seasons";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils/test";

describe("Seasons component", () => {
  let Component;
  const spySetYear = jest.fn();
  const aciveId = "test Value";
  const spySetAciveId = jest.fn();
  React.useState = (src) => [aciveId, spySetAciveId];

  beforeEach(() => {
    spySetYear.mockClear();
    spySetAciveId.mockClear();
    Component = setUp({ setYear: spySetYear });
  });

  it("render title", () => {
    expect(findByTestAttr(Component, "title").text()).toBe("Seasons");
  });

  it("render options", () => {
    expect(findByTestAttr(Component, "option")).toHaveLength(11);
  });

  it("options was clicled, setYear ans setAciveId are called", () => {
    const index = 0;

    findByTestAttr(Component, "option")
      .at(index)
      .find("span")
      .simulate("click");

    expect(spySetYear).toHaveBeenCalledWith("2005");
    expect(spySetAciveId).toHaveBeenCalledWith(`info-${index}`);
  });
});

function setUp(props = {}) {
  return shallow(<Seasons {...props} />);
}
