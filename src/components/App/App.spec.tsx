import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component renders", () => {
  it("should render a div", () => {
    let container = shallow(<App />);
    expect(container.find("div").length).toEqual(1);
  });
});
