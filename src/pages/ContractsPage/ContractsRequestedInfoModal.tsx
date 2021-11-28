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
  TextField,
  makeStyles,
  MenuItem,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useHistory } from 'react-router';
import {
  deleteBusinessContractForm,
  getByIdAndSetBusinessContractForm,
} from '../../actions/businessContractFormActions';
import {
  addBusinessContract,
  declineBusinessContract,
} from '../../actions/businessContractActions';
import { setAlert } from '../../actions/alertActions';
import { severity } from '../../types/types';

/**
 * @component
 * @desc A modal panel to connect worker user or business user with agency.
 * @param props
 * @param {Function} props.displayModal callback function when opened.
 * @param {Function} props.closeModal callback when closed.
 * @param {contract} props.contract business contract.
 */
const ContractsRequestedInfoModal: React.FC<any> = ({
  displayModal,
  closeModal,
  contractId,
  contract,
  acceptAndSendContract,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();
  const classes = useStyles();
  const myForms: any = useSelector((state: any) => state.formList.myForms);

  const [formId, setFormId] = React.useState('None');

  console.log('infoModal: contract: ', contract);

  const declineContract = (contractId: string, userId: string, formId: any) => {
    dispatch(declineBusinessContract(contractId, userId));
    if (formId) {
      dispatch(deleteBusinessContractForm(formId, userId));
    }
    dispatch(setAlert('Contract declined.', severity.Info, 3));
  };

  const handleBusinessWebsiteButton = () => {
    closeModal();
  };

  const handleContractFormButton = () => {
    dispatch(getByIdAndSetBusinessContractForm(contract.formId));
    //history.push({pathname: `/contracts/contract-form-manager`,state: { formId: contract.formId}})
    history.push(`/contracts/contract-form-manager`);
  };

  const handleAcceptAndSendContract = () => {
    alert('Not implemented yet');

    /*
    if (!contract.formId && formId === 'None') {
      dispatch(
        setAlert(
          'The contract form is not attached, or you have not selected a contract form',
          severity.Error,
          3
        )
      );
    } else {
      acceptAndSendContract(
        contractId,
        contract.businessId ? contract.businessId._id : contract.workerId._id,
        contract.formId ? contract.formId : formId
      );
    }
    closeModal();
    */
  };
  const handleChange = (event: any) => {
    console.log(event.target.value);
    setFormId(event.target.value);
  };

  return (
    <Dialog open={displayModal} onClose={closeModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Processing contract request</Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        {contract && (
          <>
            <div>
              <Typography variant="subtitle1">Sender info:</Typography>
              <Typography color="textSecondary" variant="body2">
                {t('name')}:{' '}
                {contract.businessId
                  ? contract.businessId.name
                  : contract.workerId.name}{' '}
                <br />
                {t('email')}:{' '}
                {contract.businessId
                  ? contract.businessId.email
                  : contract.workerId.email}{' '}
                <br />
              </Typography>
            </div>
            <div style={{ marginTop: 16 }}>
              <Typography color="textSecondary" variant="subtitle1">
                Contract form is attached?
                {contract.formId ? (
                  <>
                    <span style={{ color: 'green' }}> Yes </span>
                    <Button
                      size="small"
                      color="primary"
                      variant="outlined"
                      onClick={handleContractFormButton}
                    >
                      Contract form
                    </Button>
                  </>
                ) : (
                  <>
                    <span style={{ color: 'red' }}> No </span>
                    <div className={classes.selectDiv}>
                      <Typography variant="subtitle1">
                        Select contract form
                      </Typography>
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
                  </>
                )}
              </Typography>
            </div>
          </>
        )}
      </DialogContent>

      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={handleAcceptAndSendContract}
        >
          Accept and send contract
        </Button>
        <Button
          color="primary"
          variant="outlined"
          onClick={() =>
            declineContract(
              contractId,
              contract.businessId
                ? contract.businessId._id
                : contract.workerId._id,
              contract.formId
            )
          }
        >
          Decline
        </Button>
        <Button color="primary" variant="outlined" onClick={() => closeModal()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  selectDiv: {
    marginTop: 16,
    '& .MuiTextField-root': { m: 1, minWidth: '25ch' },
  },
}));

export default ContractsRequestedInfoModal;
