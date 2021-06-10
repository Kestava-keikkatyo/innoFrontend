import {
  //FormControl,
  //FormControlLabel,
  Input,
  InputLabel,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateQuestion } from "../../actions/businessContractFormActions"
import { IRootState } from "../../utils/store"

/**
 * CustomFormInput cant be used as control?
 * @param {any} props
 */
 const BusinssContractFormContactInfo: React.FC<any> = ({ question }) => {
  const { title } = question

  let {contactInfoAnswer} = question

  const questions = useSelector((state: IRootState) => state.businessContractForm.questions)

  const dispatch = useDispatch()

  let index:any = question?.ordering

  const handleChange = (e:any, input:string) => {

    let answer = {
      name: contactInfoAnswer.name,
      phone: contactInfoAnswer.phone,
      email: contactInfoAnswer.email
    }

    switch(input){
      case 'name':
        answer.name = e.target.value
        dispatch(
          updateQuestion({ ...questions[index], contactInfoAnswer: answer }, index)
        )
        break
      case 'phone':
        answer.phone = e.target.value
        dispatch(
          updateQuestion({ ...questions[index], contactInfoAnswer: answer }, index)
        )
        break
      case 'email':
        answer.email = e.target.value
        dispatch(
          updateQuestion({ ...questions[index], contactInfoAnswer: answer }, index)
        )
        break
      default:
        break
    }

  }

  console.log("contactInfoAnswer", contactInfoAnswer)

  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <InputLabel>Name</InputLabel>
              <Input value={contactInfoAnswer.name || ''} onChange={(e) => {handleChange(e, "name")}} />
            </TableCell>
            <TableCell>
              <InputLabel>Phone</InputLabel>
              <Input value={contactInfoAnswer.phone || ''} onChange={(e) => {handleChange(e, "phone")}} />
            </TableCell>
            <TableCell>
              <InputLabel>Email</InputLabel>
              <Input value={contactInfoAnswer.email || ''} onChange={(e) => {handleChange(e, "email")}} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default BusinssContractFormContactInfo
