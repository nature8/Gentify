import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import CountryFlag from 'react-country-flag';

const Country = () => {
    const [value, setValue] = useState(null);
    const options = countryList().getData().map(country => ({
      label: (
        <div className="flex items-center">
          <CountryFlag countryCode={country.value} svg className="mr-2" />
          {country.label}
        </div>
      ),
      value: country.value,
    }));
  
    const handleChange = (value) => {
      setValue(value);
    };
  
    return (
      <div className="w-60">
        <Select
          options={options}
          value={value}
          onChange={handleChange}
          placeholder={<div className="  flex items-center">
          <CountryFlag countryCode="US" svg className="mr-2" />United States</div>}
          className="text-black"
          menuPlacement='auto'
        />
      </div>
    );
  };
  
  export default Country;