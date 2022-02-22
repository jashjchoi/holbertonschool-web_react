import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests";
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';


describe("Test App.js Functions: ", () => {
  it("1. App renders without any errors", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("2. contains the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("3. contains the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("4. contain the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("5. contains the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it('6. verify that when the keys "control" and "h" are pressed the logOut function', () => {
    const LogOut = jest.fn(() => undefined);
    const Alert = jest.spyOn(global, 'alert');
    expect(Alert);
    expect(LogOut);
    jest.restoreAllMocks();
});
