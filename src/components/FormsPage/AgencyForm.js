import React from "react"

import { Container, Typography, Button } from "@material-ui/core"
//import { FormikTextField } from '../FormField'
import { makeStyles } from "@material-ui/core/styles"
//import { useTranslation } from 'react-i18next'
//import { Formik } from 'formik'
import Collapsible from "react-collapsible"

/**
 * @todo Learn the FormikForms system and utilize it here.
 * @exports components/AgencyFormExpandable
 */
export const AgencyFormExpandable = () => {
  //const { t } = useTranslation()
  return (
    <>
      <Container maxWidth="md" disableGutters>
        <Typography>
          <Collapsible trigger="Lomake">
            <div>
              <p>Lomake 1</p>
            </div>
          </Collapsible>
        </Typography>
      </Container>
    </>
  )
}

/**
 * @exports components/AgencyForms
 */
export const AgencyForms = (props) => {
  const useStyles = makeStyles({
    clickableIcon: {
      color: "black",
      "&:hover": {
        color: "blue",
      },
      width: 60,
      height: 60,
    },
    textAlignAssignment: {
      width: "5px",
      height: "15px",
      textAlign: "center",
    },
    alignItemsAndJustifyContent: {
      width: "100%",
      padding: "30px",
      margin: "20px",
      height: 150,
      alignItems: "center",
      justifyContent: "center",
    },
  })
  const classes = useStyles()

  const { forms, onAdd } = props

  return (
    <div>
      <Button className={classes.clickableIcon} onClick={onAdd}>
        Uusi lomake
      </Button>
      {forms.map((form) => (
        <AgencyFormExpandable key={form.id}></AgencyFormExpandable>
      ))}
    </div>
  )
}
