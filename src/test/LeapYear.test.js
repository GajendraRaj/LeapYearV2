import React from 'react';
import { shallow } from 'enzyme';
import LeapYear from '../components/LeapYear';

describe('LeapYear Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<LeapYear />);
    });

    it('should display text field for getting year as input', () => {
        expect(wrapper.find('input')).toBeTruthy();
      })
});