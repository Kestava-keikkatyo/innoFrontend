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

/**
 * CustomFormInput cant be used as control?
 * @param {any} props
 */
 const BusinssContractFormContactInfo: React.FC<any> = ({ question }) => {
  const { title } = question

  let answer = {
    name: '',
    phone: '',
    email: ''
  }

  question.answer = answer

  console.log("question.answer", question.answer)

  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <InputLabel>Name</InputLabel>
              <Input onChange={(e) => {answer.name = e.target.value}} />
            </TableCell>
            <TableCell>
              <InputLabel>Phone</InputLabel>
              <Input onChange={(e) => {answer.phone = e.target.value}} />
            </TableCell>
            <TableCell>
              <InputLabel>Email</InputLabel>
              <Input onChange={(e) => {answer.email = e.target.value}} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default BusinssContractFormContactInfo
