import React from "react"
import QuestionModule from "./QuestionModule"
import { useDispatch, useSelector } from "react-redux"
import {
  Button,
  Container,
} from "@mui/material"
import {
  setTitle,
  addQuestion,
  setDescription,
  submitForm,
} from "../../actions/formActions"
import CustomFormInput from "./CustomFormInput"
import NewFormHeader from "./NewFormHeader"
import { Question } from "../../types/types"
import { useTranslation } from 'react-i18next'
/**
 * @todo move to constants
 */
const initialQuestion: any = {
  title: "", //name
  questionType: "text", //type
  subTitle: "",
  scaleOptionTitleLeft: "",
  scaleOptionTitleCenter: "",
  scaleOptionTitleRight: "",
  answerMinLength: 0, //minLength
  answerMaxLength: 1000, //maxLength
  rows: 4, //rowheight
  scale: 5,
  optional: false,
  options: [],
  optionValues: [],
  checked: false,
  answer: '',
  contactInfoAnswer: {
    name:'',
    phone: '',
    email: ''
  }

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
  const { t } = useTranslation()

  const addForm = (event: any): void => {
    event.preventDefault()
    dispatch(submitForm(currentForm))
  }

  console.log(currentForm);

  return (
  <Container>
    <form onSubmit={addForm}>
    <NewFormHeader />
    <div className="create-form" >
      <CustomFormInput
        label={t("form_title")}
        labelFontSize="large"
        placeholder={t("your_title")}
        type="text"
        name="title"
        value={title}
        onChange={({ target }: any) => dispatch(setTitle(target.value))}
      />
      <CustomFormInput
        label={t("description")}
        labelFontSize="large"
        placeholder={t("your_description")}
        type="text"
        name="title"
        value={description}
        onChange={({ target }: any) => dispatch(setDescription(target.value))}
      />
      <div>
        {questions.map((_: Question, i: number) => (
          <QuestionModule key={i} questionIndex={i} />
        ))}
      </div>
      <Button onClick={() => dispatch(addQuestion(initialQuestion))}>
      {t("add_question")}
      </Button>
      </div>
    </form>
  </Container>
  )
}

export default NewFormPage
