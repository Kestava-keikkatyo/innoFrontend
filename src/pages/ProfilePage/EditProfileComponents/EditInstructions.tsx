import { Grid, Typography, TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../../actions/profileActions';

/**
 * @component
 * @desc Renders profile's instructions to be edited
 * @param {profile} props current profile
 * NOTICE: profile prop refers to state.profile.currentProfile
 */
const EditInstructions: React.FC<any> = ({ profile }) => {
  const dispatch = useDispatch();

  const handleInstructionsChange = (event: any, index: any) => {
    let copyOfInstructions = [...profile.instructions];
    copyOfInstructions[index] = event.target.value;
    dispatch(setProfile({ ...profile, instructions: copyOfInstructions }));
  };

  return (
    <Grid container style={{ marginBottom: 75 }}>
      <Grid item xs={12}>
        <Typography variant="h5">Instructions</Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: 24 }}>
        {profile.instructions.map((item: any, index: number) => (
          <div key={index}>
            <TextField
              id="standard-full-width"
              style={{ maxWidth: '97%', marginTop: 12 }}
              name="phone"
              fullWidth
              value={item || ''}
              onChange={(event) => handleInstructionsChange(event, index)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};
export default EditInstructions;
