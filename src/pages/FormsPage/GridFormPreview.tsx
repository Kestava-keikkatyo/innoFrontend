import React from "react"
import { Card, CardContent, Grid, Typography } from "@material-ui/core"

/**
 * Modular component that displays forms from store.
 * @param {string} formTitle - title of the form to be viewed.
 * @param {string} formDesc - description of the form.
 * @todo OnHover preview? PIP?
 * @todo for now reads data from a constant JSON file --> implement redux here.
 */
interface Props {
  formTitle: string,
  formDesc: string
}
const GridFormPreview: React.FC<Props> = ({ formTitle, formDesc }) => {
  return (
    <>
      <Grid item>
        <Card variant="outlined">
          <CardContent style={{ padding: "10%" }}>
            <Typography variant="h4">{formTitle}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {formDesc}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default GridFormPreview
