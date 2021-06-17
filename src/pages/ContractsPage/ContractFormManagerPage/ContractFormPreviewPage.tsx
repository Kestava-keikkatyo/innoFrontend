import { Container } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import BusinssContractFormCheckBox from '../../../components/BusinessContractFormComponents/BusinessContractFormCheckBox'
import BusinssContractFormCheckBoxGroup from '../../../components/BusinessContractFormComponents/BusinessContractFormCheckBoxGroup'
import BusinssContractFormComment from '../../../components/BusinessContractFormComponents/BusinessContractFormComment'
import { useSelector } from 'react-redux'
import BusinessContractFormHeader from '../../../components/BusinessContractFormComponents/BusinessContractFormHeader'
import BusinssContractFormRadio from '../../../components/BusinessContractFormComponents/BusinessContractFormRadio'
import BusinssContractFormRadioGroup from '../../../components/BusinessContractFormComponents/BusinessContractFormRadioGroup'
import BusinssContractFormText from '../../../components/BusinessContractFormComponents/BusinessContractFormText'
import BusinssContractFormTextArea from '../../../components/BusinessContractFormComponents/BusinessContractFormTextArea'


import { setAlert } from '../../../actions/alertActions'
import { Question, questionTypes, severity } from '../../../types/types'
import BusinssContractFormContactInfo from '../../../components/BusinessContractFormComponents/BusinessContractFormContactInfo'
import BusinssContractFormDatepicker from '../../../components/BusinessContractFormComponents/BusinssContractFormDatepicker'
import BusinssContractFormTimepicker from '../../../components/BusinessContractFormComponents/BusinssContractFormTimepicker'
import PreviewHeader from './PreviewHeader'

/**
 * @component
 * @desc A parent component to business contract form preview page.
 * Loops through all questions and shows corresponding
 * type of component.
 */
const BusinessContractPreviewPage: React.FC = () => {
  const { title, description, questions } = useSelector((state: any) => state.businessContractForm)
  const dispatch = useDispatch()


  return (
    <Container>
        <PreviewHeader/>
        <div className="create-form">
            <BusinessContractFormHeader
            title={title}
            description={description}
            />
            {questions.map((q: Question, k: number) => {
            switch (q.questionType) {
                case questionTypes.Text:
                return <BusinssContractFormText key={k} question={q} />
                case questionTypes.Textarea:
                return <BusinssContractFormTextArea key={k} question={q} />
                case questionTypes.CheckBox:
                return <BusinssContractFormCheckBox key={k} question={q} />
                case questionTypes.CheckboxGroup:
                return <BusinssContractFormCheckBoxGroup key={k} question={q} />
                case questionTypes.RadiobuttonGroup:
                return <BusinssContractFormRadio key={k} question={q} />
                case questionTypes.RadiobuttonGroupHorizontal:
                return <BusinssContractFormRadioGroup key={k} question={q} />
                case questionTypes.Comment:
                return <BusinssContractFormComment key={k} question={q} />
                case questionTypes.Datepicker:
                return <BusinssContractFormDatepicker key={k} question={q}/>
                case questionTypes.Timepicker:
                return <BusinssContractFormTimepicker key={k} question={q} />
                case questionTypes.ContactInformation:
                return <BusinssContractFormContactInfo key={k} question={q} />
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