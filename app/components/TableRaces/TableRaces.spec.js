import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils/test";
import Info from "../Info";

import TableRaces from "./TableRaces";

describe("Races component", () => {
  let Component;
  const race = {
    url: "url test",
    name: "name test",
    date: "date test",
    country: "country test",
    winner: {
      color: "color test",
      driverId: "driverId test",
      givenName: "givenName test",
      familyName: "familyName test",
      nationality: "nationality test",
      multipleWins: false,
    },
  };

  beforeEach(() => {
    Component = setUp({ data: [race] });
  });

  it("is not a multiple winer", () => {
    const rowRace = findByTestAttr(Component, "race").at(0);
    expect(findByTestAttr(rowRace, "header").prop("style")).toEqual({
      backgroundColor: "",
    });
  });

  it("icon: account_circle + winer name", () => {
    const rowRace = findByTestAttr(Component, "race").at(0);
    const InfoConponent = rowRace.find(Info);
    expect(InfoConponent.prop("icon")).toBe("account_circle");
    expect(InfoConponent.prop("text")).toBe(
      `${race.winner.givenName} ${race.winner.familyName} / ${race.winner.nationality}`
    );
  });

  it("link open a new tap", () => {
    const rowRace = findByTestAttr(Component, "race").at(0);
    expect(findByTestAttr(rowRace, "link").prop("target")).toBe("blank");
  });
});

function setUp(props = {}) {
  return shallow(<TableRaces {...props} />);
}
