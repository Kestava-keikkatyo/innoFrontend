import { Container } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import FormCheckBox from '../../components/FormComponents/FormCheckBox'
import FormCheckBoxGroup from '../../components/FormComponents/FormCheckBoxGroup'
import FormComment from '../../components/FormComponents/FormComment'
import { useSelector } from 'react-redux'
import FormHeader from '../../components/FormComponents/FormHeader'
import FormRadio from '../../components/FormComponents/FormRadio'
import FormRadioGroup from '../../components/FormComponents/FormRadioGroup'
import FormText from '../../components/FormComponents/FormText'
import FormTextArea from '../../components/FormComponents/FormTextArea'
import FormPreviewHeader from './FormPreviewHeader'
import formConstants from '../../constants/formConstants'
import { setAlert } from '../../actions/alertActions'
import { Question } from '../../types/types'
import FormContactInfo from '../../components/FormComponents/FormContactInfo'
import FormDatePicker from '../../components/FormComponents/FormDatePicker'

const FormPreviewPage: React.FC = () => {
  const { currentForm } = useSelector((state: any) => state.form)
  const dispatch = useDispatch()

  return (
    <Container>
      <FormPreviewHeader />
      <div className="create-form">
        <FormHeader
          title={currentForm.title}
          description={currentForm.description}
        />
        {currentForm.questions.map((q: Question, k: number) => {
          switch (q.type) {
            case formConstants.textField.value:
              return <FormText key={k} question={q} />
            case formConstants.textArea.value:
              return <FormTextArea key={k} question={q} />
            case formConstants.checkBox.value:
              return <FormCheckBox key={k} question={q} />
            case formConstants.checkBoxGroup.value:
              return <FormCheckBoxGroup key={k} question={q} />
            case formConstants.radioButtonGroup.value:
              return <FormRadio key={k} question={q} />
            case formConstants.radioButtonRow.value:
              return <FormRadioGroup key={k} question={q} />
            case formConstants.comment.value:
              return <FormComment key={k} question={q} />
            case formConstants.datePicker.value:
              return <FormDatePicker key={k} question={q} />
            case formConstants.contactInfo.value:
              return <FormContactInfo key={k} question={q} />
            default:
              dispatch(
                setAlert("Cannot read question of type: " + q.type, "error")
              )
              return <></>
          }
        })}
      </div>
    </Container>
  )
}

export default FormPreviewPage