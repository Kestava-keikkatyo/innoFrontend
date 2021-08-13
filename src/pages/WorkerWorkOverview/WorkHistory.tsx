import { Typography } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from 'react-i18next'

const WorkerHistory: React.FC<any> = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <div>
      <Typography className={classes.headline} variant="h6" gutterBottom>
        {t('history')}
      </Typography>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  headline: {
    textAlign: "center"
  }
}))

export default WorkerHistory
