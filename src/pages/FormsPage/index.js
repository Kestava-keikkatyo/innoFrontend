import React from "react"
import QuestionModule from "./QuestionModule"
import { useDispatch, useSelector } from "react-redux"

import {
  Button,
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
    display: "grid",
  },
  header: {
    margin: theme.spacing(2, 0),
    fontSize: 15,
    color: "#A9A9A9",
    align: "center",
    display: "grid-inline",
  },
  field: {
    margin: theme.spacing(2, 0),
    display: "grid",
    width: "60%",
  },
}))

/**
 * @use This is the Form Generator tool. Page for creating forms that corporate users can fill, see the documents in Google Drive by TTK.
 * @todo Roles visibility in this section? Worker able to see forms that reference them? How to pass the object with module types with questions attached to each?
 * @todo Fix the test form display, maybe button that "peeks" at the form?
 * @todo Could user be able to import a ready made template from a pdf and the tool automatically generates a form?
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
      <Typography align="center" variant="h4">
        Forms
      </Typography>
      <form
        onSubmit={(e) => addForm(e, currentForm.title, currentForm.description)}
      >
        <input
          style={{ align: "left", display: "grid" }}
          type="submit"
          value="Submit"
        />
        <Card className={classes.card} variant="outlined">
          <CardContent align="center">
            <Typography align="center" variant="h4">
              Generation tool
            </Typography>
            <Typography style={{ padding: "1rem" }} variant="h6" align="center">
              Add modules attached to questions:
            </Typography>
            <label className={classes.header}>Form Title</label>
            <input
              className={classes.field}
              placeholder="Your title..."
              type="text"
              name="title"
              value={currentForm.title}
              onChange={({ target }) => dispatch(setTitle(target.value))}
            />
            <input
              className={classes.field}
              placeholder="Your description..."
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
            <Button onClick={() => dispatch(addQuestion(initialQuestion))}>
              Add Question
            </Button>
          </CardContent>
        </Card>
      </form>
      <Divider />
    </Container>
  )
}

export default FormsPage
