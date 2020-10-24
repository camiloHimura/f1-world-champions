import React from "react";
import Info from "./Info";
import Icon from "../Icon";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../utils/test";
const initialProps = { name: "test", onClick: jest.fn() };

it("render text and icon", () => {
  const text = "text test";
  const icon = "error";

  const Component = setUp({ text, icon });
  expect(Component.find(Icon)).toHaveLength(1);
  expect(Component.find(Icon).prop("name")).toBe(icon);
  expect(findByTestAttr(Component, "text").text()).toBe(text);
});

function setUp(props = {}) {
  return shallow(<Info {...initialProps} {...props} />);
}
