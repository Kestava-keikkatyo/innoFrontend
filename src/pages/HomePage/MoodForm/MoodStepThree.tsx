import { TextField, Typography } from '@material-ui/core';
import React from 'react';
import FileUploader from '../../../components/FileUploader';
import { useDispatch, useSelector } from 'react-redux';
import { updateFeeling } from '../../../actions/feelingActions';
import { IRootState } from '../../../utils/store';

export interface MoodStepThreeProps {}

const MoodStepThree: React.FC<any> = () => {
  const dispatch: any = useDispatch();

  const currentFeeling: any = useSelector<IRootState>(
    (state) => state.feeling.currentFeeling
  );

  const handleChange = (event: any) => {
    dispatch(updateFeeling({ ...currentFeeling, note: event.target.value }));
  };

  return (
    <>
      <Typography>Write a comment</Typography>
      <TextField
        onChange={handleChange}
        placeholder="Tell us about your feeling..."
        multiline
        rows={4}
        variant="outlined"
      />
      <FileUploader
        name="Upload file"
        handleFile={() => ''}
        accept="image/*, video/*"
      />
    </>
  );
};

export default MoodStepThree;
