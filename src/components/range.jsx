import React, { useState } from 'react';
import '../app/globals.css'; 

const RangeSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const marks = [];
  for (let i = 0; i <= 100; i += 10) {
    marks.push(i);
  }

  return (
    <div className="w-full relative mr-10 -mt-4">
      <input
        type="range"
        min="0"
        max="100"
        step="10"
        value={value}
        onChange={handleChange}
        className="w-full h-5 bg-gray-200 appearance-none rounded-full  slider-thumb"
      />
      <div className="flex justify-between w-full absolute top-6">
        {marks.map((mark) => (
          <span key={mark} className="transform -translate-x-1/2  text-base text-green-500">
            {mark}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RangeSlider;

