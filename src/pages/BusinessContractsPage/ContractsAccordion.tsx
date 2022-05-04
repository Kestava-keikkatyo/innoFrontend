import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Theme,
  Divider,
  AccordionActions,
  IconButton,
  Button,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendBusinessContract,
} from '../../actions/businessContractActions';
import { severity } from '../../types/types';
import { setAlert } from '../../actions/alertActions';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import Tooltip from '@mui/material/Tooltip';

const ContractAccordion: React.FC<any> = ({ contract }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handlePreview = () => {
  // const handlePreview = (formId: any) => {
    // dispatch(getFormById(formId));
    // history.push({ pathname: '/forms/preview' });
    console.log('esikatsele')
  }

  const handleEdit = () => {
    console.log('muokkaa')
  }

  const rejectContract = () => {
    console.log('hylkää')
  }

  const signContract = (contractId: any) => {
    let status = "signed"
    dispatch(
      sendBusinessContract(
        contractId,
        status
      )
    )
    dispatch(setAlert('Business contract form sent!', severity.Success));
  }

  const handlePrint = () => {
    console.log('tulosta')
  }

  return (
    <Accordion key={contract._id}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <div className={classes.logoColumn}>
        {/* <Avatar
          alt="Remy Sharp"
          src={contract.agency.profile.profilePicture}
        /> */}
      </div>
      <div className={classes.column}>
        <Typography className={classes.heading}>
          {/* {contract.agency.name} */}
          {contract.creator.name}
        </Typography>
      </div>
      <div className={classes.column}>
        <Typography className={classes.color}>
          {/* {t('unfinished')} */}
          {contract.status}
        </Typography>
      </div>
    </AccordionSummary>
    <AccordionDetails>
      <div className={classes.info}>
        <Typography style={{ margin: '10px 5px' }}>
          {/* Email: {contract.agency.email} */}
          Email: contract.agency.email
        </Typography>
        <Divider />
        <Typography style={{ margin: '10px 5px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          eget.
        </Typography>
        <Button
          style={{ margin: '5px' }}
          color="primary"
          variant="contained"
        >
          {t('website')}
        </Button>
      </div>
    </AccordionDetails>

    <AccordionActions disableSpacing>
      <Tooltip title="Hylkää Sopimus" placement="top" arrow>
        <IconButton
          onClick={() => rejectContract()}
          size="large">
          <CloseIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Esikatsele Lomaketta" placement="top" arrow>
        <IconButton
          onClick={() => handlePreview()}
          size="large">
          <VisibilityIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Täytä tai muokkaa lomaketta" placement="top" arrow>
        <IconButton
          onClick={() => handleEdit()}
          size="large">
          <EditIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Tulosta pdf" placement="top" arrow>
        <IconButton
          onClick={() => handlePrint()}
          size="large">
          <SaveAltIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Allekirjoita sopimus" placement="top" arrow>
        <IconButton
          style={{ color: '#eb5a00' }}
          onClick={() => signContract(contract._id)}
          size="large">
          <SendIcon />
        </IconButton>
      </Tooltip>
    </AccordionActions>
  </Accordion>
)
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  logoColumn: {
    flexBasis: '20%',
  },
  column: {
    flexBasis: '40%',
    wordWrap: 'break-word',
    marginLeft: '10px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  color: {
    color: 'red',
  },
  info: {
    display: 'column',
    width: '30rem',
  },
  buttonGroup: {
    display: 'flex',
    borderRadius: '0px',
  },
  buttonGroupRoot: {
    borderRadius: '0px',
  },
}))

export default ContractAccordion