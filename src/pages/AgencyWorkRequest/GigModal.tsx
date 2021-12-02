import React, { useEffect } from "react"

import TextField from "@mui/material/TextField"
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
} from "@material-ui/core"
import { Close as CloseIcon } from "@material-ui/icons"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles((theme) => ({
  selectDiv: {
    marginTop: 16,
    "& .MuiTextField-root": { m: 1, minWidth: "25ch" },
  },
}))

/**
 * @component
 * @desc A modal panel to connect worker user or business user with agency.
 * @param props
 * @param {Function} props.displayModal callback function when opened.
 * @param {Function} props.closeModal callback when closed.
 * @param {worker} props.workerData data of the added worker.
 */
const GigModal: React.FC<any> = ({ displayModal, closeModal }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Dialog
      disableEnforceFocus
      open={displayModal}
      onClose={closeModal}
      fullWidth
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{t("choose_workers")}</Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <div className={classes.selectDiv}>
          <Typography variant="subtitle1">{t("workers")}</Typography>
          <TextField
            id="select-workers"
            select
            helperText={t("choose_workers")}
            variant="standard"
          >
            <MenuItem value="None">{t("none")}</MenuItem>
          </TextField>
        </div>
      </DialogContent>
      <DialogActions style={{ marginBottom: 10 }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => alert("ei toteutettu")}
        >
          {t("saveButton")}
        </Button>
        <Button color="primary" variant="outlined" onClick={() => closeModal()}>
          {t("close")}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default GigModal
