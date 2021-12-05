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
import WorkerTransferList from "./WorkerTransferList"

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
const GigModal: React.FC<any> = ({ displayModal, closeModal, workContract }) => {
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
      <WorkerTransferList workContract={workContract} />
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
