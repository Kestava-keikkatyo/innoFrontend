import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Grid, Card, Fab, CardContent, Typography } from "@material-ui/core"
import { AddIcon } from "@material-ui/data-grid"
import GridFormPreview from "./GridFormPreview"
import { useDispatch, useSelector } from "react-redux"
import { fetchFormList } from "../../actions/formListActions"

/**
 * @component
 * @desc This is ugly for the time being.
 * @todo map existing templates from a directory into the grids for preview.
 * @todo OnHover preview, pip for every node? So onMouseEnter renders an image(?) of the finished pdf(?)
 */
const FormsPage: React.FC = () => {
  //add communityForms
  const { myForms } = useSelector((state: any) => state.formList)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchFormList())
  }, [dispatch])
  
  return (
    <>
      <Grid
        spacing={8}
        justify="center"
        alignItems="center"
        container
        direction="row"
        // mt={5} does not exist
      >
        <Grid item>
          <Link to="/forms/newform">
            <Fab size="medium" color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </Grid>
        {myForms.docs.map((t: any, i: number) =>
          <GridFormPreview
            key={i}
            formTitle={t.title}
            formDesc={t.description}
            formId={t._id}
          />
        )}
        <Grid item>
          <Card variant="outlined">
            <CardContent style={{ padding: "10%" }}>
              <Typography color="textSecondary">This is a template</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined">
            <CardContent style={{ padding: "10%" }}>
              <Typography color="textSecondary">This is a template</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined">
            <CardContent style={{ padding: "10%" }}>
              <Typography color="textSecondary">This is a template</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined">
            <CardContent style={{ padding: "10%" }}>
              <Typography color="textSecondary">This is a template</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default FormsPage
