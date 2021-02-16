import React, { useState } from "react"
import uuid from "react-uuid"
import { FormContainer } from "../../components/FormContainer"

import {
  Card,
  Container,
  Divider,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core"
import QuestionModule from "./QuestionModule"

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
  const [questionCount, setQuestionCount] = useState(["",""]);
  const [forms, setForms] = useState([
    {
      id: uuid(),
      title: "Test Form",
      pairs: [{ question: "", type: "" }],
    },
  ])
  const [titleValue, setTitleValue] = useState("")

  const classes = useStyles()

  // This is ugly af, see if the behaviour for submitting the
  // child-components data and this components data can be done in a more readable manner.
  const addForm = (event) => {
    event.preventDefault()
    setForms([...forms, { id: uuid(), title: titleValue }])
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
            
          <button onClick={() => setQuestionCount([...questionCount, ""])}>
            Add Module +
          </button>
          <form onSubmit={(e) => addForm(e)}>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitleValue(e.target.value)}
            />
            <div>
              {questionCount.map(e => <QuestionModule />)}
            </div>
            <input type="submit" value="Submit" />
          </form>
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
