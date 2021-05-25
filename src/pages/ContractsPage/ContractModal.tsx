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
import { useDispatch, useSelector } from "react-redux"
import { addBusinessContract } from "../../actions/businessContractActions"
import { setAlert } from "../../actions/alertActions"
import { severity, roles } from "../../types/types"
import { IRootState } from "../../utils/store"
import { Divider } from "material-ui"

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
const WorkerModal: React.FC<any> = ({ displayModal, closeModal, workerData, forms }) => {
  const dispatch = useDispatch()
  const { businessContract } = useSelector((state: IRootState) => state.businessContracts)
  const [form, setForm] = React.useState('');
  const classes = useStyles();
  
  const addContract = () => {
    if (!businessContract.some((value: any) => value.requestContracts.businesses.includes(workerData._id)  || value.requestContracts.workers.includes(workerData._id))) {
      dispatch(addBusinessContract(businessContract[0]._id, workerData._id, form))
      dispatch(setAlert("Success: Invitation sent to worker", severity.Success))
    } else {
      dispatch(setAlert("Failed: You already have contract with this worker.", severity.Error))
    }
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
        {workerData && (
          <Typography color="textSecondary" variant="body2">
            id: {workerData._id} <br />
            name: {workerData.name} <br />
            created: {workerData.createdAt} <br />
            email: {workerData.email}
          </Typography>
        )}
        <FormControl className={classes.formControl}>
          <InputLabel>Lomake</InputLabel>
          <Select onChange={handleChange} value={form}>
            <MenuItem value="">Select Non</MenuItem>
            {forms.map((form:any) => (
              <MenuItem key={form} value={form}>{form}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
      </DialogActions>
      <DialogActions>
        <Button color="primary" variant="outlined"
          onClick={addContract}>
          create contract
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default WorkerModal
