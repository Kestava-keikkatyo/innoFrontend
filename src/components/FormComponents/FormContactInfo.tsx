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
import { useTranslation } from 'react-i18next'

/**
 * CustomFormInput cant be used as control?
 * @param {any} props
 */
const FormContactInfo: React.FC<any> = ({ question }) => {
  const { title } = question

  const { t } = useTranslation()

  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <InputLabel>{t("name")}</InputLabel>
              <Input />
            </TableCell>
            <TableCell>
              <InputLabel>{t("phone")}</InputLabel>
              <Input />
            </TableCell>
            <TableCell>
              <InputLabel>{t("email")}</InputLabel>
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
