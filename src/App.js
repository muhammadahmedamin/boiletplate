import React from 'react';
import Input from './components/input';
import SelectComponent from './components/select drop down';
import CustomButton from './components/button';
import CustomIconButton from './components/iconButton';
import DynamicTable from './components/dynamic table';
import CustomSwitch from './components/switch';
// import CustomDatePicker from './components/Datepicker';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  // Add more options as needed
];

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
  // Add more columns as needed
];

const data = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  // Add more data rows as needed
];

function App() {
  return (
    <div>
      <Input label="Input" />
      <SelectComponent label="Select" options={options} />
      <CustomButton variant="contained" color="primary">
        Button
      </CustomButton>
      <CustomIconButton color="primary">
        {/* Add your icon here */}
      </CustomIconButton>
      <DynamicTable data={data} columns={columns} />
      <CustomSwitch />
      {/* <CustomDatePicker label="Date Picker" /> */}
    </div>
  );
}

export default App;
