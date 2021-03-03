import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, TextField, Typography } from '@material-ui/core'
import { Close as CloseIcon } from "@material-ui/icons"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAlert } from '../../actions/alertActions'
import { submitFeeling, updateFeeling } from '../../actions/feelingActions'
import Spacing from '../../components/Spacing'

const NewFeelingEntryModal = ({ modalState }) => {
  const { isOpen, setIsOpen } = modalState
  const dispatch = useDispatch()
  const feeling = useSelector(state => state.feeling?.currentFeeling)

  const submit = () => {
    dispatch(submitFeeling(feeling))
    setIsOpen(false)
    dispatch(setAlert("Successfully added new entry.", "success"))
  }

  return (
    <Dialog className="new-feeling-modal" open={isOpen} onClose={() => setIsOpen(false)} fullWidth>
      <DialogTitle>
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
            { Array(4).fill().map((_, i) => (
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