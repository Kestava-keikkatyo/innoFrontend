import React, { useEffect } from 'react';
import { useState } from 'react';

const QuestionModule = ({update, questionIndex}) => {
  const [input, setInput] = useState();
  const [option, setOption] = useState("text")

  // const onInputChange = (e) => {
  //   setQuestions()
  // }

  useEffect(() => {
    update({name: input, type: option}, questionIndex)
  }, [input, option, questionIndex, update])

  // console.log(input);
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