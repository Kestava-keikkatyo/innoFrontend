import { Container, Grid, Typography, makeStyles } from "@material-ui/core"
import React from "react"
import RequestInfo from "./RequestInfo"
import { useTranslation } from "react-i18next"
const JobRequest: React.FC<any> = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Container>
      <Grid container>
        <Grid item md={12}>
          <Typography variant="h6" className={classes.request}>
            {t("choose_request")}
          </Typography>
          <div className={classes.request}>
            <RequestInfo />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default JobRequest

const useStyles = makeStyles(() => ({
  request: {
    marginBottom: "3%",
    width: "100%",
  },
}))
