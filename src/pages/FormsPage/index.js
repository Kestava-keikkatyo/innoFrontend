import React, { useState } from "react"
import uuid from "react-uuid"
import { QuestionModule, QuestionForm } from "../../components/QuestionForm"
import { FormContainer } from "../../components/FormContainer"

import {
  Card,
  Container,
  Divider,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
}))

/**
 * @note Page for creating forms that corporate users can fill, see the documents in Google Drive by TTK.
 * @todo Roles visibility in this section? Worker able to see forms that reference them? How to pass the object with module types with questions attached to each?
 * @todo Snackbar alert for validation!
 * @todo Fix the test form display, maybe button that "peeks" at the form?
 */
const FormsPage = () => {
  const [modules, setModules] = useState([
    { id: uuid(), type: "text" },
    { id: uuid(), type: "checkbox" },
  ])
  const [forms, setForms] = useState([
    {
      id: uuid(),
      title: "Test Form",
      pairs: [{ question: "", type: "" }],
    },
  ])
  const [titleValue, setTitleValue] = useState("")
  const [questions, setQuestions] = useState([""])

  const classes = useStyles()

  const addModule = (type) => {
    setModules([...modules, { id: uuid(), type }])
  }

  // This is ugly af, see if the behaviour for submitting the
  // child-components data and this components data can be done in a more readable manner.
  const addForm = (event) => {
    event.preventDefault()
    setForms([...forms, { id: uuid(), title: titleValue }])
  }

  const handleUserInput = (event, title) => {
    if (title) setTitleValue(event.target.value)
    else setQuestions(event.target.value)
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
          <QuestionForm addModule={addModule} />
          <form onSubmit={(event) => addForm(event)}>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              onChange={(event) => handleUserInput(event, true)}
            />
            <ul>
              {modules.map((questionModule) => {
                return (
                  <li key={questionModule.id}>
                    <label>Question: </label>
                    <input
                      type="text"
                      name="question"
                      onChange={(event) => handleUserInput(event, false)}
                    />
                    <label>Value: {questionModule.type}</label>
                  </li>
                )
              })}
            </ul>
            <input type="submit" value="Submit" />
          </form>
          <button onClick={() => console.log(modules)}>LOG</button>
        </CardContent>
      </Card>
      <Divider />
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography
            style={{ paddingTop: "1rem" }}
            align="center"
            variant="h4"
          >
            Generated forms
          </Typography>
          <ul>
            {forms.map((form) => {
              return (
                <li key={form.id}>
                  <FormContainer name={form.name}></FormContainer>
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>
    </Container>
  )
}

export default FormsPage
