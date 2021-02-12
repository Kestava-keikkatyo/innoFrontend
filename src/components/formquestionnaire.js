import React, { useState } from "react"

export const QuestionForm = ({ addModule }) => {
  const [option, setOption] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(option)
    addModule(option)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Valinta</label>
      <select
        value={option}
        onChange={(event) => setOption(event.target.value)}
      >
        <option value="text">Tekstikenttä</option>
        <option value="checkbox">Checkbox</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  )
}

export const QuestionModule = ({ type }) => {
  return (
    <div>
      <label>Tämä on moduuli</label>
      <input type={type} />
    </div>
  )
}
