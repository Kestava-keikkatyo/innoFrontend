import React, { useState } from 'react';
import { addAgreementCodes } from '../../services/codeService';

const NewCodeGeneration: React.FC = () => {
  const [numberOfCodes, setNumberOfCodes] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfCodes(parseInt(event.target.value, 10));
  };

  const handleButtonClick = (num: number) => {
    setNumberOfCodes(num);
  };

  const handleSubmit = async () => {
    if (numberOfCodes > 0) {
      await addAgreementCodes(numberOfCodes);
    } else {
      alert('Please enter a valid number of agreement codes');
    }
  };

  return (
    <div>
      <h1>Create Agreement Codes</h1>
      <input
        type="number"
        min="1"
        max="100"
        value={numberOfCodes}
        onChange={handleChange}
      />
      <div>
        <button onClick={() => handleButtonClick(10)}>10 Codes</button>
        <button onClick={() => handleButtonClick(20)}>20 Codes</button>
        <button onClick={() => handleButtonClick(50)}>50 Codes</button>
        <button onClick={() => handleButtonClick(100)}>100 Codes</button>
      </div>
      <button onClick={handleSubmit}>Create Codes</button>
    </div>
  );
};

export default NewCodeGeneration;
