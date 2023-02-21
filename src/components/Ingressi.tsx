import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Ingressi: React.FC<any> = ({ header, summary}) => {

    const { t } = useTranslation()
    return (
      <div style={{ width: "100%", margin: "auto"}}>
        <Typography style={{ width: "60%", margin: "auto", alignSelf: "center", fontWeight: 'bold'}} variant="h2" className='header2'>
          {t(header)}
        </Typography>
        <Typography style={{ padding: "30px 0px 30px 0px", width: "60%", margin: "auto", alignSelf: "center", fontSize: "15px" }} variant="body1" className='header'>
          {t(summary)}
        </Typography>
      </div>
    );
};
export default Ingressi;
