import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, TextField, Typography } from '@material-ui/core'
import { Close as CloseIcon } from "@material-ui/icons"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitFeeling, updateFeeling } from '../../actions/feelingActions'

const NewFeelingEntryModal = ({ modalState }) => {
  const { isOpen, setIsOpen } = modalState
  const dispatch = useDispatch()
  const feeling = useSelector(state => state.feeling?.currentFeeling)
  // console.log(feeling);
  
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">New Feeling Entry</Typography>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <FormControl component="fieldset">
          <FormLabel component="legend">Satisfaction</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender1"
              value={feeling.value}
              onChange={({ target }) => dispatch(updateFeeling({ value: parseInt(target.value) }))}
            >
              <FormControlLabel
                labelPlacement="bottom"
                value={0}
                control={<Radio />}
                label="0"
              />
              <FormControlLabel
                labelPlacement="bottom"
                value={1}
                control={<Radio />}
                label="1"
              />
              <FormControlLabel
                labelPlacement="bottom"
                value={2}
                control={<Radio />}
                label="2"
              />
              <FormControlLabel
                labelPlacement="bottom"
                value={3}
                control={<Radio />}
                label="3"
              />
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-multiline-static"
          label="Notes (optional)"
          multiline
          rows={4}
          placeholder="Add additional information"
          variant="outlined"
          onChange={({ target }) => dispatch(updateFeeling({ notes: target.value }))}
        />
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
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined"
          onClick={() => dispatch(submitFeeling(feeling))}>
          Publish
        </Button>
      </DialogActions>
    </Dialog>
  )
}

NewFeelingEntryModal.defaultProps = {
  modalState: {
    isOpen: false,
    setIsOpen: () => "drip"
  }
}
 
export default NewFeelingEntryModal