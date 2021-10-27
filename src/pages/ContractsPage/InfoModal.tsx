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
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next'

import { useHistory } from 'react-router';
import { getByIdAndSetBusinessContractForm } from '../../actions/businessContractFormActions';

/**
 * @component
 * @desc A modal panel to connect worker user or business user with agency.
 * @param props
 * @param {Function} props.displayModal callback function when opened.
 * @param {Function} props.closeModal callback when closed.
 * @param {contract} props.contract business contract.
 */
const WorkerModal: React.FC<any> = ({ displayModal, closeModal, contract }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const history = useHistory();

  console.log('infoModal: contract: ', contract);

  const handleBusinessWebsiteButton = () => {
    closeModal();
  };

  const handleContractFormButton = () => {
    dispatch(getByIdAndSetBusinessContractForm(contract.formId));
    //history.push({pathname: `/contracts/contract-form-manager`,state: { formId: contract.formId}})
    history.push(`/contracts/contract-form-manager`);
  };

  return (
    <Dialog open={displayModal} onClose={closeModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Info</Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        {contract && (
          <>
            <Typography color="textSecondary" variant="body1">
              <b>Contract id:</b> {contract._id}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              <b>Business id:</b>{' '}
              {contract.businessId
                ? contract.businessId._id
                : contract.workerId._id}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              <b>Business name:</b>{' '}
              {contract.businessId
                ? contract.businessId.name
                : contract.workerId.name}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              <b>Business email:</b>{' '}
              {contract.businessId
                ? contract.businessId.email
                : contract.workerId.email}
            </Typography>
          </>
        )}
      </DialogContent>

      <DialogActions>
        <Button
          color="primary"
          variant="outlined"
          onClick={handleContractFormButton}
        >
          {t("contract_form")}
        </Button>
        <Button
          color="primary"
          variant="outlined"
          onClick={handleBusinessWebsiteButton}
        >
          {t("business_website")}
        </Button>
        <Button color="primary" variant="outlined" onClick={() => closeModal()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorkerModal;
