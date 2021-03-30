import React from "react"
import { Card, CardContent, Grid, Typography } from "@material-ui/core"
import { GridFormPreviewProps } from "../../types/props"
import { useDispatch } from "react-redux"
import { setFormById } from "../../actions/formActions"
import { useHistory } from "react-router"

/**
 * @component
 * @desc Modular component that displays forms from store.
 * @param {string} formTitle - title of the form to be viewed.
 * @param {string} formDesc - description of the form.
 * @todo OnHover preview? PIP?
 * @todo for now reads data from a constant JSON file --> implement redux here.
 */
const GridFormPreview: React.FC<GridFormPreviewProps> = ({ formTitle, formDesc, formId }) => {
  const dispatch = useDispatch()
  const history = useHistory();
  const handleClick = () => {
    dispatch(setFormById(formId))
    history.push(`/forms/newform`)
  }
  return (
    <>
      <Grid item onClick={handleClick}>
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
