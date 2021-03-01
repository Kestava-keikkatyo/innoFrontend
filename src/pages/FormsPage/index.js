import React from "react"
import QuestionModule from "./QuestionModule"
import { useDispatch, useSelector } from "react-redux"

import {
  Card,
  Container,
  Divider,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core"

import {
  setTitle,
  addQuestion,
  setDescription,
  submitForm,
} from "../../actions/formActions"

const initialQuestion = {
  name: "Type your question here.",
  type: "text",
}

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
  header: { color: "#A9A9A9", align: "center", padding: "1rem" },
  field: { color: "#A9A9A9" },
}))

/**
 * @use This is the Form Generator tool. Page for creating forms that corporate users can fill, see the documents in Google Drive by TTK.
 * @todo Roles visibility in this section? Worker able to see forms that reference them? How to pass the object with module types with questions attached to each?
 * @todo Fix the test form display, maybe button that "peeks" at the form?
 */
const FormsPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { currentForm } = useSelector((state) => state.form)

  const questions = currentForm.questions

  const addForm = (event) => {
    event.preventDefault()
    dispatch(submitForm(currentForm))
  }

  return (
    <Container>
      <Typography style={{ paddingTop: "1rem" }} align="center" variant="h4">
        Forms
      </Typography>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography
            style={{ paddingTop: "1rem" }}
            align="center"
            variant="h4"
          >
            Generation tool
          </Typography>
          <Typography style={{ padding: "1rem" }} variant="h6" align="center">
            Add modules attached to questions:
          </Typography>

          <button onClick={() => dispatch(addQuestion(initialQuestion))}>
            Add Module +
          </button>
          <form
            onSubmit={(e) =>
              addForm(e, currentForm.title, currentForm.description)
            }
          >
            <label className={classes.header}>Title: </label>
            <input
              className={classes.field}
              type="text"
              name="title"
              value={currentForm.title}
              onChange={({ target }) => dispatch(setTitle(target.value))}
            />
            <label className={classes.header}>Description: </label>
            <input
              type="text"
              name="title"
              value={currentForm.description}
              onChange={({ target }) => dispatch(setDescription(target.value))}
            />
            <div>
              {questions.map((e, i) => (
                <QuestionModule key={i} questionIndex={i} />
              ))}
            </div>
            <input type="submit" value="Submit" />
          </form>
        </CardContent>
      </Card>
      <Divider />
    </Container>
  )
}

export default FormsPage
