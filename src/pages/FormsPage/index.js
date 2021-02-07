import React, { useState } from "react"

import { AgencyForms } from "./AgencyForm"

import { Container, Typography } from "@material-ui/core"

/**
 * state.forms:
 * type: int for the time being,
 * @todo figure out a better way to contextualize the form type.
 * ContractsPage is a good model.
 */
const FormsHome = () => {
  const [state, setState] = useState({
    forms: [
      { id: 0, type: 0 },
      { id: 1, type: 0 },
    ],
  })

  const addForm = () => {
    const index = state.forms.length
    const patchedForms = state.forms
    patchedForms.push({ id: index + 1, type: 0 })
    setState({ forms: patchedForms })
  }
  return (
    <>
      <Container maxWidth="md" disableGutters>
        <Typography>
          <main>
            <AgencyForms forms={state.forms} onAdd={addForm}></AgencyForms>
          </main>
        </Typography>
      </Container>
    </>
  )
}

export default FormsHome
