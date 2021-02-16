import React, { useState } from "react"
import {
  Container,
  Typography,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
}))

/**
 * @exports components/QuestionForm
 * @param {Object} addModule - props, passes module option to parent on adding a module
 * @use This component handles the questionnaire a corporate user fills to create a form for another user to fill.
 * @todo Change submit button behaviour to a regular button, keep submit for actually submitting the whole form.
 * this is a comment made from terminal.
 */
export const QuestionForm = ({ addModule }) => {
  

  return (
    <Container>
      
    </Container>
  )
}
