import React from "react"
import { Container, Card, makeStyles, CardContent } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
}))

/**
 * @exports components/FormContainer
 * @param {Object} name - name of the form generated and displayed
 * @returns returns a container for the listen forms generated with the form generation tool.
 */
export const FormContainer: React.FC<{name: string}> = ({ name }) => {
  const classes = useStyles()
  return (
    <Container>
      <Card className={classes.card} variant="outlined">
        <CardContent>{name}</CardContent>
      </Card>
    </Container>
  )
}
