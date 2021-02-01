import React from "react"

import { Container, Typography, Button, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
//import { useTranslation } from "react-i18next"
import Collapsible from "react-collapsible"

/**
 * @todo useTranslation for languagesupport
 * @todo Styles and responsiveness,
 * @todo Figure out the relationship between worker and agency => does the agency need the form as it is or just templates and the worker needs the "working version".
 * @exports components/FormContainerExpandable
 */
export const FormContainerExpandable = () => {
  return (
    <>
      <Container maxWidth="md" disableGutters>
        <Typography>
          <Collapsible trigger="Lomake">
            <div>
              <AgencyForm></AgencyForm>
            </div>
          </Collapsible>
        </Typography>
      </Container>
    </>
  )
}

export const AgencyForm = () => {
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

  return (
    <form className={classes.alignItemsAndJustifyContent}>
      <div>
        <label>
          Lomake 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA
          TYÖHYVINVOINTIASIAT (vuokrausyrityksen ja käyttäjäyrityksen edustajat
          täyttävät yhdessä)
        </label>
        <TextField
          required
          className=""
          id="outlined-basic"
          variant="outlined"
        />
      </div>
    </form>
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
        <FormContainerExpandable key={form.id}></FormContainerExpandable>
      ))}
    </div>
  )
}
