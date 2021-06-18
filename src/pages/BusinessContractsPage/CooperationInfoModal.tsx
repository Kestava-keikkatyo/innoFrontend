import React from "react"

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
} from "@material-ui/core"
import { Close as CloseIcon } from "@material-ui/icons"
import { useDispatch } from "react-redux"
import { addBusinessContractWorkerBusiness } from "../../actions/businessContractActions"
import { setAlert } from "../../actions/alertActions"
import { severity } from "../../types/types"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

/**
 * @component
 * @desc A modal panel to connect worker user or business user with agency.
 * @param props
 * @param {Function} props.displayModal callback function when opened.
 * @param {Function} props.closeModal callback when closed.
 * @param {worker} props.workerData data of the added worker.
 */
const CooperationInfoModal: React.FC<any> = ({ displayModal, closeModal, agency, contractId,forms }) => {
  const dispatch = useDispatch()
  const [form, setForm] = React.useState('');
  const classes = useStyles();

  const addContract = () => {
    dispatch(addBusinessContractWorkerBusiness(contractId));
    dispatch(setAlert("Success: Invitation sent to worker", severity.Success))
    closeModal()
  }

  const handleChange = (event:any) => {
    console.log(event.target.value)
    setForm(event.target.value);
  }

  return (
    <Dialog open={displayModal} onClose={closeModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Add to your organization</Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {agency && (
          <Typography color="textSecondary" variant="body2">
            id: {agency._id} <br />
            name: {agency.name} <br />
            created: {agency.createdAt} <br />
            email: {agency.email}
          </Typography>
        )}
        <FormControl className={classes.formControl}>
          <InputLabel>Lomake</InputLabel>
          <Select onChange={handleChange} value={form}>
            <MenuItem value="1 ">Select Non</MenuItem>
            <MenuItem value="2 ">Oletus sopimus</MenuItem>
            <MenuItem value="3 ">Oma sopimus 1</MenuItem>
            <MenuItem value="4 ">Oma sopimus 2</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
      </DialogActions>
      <DialogActions>
        <Button color="primary" variant="outlined"
          onClick={addContract}>
          Lähetä sopimus
        </Button>
        <Button color="primary" variant="outlined"
          onClick={() => closeModal()}>
          Sulje
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CooperationInfoModal
