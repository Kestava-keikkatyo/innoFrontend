import React from 'react';

import vastuualueet from '../../assets/tietopankki/vastuualueet.json';
import {
  List,
  CardContent,
  ListItem,
  ListItemText,
  Divider,
  CardHeader,
  Button,
  Grid,
} from '@material-ui/core';
import MoodForm from './MoodForm';
import FeedBackForm from './FeedBackForm';
import { submitFeeling, updateFeeling } from '../../actions/feelingActions';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import fileService from '../../services/fileService';

const WorkerHome = () => {
  const dispatch = useDispatch();

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
    <Grid container>
      <Grid item xs={12} md={6} style={{ marginBottom: '3%' }}>
        <MoodForm handleSubmit={onHandleSubmit} />
      </Grid>
      <Grid item xs={12} md={6} style={{ marginBottom: '3%' }}>
        <div className="report-container" style={{ height: '100%' }}>
          <CardHeader
            action={
              <Button variant="outlined" color="primary">
                Lue lisää
              </Button>
            }
            title="Vastuualue"
            subheader="Vuokrayritys"
          />
          <CardContent>
            <List component="nav" aria-label="mailbox folders">
              <Divider />
              {vastuualueet.worker.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${i + 1}. ${e.tip}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </div>
      </Grid>
      <FeedBackForm />
    </Grid>
  );
};

export default WorkerHome;
