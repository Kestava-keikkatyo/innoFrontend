import React, { useState } from "react"
import {
  Container,
  Typography,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
}))

/**
 * @exports components/QuestionForm
 * @param {Object} addModule - props, passes module option to parent on adding a module
 * @param {Object} addForm - props, passes event to parent on submit
 * @use This component handles the questionnaire a corporate user fills to create a form for another user to fill.
 * @todo Change submit button behaviour to a regular button, keep submit for actually submitting the whole form.
 * this is a comment made from terminal.
 */
export const QuestionForm = ({ addModule, addForm }) => {
  const [option, setOption] = useState("text")

  const handleAdd = (event) => {
    event.preventDefault()
    addModule(option)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addForm(event)
  }

  return (
    <Container>
      <Typography style={{ padding: "1rem" }} variant="h6" align="center">
        Add modules attached to questions:
      </Typography>
      <form onSubmit={handleSubmit}>
        <label style={{ padding: "1rem" }} align="center">
          Choose
        </label>
        <select
          value={option}
          onChange={(event) => setOption(event.target.value)}
        >
          <option value="text">Textfield</option>
          <option value="checkbox">Checkbox</option>
        </select>
        <button onClick={handleAdd}>Add Module</button>
        <input type="submit" value="Submit" />
      </form>
    </Container>
  )
}

/**
 * @exports components/QuestionForm
 * @param {Object} type - type of answer for the module.
 */
export const QuestionModule = ({ type }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <label>Question: </label>
        <input type="text" required />
        <label>Answer type: {type}</label>
      </CardContent>
    </Card>
  )
}
