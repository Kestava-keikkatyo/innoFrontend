import React from "react"
import { Link } from "react-router-dom"
import {
  Grid,
  Card,
  CardHeader,
  Fab,
  CardContent,
  Typography,
} from "@material-ui/core"
import { InsertDriveFile as InsertDriveFileIcon } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import { AddIcon } from "@material-ui/data-grid"

/**
 * This is ugly for the time being.
 * @todo map existing templates from a directory into the grids for preview.
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
