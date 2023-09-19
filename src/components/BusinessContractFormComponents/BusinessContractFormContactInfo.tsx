import {
  //FormControl,
  //FormControlLabel,
  Input,
  InputLabel,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateQuestion } from '../../actions/businessContractFormActions'
import { IRootState } from '../../utils/store'
import { useTranslation } from 'react-i18next'
/**
 * CustomFormInput cant be used as control?
 * @param {any} props
 */
const BusinssContractFormContactInfo: React.FC<any> = ({ question }) => {
  const { title } = question

  let { contactInfoAnswer } = question
  const { t } = useTranslation()
  const questions = useSelector((state: IRootState) => state.businessContractForm.questions)

  const dispatch = useDispatch()

  let index: any = question?.ordering

  const handleChange = (e: any, input: string) => {
    let answer = {
      name: contactInfoAnswer.name,
      phone: contactInfoAnswer.phone,
      email: contactInfoAnswer.email,
    }

    switch (input) {
      case 'name':
        answer.name = e.target.value
        dispatch(updateQuestion({ ...questions[index], contactInfoAnswer: answer }, index))
        break
      case 'phone':
        answer.phone = e.target.value
        dispatch(updateQuestion({ ...questions[index], contactInfoAnswer: answer }, index))
        break
      case 'email':
        answer.email = e.target.value
        dispatch(updateQuestion({ ...questions[index], contactInfoAnswer: answer }, index))
        break
      default:
        break
    }
  }

  console.log('contactInfoAnswer', contactInfoAnswer)

  return (
    <>
      <Typography variant='h6'>{title}</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <InputLabel>{t('name')}</InputLabel>
              <Input
                value={contactInfoAnswer.name || ''}
                onChange={(e) => {
                  handleChange(e, 'name')
                }}
              />
            </TableCell>
            <TableCell>
              <InputLabel>{t('phone')}</InputLabel>
              <Input
                value={contactInfoAnswer.phone || ''}
                onChange={(e) => {
                  handleChange(e, 'phone')
                }}
              />
            </TableCell>
            <TableCell>
              <InputLabel>{t('email')}</InputLabel>
              <Input
                value={contactInfoAnswer.email || ''}
                onChange={(e) => {
                  handleChange(e, 'email')
                }}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default BusinssContractFormContactInfo
