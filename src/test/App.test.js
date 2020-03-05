import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render heading', () => {
    expect(wrapper.find('h1').text()).toBe('Check Leap Year');
  })

});
