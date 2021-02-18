import React, { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateQuestion } from "../../actions/formActions"

const QuestionModule = ({ questionIndex }) => {
  const [input, setInput] = useState()
  const [option, setOption] = useState("text")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateQuestion({ name: input, type: option }, questionIndex))
  }, [input, option, questionIndex, dispatch])

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
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="text">Textfield</option>
          <option value="checkbox">Checkbox</option>
        </select>
      </div>
    </>
  )
}

export default QuestionModule
