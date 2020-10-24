import React from "react";
import Races from "./Races";
import { shallow } from "enzyme";
import Info from "../Info";
import Loader from "../Loader";
import TableRaces from "../TableRaces";

let mockData = [];
let mockLoading = true;
let mockError = null;
jest.mock("../../hooks/useFetchGet", () => {
  return jest.fn(() => ({
    data: mockData,
    error: mockError,
    loading: mockLoading,
  }));
});

describe("Races component", () => {
  beforeEach(() => {});

  it("data is loading, render Loader", () => {
    const Component = setUp();
    expect(Component.find(Loader)).toHaveLength(1);
    expect(Component.find(TableRaces)).toHaveLength(0);
  });

  it("data was loaded, render TableRaces", () => {
    mockData = [];
    mockLoading = false;
    const Component = setUp();
    expect(Component.find(Loader)).toHaveLength(0);
    expect(Component.find(TableRaces)).toHaveLength(1);
  });

  it("no data to show", () => {
    mockData = null;
    mockError = true;
    mockLoading = false;
    const Component = setUp();
    const infoComponent = Component.find(Info);

    expect(Component.find(Loader)).toHaveLength(0);
    expect(Component.find(TableRaces)).toHaveLength(0);
    expect(infoComponent).toHaveLength(1);
    expect(infoComponent.prop("icon")).toBe("error");
    expect(infoComponent.prop("text")).toBe("No data available");
  });
});

function setUp(props = {}) {
  const initialProps = {
    ...props,
    year: "",
  };

  return shallow(<Races {...initialProps} />);
}
