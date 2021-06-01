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
import Header from './Header'
import { setAlert } from '../../actions/alertActions'
import { Question, questionTypes, severity } from '../../types/types'
import FormContactInfo from '../../components/FormComponents/FormContactInfo'
import FormDatePicker from '../../components/FormComponents/FormDatePicker'

/**
 * @component
 * @desc A parent component to form preview page.
 * Loops through all questions and shows corresponding
 * type of component.
 */
const BusinessContractPreviewPage: React.FC = () => {
  const { title, description, questions } = useSelector((state: any) => state.form)
  const dispatch = useDispatch()

  return (
    <Container>
      <Header/>
      <div className="create-form">
        <FormHeader
          title={title}
          description={description}
        />
        {questions.map((q: Question, k: number) => {
          switch (q.questionType) {
            case questionTypes.Text:
              return <FormText key={k} question={q} />
            case questionTypes.Textarea:
              return <FormTextArea key={k} question={q} />
            case questionTypes.CheckBox:
              return <FormCheckBox key={k} question={q} />
            case questionTypes.CheckboxGroup:
              return <FormCheckBoxGroup key={k} question={q} />
            case questionTypes.RadiobuttonGroup:
              return <FormRadio key={k} question={q} />
            case questionTypes.RadiobuttonGroupHorizontal:
              return <FormRadioGroup key={k} question={q} />
            case questionTypes.Comment:
              return <FormComment key={k} question={q} />
            case questionTypes.DatePicker:
              return <FormDatePicker key={k} question={q} />
            case questionTypes.ContactInformation:
              return <FormContactInfo key={k} question={q} />
            default:
              dispatch(
                setAlert("Cannot read question of type: " + q.questionType, severity.Error)
              )
              return <></>
          }
        })}
      </div>

    </Container>
  )
}

export default BusinessContractPreviewPage