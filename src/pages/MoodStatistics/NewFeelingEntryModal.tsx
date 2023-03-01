import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { submitFeeling, updateFeeling } from '../../actions/feelingActions';
import fileService from '../../services/fileService';
import { severity } from '../../types/types';
import { IRootState } from '../../utils/store';
import MoodForm from '../HomePage/MoodForm';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * A modal panel, which shows form for new feeling entry.
 * @param {*} props
 * @param {} modalState contains a useState for modal handling, needs to be deconstructed.
 */
const NewFeelingEntryModal: React.FC<any> = ({ modalState }) => {
  const { t } = useTranslation()
  const { isOpen, setIsOpen } = modalState;
  const dispatch = useDispatch();
  const currentFeeling: any = useSelector<IRootState>(
    (state) => state.feeling.currentFeeling
  );

  const currentFiles: any = useSelector<IRootState>(
    (state) => state.files.currentFiles
  );

  const onHandleSubmit = async () => {
    console.log('### 1 currentFeeling:', currentFeeling);
    //console.log('### currentFile:', currentFile.file);
    if (currentFiles.files[0] !== null) {
      const res: any = await fileService.postFile(currentFiles.files[0]);
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
    setIsOpen(false);
    dispatch(setAlert('Successfully added new entry.', severity.Success));

    console.log('### currentFeeling submitted');
  };

  return (
    <Dialog
      className="new-feeling-modal"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      fullWidth
      style={{ padding: 16 }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{t('feeling_entry')}</Typography>
          <IconButton onClick={() => setIsOpen(false)} size="large">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers style={{ paddingBottom: 24 }}>
        <MoodForm handleSubmit={onHandleSubmit} />
      </DialogContent>

      {/*<DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">New Feeling Entry</Typography>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
      <Spacing pv2 >
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">How do you feel today?</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender1"
              value={feeling.value}
              onChange={({ target }) => dispatch(updateFeeling({ value: parseInt(target.value) }))}
            >
              <span className="radio-side-label MuiTypography-body1">
                Not so good
              </span>
            { Array(4).fill(0).map((_, i) => (
                <FormControlLabel
                  key={i}
                  labelPlacement="bottom"
                  value={i}
                  control={<Radio />}
                  label={i}
                />
              )) }
              <span className="radio-side-label MuiTypography-body1">
                Good!
              </span>
          </RadioGroup>
        </FormControl>
        </Spacing>
        <FormControl component="fieldset" fullWidth>
          <TextField
            id="outlined-multiline-static"
            label="Notes (optional)"
            multiline
            rows={4}
            placeholder="Add additional information"
            variant="outlined"
            onChange={({ target }) => dispatch(updateFeeling({ note: target.value }))}
          />
        </FormControl>
        <FormControl component="fieldset" fullWidth>
          <FormControlLabel
            control={
              <Checkbox
                checked={feeling.isPrivate}
                onChange={({ target }) => dispatch(updateFeeling({ isPrivate: target.checked }))}
                name="anonymous"
                color="primary"
              />
            }
            label="Submit anonymously"
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined"
          onClick={submit}>
          Publish
        </Button>
          </DialogActions>*/}
    </Dialog>
  );
};

NewFeelingEntryModal.defaultProps = {
  modalState: {
    isOpen: false,
    setIsOpen: () => '',
  },
};

export default NewFeelingEntryModal;
