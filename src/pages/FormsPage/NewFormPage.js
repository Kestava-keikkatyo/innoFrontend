import React from "react"
import QuestionModule from "./QuestionModule"
import { useDispatch, useSelector } from "react-redux"

import {
  Button,
  Container,
  makeStyles,
} from "@material-ui/core"

import {
  setTitle,
  addQuestion,
  setDescription,
  submitForm,
} from "../../actions/formActions"
import CustomFormInput from "./CustomFormInput"
import NewFormHeader from "./NewFormHeader"

const initialQuestion = {
  name: "",
  type: "text",
  subTitle: "",
  scaleOptionTitleLeft: "",
  scaleOptionTitleCenter: "",
  scaleOptionTitleRight: "",
  minLen: 0,
  maxLen: 1000,
  rowHeight: 4,
  scale: 5,
  optional: false,
  options: []
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
 * @todo Make a preview button and view.
 * @todo Could user be able to import a ready made template from a pdf and the tool automatically generates a form?
 */
const NewFormPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { currentForm } = useSelector((state) => state.form)
  const { questions } = useSelector((state) => state.form.currentForm)

  const addForm = (event) => {
    event.preventDefault()
    dispatch(submitForm(currentForm))
  }

  return (
    <Container className={classes.card} variant="outlined">
    <form onSubmit={(e) => addForm(e, currentForm.title, currentForm.description)}>
    <NewFormHeader />
    <div className="create-form" >
      <CustomFormInput
        label="Form Title"
        placeholder="Your title..."
        type="text"
        name="title"
        value={currentForm.title}
        onChange={({ target }) => dispatch(setTitle(target.value))}
      />
      <CustomFormInput
        label="Description"
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
      </div>
    </form>
  </Container>
  )
}

export default NewFormPage
