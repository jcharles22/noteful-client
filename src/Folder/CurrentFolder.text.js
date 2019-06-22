import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CurrentFolder from './CurrentFolder';


describe(`CurrentFolder component`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CurrentFolder />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});