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
    });

    it('should display not leap year output, if user input is not evenly divisible by 400', () => {
        let input = wrapper.find('input');
        input.simulate('change', {target: {value: 2019}});

        const label = wrapper.find('label').text(); 
        expect(label).toBe('Not a Leap year');
    });

    it('should display leap year output, if user input is evenly divisible by 400', () => {
        let input = wrapper.find('input');
        input.simulate('change', {target: {value: 2000}});

        const label = wrapper.find('label').text(); 
        expect(label).toBe('Leap year');
    });

});