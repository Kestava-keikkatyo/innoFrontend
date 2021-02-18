import React, { useState } from "react"

import {
  Card,
  Container,
  Divider,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core"
import QuestionModule from "./QuestionModule"
import { useDispatch, useSelector } from "react-redux"
import { setTitle } from "../../actions/formActions"

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
  const classes = useStyles()
  const dispatch = useDispatch()
  const { currentForm } = useSelector(state => state.form)
  const [questions, setQuestions] = useState([])

  const title = currentForm.title

  // This is ugly af, see if the behaviour for submitting the
  // child-components data and this components data can be done in a more readable manner.
  const addForm = (event) => {
    event.preventDefault()
    const newForm = { title, questions }
    console.log(newForm);
  }

  const setQuestionsChild = (element, index) => {
    let temp = questions
    temp[index] = element
    setQuestions(temp)
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
            
          <button onClick={() => setQuestions(
            [...questions, {name: "Type your question here.", type: "text"}]
            )}>
            Add Module +
          </button>
          <form onSubmit={(e) => addForm(e)}>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              onChange={({ target }) => dispatch(setTitle(target.value))}
            />
            <div>
              {questions.map((e, i) => <QuestionModule key={i} update={setQuestionsChild} questionIndex={i} />)}
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
