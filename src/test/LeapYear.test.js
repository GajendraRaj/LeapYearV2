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

    it('should display not leap year output, if user input divisible by 100 but not by 400', () => {
        let input = wrapper.find('input');
        input.simulate('change', {target: {value: 1700}});

        const label = wrapper.find('label').text(); 
        expect(label).toBe('Not a Leap year');
    });

    it('should display leap year output, if user input divisible by 100 and 400', () => {
        let input = wrapper.find('input');
        input.simulate('change', {target: {value: 2000}});

        const label = wrapper.find('label').text(); 
        expect(label).toBe('Leap year');
    });

    it('should display not leap year output, if user input divisible by 100 and 4', () => {
        let input = wrapper.find('input');
        input.simulate('change', {target: {value: 2021}});

        const label = wrapper.find('label').text(); 
        expect(label).toBe('Not a Leap year');
    });

    it('should display leap year output, if user input divisible by 4 but not by 100', () => {
        let input = wrapper.find('input');
        input.simulate('change', {target: {value: 2008}});

        const label = wrapper.find('label').text(); 
        expect(label).toBe('Leap year');
    });

    it('should return please enter valid year output, if 123 is passed', () => {
        let input = wrapper.find('input');
        input.simulate('change', {target: {value: 123}});
    
        const label = wrapper.find('label').text(); 
        expect(label).toBe('Plese enter valid year');
      });

});