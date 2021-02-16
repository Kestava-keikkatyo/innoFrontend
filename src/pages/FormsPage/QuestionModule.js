import React from 'react';
import { useState } from 'react';

const QuestionModule = () => {
  const [input, setInput] = useState();
  const [option, setOption] = useState("text")

  console.log(input);
  return ( 
    <>
    <div>
      <label>Question: </label>
      <input
        type="text"
        name="question"
        onChange={(e) => setInput(e.target.value)}
      />
      <label style={{ padding: "1rem" }} align="center">
        Choose
      </label>
      <select
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="text">Textfield</option>
        <option value="checkbox">Checkbox</option>
      </select>
    </div>
    </>
   );
}
 
export default QuestionModule;