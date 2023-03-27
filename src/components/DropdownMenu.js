import React, { useState } from 'react';

import './DropdownMenu.css';

const fakeData = [
  { id: 10, name: 'Option 1' },
  { id: 20, name: 'Option 2' },
  { id: 30, name: 'Option 3' },
  { id: 40, name: 'Option 4' },
  { id: 50, name: 'Option 5' }
];

function DropdownMenu(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleOptionSelect = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index]
    const option =  el.getAttribute('id');  
    console.log(option)

    setSelectedOption(e.target.value);
  }
  
  return (
    <div>
      <select className="dropdown-menu" onChange={(e) => handleOptionSelect(e)}>
        <option value="">Select an option</option>
        {props.movies.map( (option,i) => (
          <option  key = {i} id={option.id} value={option.title}>{option.title}</option>
        ))}
      </select>
      {selectedOption && (
        <p>You have selected: {selectedOption}</p>
      )}
    </div>
  );
}

export default DropdownMenu;
