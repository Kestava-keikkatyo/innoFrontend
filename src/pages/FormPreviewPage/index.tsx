import { Container } from '@mui/material'
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
import { setAlert } from '../../actions/alertActions'
import { Question, questionTypes, severity } from '../../types/types'
import FormContactInfo from '../../components/FormComponents/FormContactInfo'
import FormTimepicker from '../../components/FormComponents/FormTimepicker'
import FormDatepicker from '../../components/FormComponents/FormDatepicker'
import { convertFormQuestionsToArray } from '../../utils/formUtils'

/**
 * @component
 * @desc A parent component to form preview page.
 * Loops through all questions and shows corresponding
 * type of component.
 */
const FormPreviewPage: React.FC = () => {
  const { title, description, questions } = useSelector((state: any) => state.form)
  const dispatch = useDispatch()
  
  const sortedQuestionsArray = convertFormQuestionsToArray(questions)

  console.log('Sorted: ', sortedQuestionsArray)
  console.log('Title: ', title)
  console.log('Desc: ', description) 
  
  return (
    <Container>
      <FormPreviewHeader />
      <div className="create-form">
        <FormHeader
          title={title}
          description={description}
        />
        {sortedQuestionsArray.map((q: Question, k: number) => {
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
              case questionTypes.Datepicker:
                return <FormDatepicker key={k} question={q} />
              case questionTypes.Timepicker:
                return <FormTimepicker key={k} question={q} />
              case questionTypes.ContactInformation:
                return <FormContactInfo key={k} question={q} />
              default:
                dispatch(
                  setAlert("Cannot read question of type: " + q.questionType, severity.Error)
                )
                return <></>
            }
          })
        }
      </div>
    </Container>
  )
}

export default FormPreviewPage