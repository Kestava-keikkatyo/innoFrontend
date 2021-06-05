import {
  //FormControl,
  //FormControlLabel,
  Input,
  InputLabel,
  Typography,
  Table,
  TableCell,
  TableRow,
  TableBody
} from "@material-ui/core"
import React from "react"

/**
 * CustomFormInput cant be used as control?
 * @param {any} props
 */
const FormContactInfo: React.FC<any> = ({ question }) => {
  const { title } = question

  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <InputLabel>Name</InputLabel>
              <Input />
            </TableCell>
            <TableCell>
              <InputLabel>Phone</InputLabel>
              <Input />
            </TableCell>
            <TableCell>
              <InputLabel>Email</InputLabel>
              <Input />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/*<FormControl>
        <FormControlLabel
          control={<Input />}
          placeholder="Name: "
          label={name}
        ></FormControlLabel>
        <FormControlLabel
          control={<Input />}
          placeholder="Phone: "
          label={name}
        ></FormControlLabel>
        <FormControlLabel
          control={<Input />}
          placeholder="Email: "
          label={name}
        ></FormControlLabel>
      </FormControl>*/}
    </>
  )
}

export default FormContactInfo
