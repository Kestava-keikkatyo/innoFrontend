import React, { useEffect } from "react"

import {
  Dialog,
  DialogTitle,
  Box,
  Typography,
  Button,
  IconButton,
  DialogActions,
  makeStyles,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import { Close as CloseIcon } from "@material-ui/icons"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import allUsersService from "../../services/allUsersService"
import workAddService from "../../services/workAddService"
import { acceptWorkersToGig } from "../../actions/workAddAction"

function not(a: any[], b: any[]) {
  return a.filter((value) => b.indexOf(value) === -1)
}

function intersection(a: any[], b: any[]) {
  return a.filter((value) => b.indexOf(value) !== -1)
}

function union(a: any[], b: any[]) {
  return [...a, ...not(b, a)]
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  selectDiv: {
    marginTop: 16,
    "& .MuiTextField-root": { m: 1, minWidth: "25ch" },
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
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
const GigModal: React.FC<any> = ({
  displayModal,
  closeModal,
  workContractId,
  contract,
}) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  const [checked, setChecked] = React.useState<any[]>([])
  const { agencyWorkers } = useSelector((state: any) => state.allUsers)
  const [left, setLeft] = React.useState<any>(agencyWorkers)
  const [right, setRight] = React.useState<any>([])
  const leftChecked = intersection(checked, left)
  const rightChecked = intersection(checked, right)
  const dispatch = useDispatch()

  console.log("soppari: ", workContractId)

  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const numberOfChecked = (items: any[]) => intersection(checked, items).length

  const handleToggleAll = (items: any[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items))
    } else {
      setChecked(union(checked, items))
    }
  }

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked))
    setLeft(not(left, leftChecked))
    setChecked(not(checked, leftChecked))
  }

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked))
    setRight(not(right, rightChecked))
    setChecked(not(checked, rightChecked))
  }

  const handleSave = () => {
    const selectedWorkers = right.map((worker: any) => worker._id)
    dispatch(acceptWorkersToGig(workContractId, contract._id, selectedWorkers))
  }

  const customList = (title: React.ReactNode, items: any[]) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ "aria-label": "all items selected" }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((value: any) => {
          const labelId = `transfer-list-all-item-${value._id}-label`

          return (
            <ListItem
              key={value._id}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.name} />
            </ListItem>
          )
        })}
        <ListItem />
      </List>
    </Card>
  )
  console.log("workContract", workContractId)

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
      <Grid container spacing={2} alignItems="center" className={classes.root}>
        <Grid item>{customList(t("choices"), left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(t("chosen"), right)}</Grid>
      </Grid>
      )
      <DialogActions style={{ marginBottom: 10 }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSave()}
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
