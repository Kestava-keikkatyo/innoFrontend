import React from "react"
import { Link } from "react-router-dom"
import { Grid, Card, CardHeader } from "@material-ui/core"
import { InsertDriveFile as InsertDriveFileIcon } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"

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
  card: {
    margin: "auto",
    width: "50%",
  },
})

/**
 * This is ugly for the time being.
 * @todo map existing templates from a directory into the grids for preview.
 */
const FormsPage = () => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.card} variant="outlined">
        <Grid
          spacing={8}
          justify="space-around"
          container
          direction="row"
          mt={5}
          className={classes.alignItemsAndJustifyContent}
        >
          <Grid item>
            <Link to="/forms/newform">
              <InsertDriveFileIcon
                className={classes.clickableIcon}
              ></InsertDriveFileIcon>
            </Link>
          </Grid>
          <Grid item>
            <Card variant="outlined">
              <CardHeader title="This is a template"></CardHeader>
            </Card>
          </Grid>
          <Grid item>
            <Card variant="outlined">
              <CardHeader title="This is a template"></CardHeader>
            </Card>
          </Grid>
          <Grid item>
            <Card variant="outlined">
              <CardHeader title="This is a template"></CardHeader>
            </Card>
          </Grid>
          <Grid item>
            <Card variant="outlined">
              <CardHeader title="This is a template"></CardHeader>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default FormsPage
