import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
Enzyme.configure({ adapter: new Adapter() });

describe("a test", () => {
  it("should work", () => {
    const wrapper = mount(
      <div>hello!</div>
    );

    expect(wrapper.exists('#does-not-exist')).toBe(false);
  });
});