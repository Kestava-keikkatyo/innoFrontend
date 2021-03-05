import React from "react"
import { Link } from "react-router-dom"
import testFormConstants from "../../constants/testFormConstants"
import { Grid, Card, Fab, CardContent, Typography } from "@material-ui/core"
import { AddIcon } from "@material-ui/data-grid"
import GridFormPreview from "./GridFormPreview"

/**
 * This is ugly for the time being.
 * @todo map existing templates from a directory into the grids for preview.
 * @todo OnHover preview, pip for every node? So onMouseEnter renders an image(?) of the finished pdf(?)
 */
const FormsPage = () => {
  return (
    <>
      <Grid
        spacing={8}
        justify="center"
        alignItems="center"
        container
        direction="row"
        mt={5}
      >
        <Grid item>
          <Link to="/forms/newform">
            <Fab size="medium" color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </Grid>
        {testFormConstants.map((t) => (
          <GridFormPreview
            item
            key={t.value}
            formTitle={t.title}
            formDesc={t.description}
          />
        ))}
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

// const useStyles = makeStyles((theme) => ({
// }))

export default FormsPage
