import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  DialogActions,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from 'react-i18next'
/**
 * @component
 * @desc A modal panel to connect worker user or business user with agency.
 * @param props
 * @param {Function} props.displayModal callback function when opened.
 * @param {Function} props.closeModal callback when closed.
 * @param {contract} props.contract business contract.
 */

const useStyles = makeStyles((theme) => ({
  action: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  enroll: {
    [theme.breakpoints.down("xs")]: {
      width: "43%",
      marginTop: "3%",
    },
  },
}));

const JobModal: React.FC<any> = ({ displayModal, closeModal }) => {
  const classes = useStyles();
  const { t } = useTranslation()
  
  return (
    <Dialog open={displayModal} onClose={closeModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Muuttoapu Vantaalla</Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <>
          <Typography color="textSecondary" variant="body1">
            <b>{t("date")} 12.8.2021</b>
          </Typography>
          <Typography color="textSecondary" variant="body1">
            <b>{t("duration")} 8h</b>{" "}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            <b>{t("participants")} 2/3</b>{" "}
          </Typography>
        </>
      </DialogContent>

      <DialogActions className={classes.action}>
        <FormControlLabel
          value="agree"
          control={<Checkbox color="secondary" />}
          label="Hyväksyn käyttöehdot"
        />
        <Button color="primary" variant="outlined" onClick={() => closeModal()}>
        {t("company_sites")}
        </Button>
        <Button
          className={classes.enroll}
          color="primary"
          variant="outlined"
          onClick={() => closeModal()}
        >
           {t("enroll")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobModal;
