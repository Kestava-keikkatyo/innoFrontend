import React, { useState } from "react"
import uuid from "react-uuid"
import { QuestionModule, QuestionForm } from "../../components/QuestionForm"
import { FormContainer } from "../../components/FormContainer"

import {
  Card,
  Container,
  Divider,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
}))

/**
 * @note Page for creating forms that corporate users can fill, see the documents in Google Drive by TTK.
 * @todo Roles visibility in this section? Worker able to see forms that reference them? How to pass the object with module types with questions attached to each?
 * @todo Snackbar alert for validation! useDispatch!
 */
const FormsPage = () => {
  const [modules, setModules] = useState([
    { id: uuid(), type: "text" },
    { id: uuid(), type: "checkbox" },
  ])
  const [forms, setForms] = useState([
    {
      id: uuid(),
      name: "Test Form",
      modules: [{}],
    },
  ])

  const classes = useStyles()

  const addModule = (type) => {
    setModules([...modules, { id: uuid(), type }])
  }

  const addForm = (event) => {
    setForms([...forms, { id: uuid(), name: "Test form" }])
  }

  return (
    <Container>
      <Typography style={{ paddingTop: "1rem" }} align="center" variant="h4">
        Forms
      </Typography>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography
            style={{ paddingTop: "1rem" }}
            align="center"
            variant="h4"
          >
            Generation tool
          </Typography>
          <QuestionForm addModule={addModule} addForm={addForm} />
          <ul>
            {modules.map((questionModule) => {
              return (
                <li key={questionModule.id}>
                  <QuestionModule type={questionModule.type}></QuestionModule>
                </li>
              )
            })}
          </ul>
          <button onClick={() => console.log(modules)}>LOG</button>
        </CardContent>
      </Card>
      <Divider />
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography
            style={{ paddingTop: "1rem" }}
            align="center"
            variant="h4"
          >
            Generated forms
          </Typography>
          <ul>
            {forms.map((form) => {
              return (
                <li key={form.id}>
                  <FormContainer name={form.name}></FormContainer>
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>
    </Container>
  )
}

export default FormsPage
