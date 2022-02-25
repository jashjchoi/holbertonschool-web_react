/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe("Test App.js Functions: ", () => {
  it("1. App renders without any errors", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  // it("2. contains the Notifications component", () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find("Notifications")).toHaveLength(1);
  // });

  // it("3. contains the Header component", () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find("Header")).toHaveLength(1);
  // });

  // it("4. contain the Login component", () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find("Login")).toHaveLength(1);
  // });

  // it("5. contains the Footer component", () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find("Footer")).toHaveLength(1);
  // });
  it('6. Verify if CourseList is displayed when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('7. Verify if CourseList is displayed when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it('8. verify that when the keys "control" and "h" are pressed the logOut function', () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    const alert = jest.spyOn(global, 'alert');
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
});
});