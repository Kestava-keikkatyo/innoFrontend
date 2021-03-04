import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Grid } from "@material-ui/core"
import { InsertDriveFile as InsertDriveFileIcon } from "@material-ui/icons"

/**
 * This is ugly for the time being.
 */
const FormsPage = () => {
  return (
    <>
      <Grid>
        <Grid item xs>
          <Link to="/newform">
            <InsertDriveFileIcon></InsertDriveFileIcon>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default FormsPage
