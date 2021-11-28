import React from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  DialogActions,
  MenuItem,
  TextField,
  makeStyles,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addBusinessContract } from '../../actions/businessContractActions';
import { setAlert } from '../../actions/alertActions';
import { severity } from '../../types/types';
import { IRootState } from '../../utils/store';
import { createBusinessContractForm } from '../../actions/businessContractFormActions';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  selectDiv: {
    marginTop: 16,
    '& .MuiTextField-root': { m: 1, minWidth: '25ch' },
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
const WorkerAndBusinessModal: React.FC<any> = ({
  displayModal,
  closeModal,
  workerOrBusinessData,
}) => {
  const dispatch = useDispatch();
  const { businessContract } = useSelector(
    (state: IRootState) => state.businessContracts
  );
  const myForms: any = useSelector((state: any) => state.formList.myForms);

  const [formId, setFormId] = React.useState('None');
  const classes = useStyles();

  const { t } = useTranslation();

  console.log('workerOrBusinessData', workerOrBusinessData);

  const addContract = async () => {
    if (formId === 'None') {
      dispatch(
        setAlert(
          `Failed: Please choose a form. If you do not have yet, create one.`,
          severity.Error
        )
      );
    } else {
      if (
        !workerOrBusinessData.businessContracts.includes(
          businessContract[0]._id
        )
      ) {
        const businessContractForm: any = await dispatch(
          createBusinessContractForm(formId)
        );
        dispatch(
          addBusinessContract(
            businessContract[0]._id,
            workerOrBusinessData._id,
            businessContractForm._id
          )
        );
        dispatch(
          setAlert(
            `Success: Contract request sent to ${workerOrBusinessData.name}`,
            severity.Success
          )
        );
      } else {
        dispatch(
          setAlert(
            `Failed: You already have contract with ${workerOrBusinessData.name}.`,
            severity.Error
          )
        );
      }
    }
    closeModal();
  };

  const handleChange = (event: any) => {
    console.log(event.target.value);
    setFormId(event.target.value);
  };

  return (
    <Dialog open={displayModal} onClose={closeModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Create contract</Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {workerOrBusinessData && (
          <div>
            <Typography variant="subtitle1">
              {workerOrBusinessData.userType} info:
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {t('name')}: {workerOrBusinessData.name} <br />
              {t('email')}: {workerOrBusinessData.email} <br />
              {workerOrBusinessData.userType === 'Business' ? (
                <>
                  {t('category')}: {workerOrBusinessData.category} <br />
                </>
              ) : null}
              {t('joined')}:{' '}
              {new Date(workerOrBusinessData.createdAt).toLocaleDateString()}{' '}
              <br />
            </Typography>
          </div>
        )}
        <div className={classes.selectDiv}>
          <Typography variant="subtitle1">Select contract form</Typography>
          <TextField
            id="standard-select-currency"
            select
            label="Selected form"
            value={formId}
            onChange={handleChange}
            helperText=""
            variant="standard"
          >
            <MenuItem value="None">None</MenuItem>
            {myForms &&
              myForms.docs.map((form: any) => (
                <MenuItem key={form._id} value={form._id}>
                  {form.title.length > 50
                    ? `${form.title.substring(0, 50)}...`
                    : form.title}
                </MenuItem>
              ))}
          </TextField>
        </div>
      </DialogContent>
      <DialogActions></DialogActions>
      <DialogActions style={{ marginBottom: 10 }}>
        <Button color="primary" variant="outlined" onClick={addContract}>
          {t('create_contract')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorkerAndBusinessModal;
