import React, { useState } from 'react';

function LeapYear() {
    const [year, setYear] = useState(0);

    const handleInputChange = (e) => {
        setYear(e.target.value); 
    }
    
    const checkLeapYear = (year) => {
        const isLeapYear = ((year % 4 === 0) && (year % 100 !== 0)) || ((year % 100 === 0) && (year % 400 === 0)) || (year % 400 === 0);
        return isLeapYear ? 'Leap year' : 'Not a Leap year';
    }
    
    return (
        <div>
            Enter year: <input 
                type='number'
                placeholder='Enter a year'
                value={year}
                onChange={handleInputChange} />
            <label>{checkLeapYear(year)}</label>
        </div>
    );
}

export default LeapYear;