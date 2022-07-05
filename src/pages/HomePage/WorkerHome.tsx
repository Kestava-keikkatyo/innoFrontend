import React from 'react';

import vastuualueet from '../../assets/tietopankki/vastuualueet.json';
import {
  List,
  CardContent,
  Checkbox,
  FormControlLabel,
  ListItem,
  ListItemText,
  Card,
  CardHeader,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@mui/material';
import MoodForm from './MoodForm';
import { submitFeeling, updateFeeling } from '../../actions/feelingActions';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import fileService from '../../services/fileService';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const WorkerHome = () => {
  const dispatch = useDispatch();
   const { t } = useTranslation();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const currentFeeling: any = useSelector<IRootState>(
    (state) => state.feeling.currentFeeling
  );

  let currentFiles: any = useSelector<IRootState>(
    (state) => state.files.currentFiles
  );

  const onHandleSubmit = async () => {
    console.log('### 1 currentFeeling:', currentFeeling);
    console.log('### currentFiles:', currentFiles);
    if (currentFiles.files[0] !== null) {
      const res: any = await fileService.postFile(currentFiles.files[0]);
      console.log('onHandleSubmit res', res);

      const copyOfCurrentFeeling = {
        ...currentFeeling,
        fileUrl: res.data.fileUrl,
      };

      dispatch(updateFeeling(copyOfCurrentFeeling));
      dispatch(submitFeeling(copyOfCurrentFeeling));
    } else {
      dispatch(updateFeeling(currentFeeling));
      dispatch(submitFeeling(currentFeeling));
    }
  };

  return (
    <Grid container className="homeContainer">
      <Grid item xs={12} md={6} className="home" style={{height: "fit-content"}}>
        <MoodForm handleSubmit={onHandleSubmit}/>
      </Grid>
      <Grid item xs={12} md={6} className="home">
        <Card variant='outlined'>
          <CardHeader
           /* action={
              <Button variant="outlined" color="primary">
                {t('read_more')}
              </Button> 
            }*/
            title={t('workers_responsibility')}
            subheader=""
            style={{ textAlign: "center", paddingBottom: "0"}}
          />
          <CardContent className='home2'>
            {/*
            <List component="nav" aria-label="mailbox folders">
              {/* change worker2 to worker to get old list *}
              {vastuualueet.worker2.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${e.tip}`} />
                </ListItem>
              ))}
            </List> */}
            <List component="nav" aria-label="mailbox folders">
              {vastuualueet.worker.map((e, i) => (
              <ListItem key={e.tip}>
                <Accordion style={{margin: "4px 0"}} variant="outlined">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{color: "#000000DE"}}>{`${e.tip}`}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">{`${e.details}`}</Typography>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
              ))}
            </List>
            <FormControlLabel 
            control={<Checkbox defaultChecked style={{color:'#eb5a00'}} />} 
            label={t<string>('worker_responsibilities_read')}
            style={{padding: "0 1rem"}}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default WorkerHome;
