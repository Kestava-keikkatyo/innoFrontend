import React, { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeQuestion, updateQuestion } from "../../actions/formActions"
import { Divider, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import formConstants from "../../constants/formConstants"

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
  const dispatch = useDispatch()
  const questions = useSelector((state) => state.form.currentForm.questions)

  return (
    <>
      <div>
        <label className={classes.header}>Question: {questionIndex}</label>
        <input
          style={{ width: "50%" }}
          placeholder="Your question..."
          type="text"
          name="question"
          value={questions[questionIndex].name}
          onChange={(e) =>
            dispatch(
              updateQuestion(
                { ...questions[questionIndex], name: e.target.value },
                questionIndex
              )
            )
          }
        />
        <label className={classes.header}>Choose</label>
        <select
          value={questions[questionIndex].type}
          onChange={(e) =>
            dispatch(
              updateQuestion(
                { ...questions[questionIndex], type: e.target.value },
                questionIndex
              )
            )
          }
        >
          {formConstants.fieldTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.text}
            </option>
          ))}
        </select>
        <Button
          style={{ color: "red" }}
          onClick={() => dispatch(removeQuestion(questionIndex))}
        >
          Remove
        </Button>
        <Divider></Divider>
      </div>
    </>
  )
}
export default QuestionModule
