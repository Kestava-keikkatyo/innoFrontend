import React, { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateQuestion } from "../../actions/formActions"
import { Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(1, 0),
    color: "#A9A9A9",
    align: "center",
    padding: "1rem",
    display: "inline-grid",
  },
}))

/**
 * Module for displaying and handling user input in the form generation tool
 * @param {int} questionIndex - Index for the question in the array in the parent state.
 * @todo Add radiobutton group, radiobutton group inline, checkbox group
 */
const QuestionModule = ({ questionIndex }) => {
  const classes = useStyles()
  const [input, setInput] = useState()
  const [option, setOption] = useState("text")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateQuestion({ name: input, type: option }, questionIndex))
  }, [input, option, questionIndex, dispatch])

  return (
    <>
      <div>
        <label className={classes.header}>Question: </label>
        <input
          style={{ width: "50%" }}
          placeholder="Your question..."
          type="text"
          name="question"
          onChange={(e) => setInput(e.target.value)}
        />
        <label className={classes.header}>Choose</label>
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="text">Textfield</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio Button</option>
        </select>
        <Divider></Divider>
      </div>
    </>
  )
}
export default QuestionModule
