import React from "react"
import QuestionModule from "./QuestionModule"
import { useDispatch, useSelector } from "react-redux"

import {
  Button,
  Container,
} from "@material-ui/core"

import {
  setTitle,
  addQuestion,
  setDescription,
  submitForm,
} from "../../actions/formActions"
import CustomFormInput from "./CustomFormInput"
import NewFormHeader from "./NewFormHeader"
import { Question } from "../../types/types"

/**
 * @todo move to constants
 */
const initialQuestion: any = {
  title: "", //name
  type: "comment",
  subTitle: "",
  scaleOptionTitleLeft: "",
  scaleOptionTitleCenter: "",
  scaleOptionTitleRight: "",
  answerMinLen: 0,
  answerMaxLen: 1000,
  rows: 4, //rowheight
  scale: 5,
  optional: false,
  options: []
}

/**
 * @component
 * @desc This is the Form Generator tool. Page for creating forms that corporate users can fill, see the documents in Google Drive by TTK.
 * @todo Roles visibility in this section? Worker able to see forms that reference them? How to pass the object with module types with questions attached to each?
 * @todo Fix the test form display, maybe button that "peeks" at the form?
 * @todo Make a preview button and view.
 * @todo Could user be able to import a ready made template from a pdf and the tool automatically generates a form?
 */
const NewFormPage: React.FC = () => {
  const dispatch = useDispatch()
  const currentForm = useSelector((state: any) => state.form)
  const { title, description, questions } = currentForm

  const addForm = (event: any): void => {
    event.preventDefault()
    dispatch(submitForm(currentForm))
  }

  return (
  <Container>
    <form onSubmit={addForm}>
    <NewFormHeader />
    <div className="create-form" >
      <CustomFormInput
        label="Form Title"
        labelFontSize="large"
        placeholder="Your title..."
        type="text"
        name="title"
        value={title}
        onChange={({ target }: any) => dispatch(setTitle(target.value))}
      />
      <CustomFormInput
        label="Description"
        labelFontSize="large"
        placeholder="Your description..."
        type="text"
        name="title"
        value={description}
        onChange={({ target }: any) => dispatch(setDescription(target.value))}
      />
      <div>{console.log(questions)}
        {questions.map((_: Question, i: number) => (
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
