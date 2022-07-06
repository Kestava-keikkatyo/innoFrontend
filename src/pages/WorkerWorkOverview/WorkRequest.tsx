import { Typography } from "@mui/material";
import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { useTranslation } from 'react-i18next'
const WorkRequest:React.FC<any> = () => {
    const { t } = useTranslation()
    const classes = useStyles()
  return (
    <div>
      <Typography style={{textAlign: 'center'}} className='header2' variant="h2" gutterBottom>
       {t("work_request")}
      </Typography>
    </div>
  );
};

const useStyles = makeStyles(() => ({
    headline: {
     textAlign: 'center'
    }
  }));

export default WorkRequest;
