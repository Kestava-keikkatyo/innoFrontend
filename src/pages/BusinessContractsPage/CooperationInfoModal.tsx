import React, { useEffect } from 'react';

import TextField from '@mui/material/TextField';
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
  makeStyles,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  addBusinessContractWorkerBusiness,
  fetchBusinessContracts,
} from '../../actions/businessContractActions';
import { setAlert } from '../../actions/alertActions';
import { severity } from '../../types/types';
import { useTranslation } from 'react-i18next';
import { fetchFormList } from '../../actions/formListActions';

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
const CooperationInfoModal: React.FC<any> = ({
  displayModal,
  closeModal,
  agency,
  contractId,
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const agencyId = agency._id;
  const { t } = useTranslation();

  const [formId, setFormId] = React.useState('None');
  const myForms: any = useSelector((state: any) => state.formList.myForms);

  const businessContracts: any = useSelector(
    (state: any) => state.businessContracts.businessContract
  );

  useEffect(() => {
    dispatch(fetchBusinessContracts());
    dispatch(fetchFormList());
  }, [dispatch]);

  const addContract = () => {
    const found = businessContracts.some((bc: any) => bc._id === contractId);
    if (found) {
      dispatch(
        setAlert(
          `Fail: You have already business contract with ${agency.name}`,
          severity.Error
        )
      );
    } else {
      dispatch(addBusinessContractWorkerBusiness(agencyId, contractId));
      dispatch(setAlert('Success: Invitation sent!', severity.Success));
    }
    closeModal();
  };

  const handleChange = (event: any) => {
    console.log(event.target.value);
    setFormId(event.target.value);
  };

  return (
    <Dialog
      disableEnforceFocus
      open={displayModal}
      onClose={closeModal}
      fullWidth
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{t('send_cooperation_request')}</Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {agency && (
          <div>
            <Typography variant="subtitle1">{t('agency_info')}:</Typography>
            <Typography color="textSecondary" variant="body2">
            {t('agency_name')}: {agency.name} <br />
            {t('agency_email')}: {agency.email} <br />
            {t('agency_category')}: {agency.category} <br />
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
            {myForms.docs.map((form: any) => (
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
        <Button color="primary" variant="contained" onClick={addContract}>
          {t('send_contract')}
        </Button>
        <Button color="primary" variant="outlined" onClick={() => closeModal()}>
          {t('close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CooperationInfoModal;
