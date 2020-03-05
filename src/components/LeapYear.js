import React, { useState } from 'react';

function LeapYear() {
    const [year, setYear] = useState(0);

    const inputChange = (e) => {
        setYear(e.target.value); 
    }
    
    const checkLeapYear = (year) => {
        if(year && year.toString().length > 3 && year.toString().length < 5) {
            const isLeapYear = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
            return isLeapYear ? 'Leap year' : 'Not a Leap year';
        }
        return year > 0 ? 'Plese enter valid year' : '';
    }
    
    return (
        <div>
            <div>
                Enter year : <input 
                    type='number'
                    placeholder='Enter a year' 
                    value={year}
                    onChange={inputChange} />
            </div>
            <label>{checkLeapYear(year)}</label>
        </div>
    );
}

export default LeapYear;