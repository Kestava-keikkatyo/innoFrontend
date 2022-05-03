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
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  sendBusinessContract,
  refuseBusinessContractById,
} from '../../actions/businessContractActions';
import { IRootState } from '../../utils/store';
import {
  deleteBusinessContractForm,
  getByIdAndSetBusinessContractForm,
  setBusinessContractForm,
} from '../../actions/businessContractFormActions';
import { severity } from '../../types/types';
import { setAlert } from '../../actions/alertActions';
import businessContractFormService from '../../services/businessContractFormService';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake';
import ReactDOMServer from 'react-dom/server';
import Form from '../FormsPage/Form';
import { getFormById } from '../../actions/formActions';
import VisibilityIcon from '@mui/icons-material/Visibility';

import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import Tooltip from '@mui/material/Tooltip';
import ContractAccordion from './ContractsAccordion';

export const ListAccordionInBox = (prop: { contracts: any[] }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const { contracts } = prop;

  const pending: any = []
  const signed: any = []
  contracts.map((contract: any) => {
    switch(contract.status) {
      case 'pending':
        pending.push(contract);
        break
      case 'signed':
        signed.push(contract);
        break
      default:
        break
    }
    return '';
  });

  const currentBusinessContractForm: any = useSelector(
    (state: IRootState) => state.businessContractForm
  );

  // const handleTäytäTaiMuokkaaLomaketta = async (
  //   businessContractFormId: any
  // ) => {
  //   const businessContractForm: any =
  //     await businessContractFormService.fetchBusinessContractFormById(
  //       businessContractFormId
  //     );
  //   dispatch(setBusinessContractForm(businessContractForm));
  //   history.push({ pathname: `/business-contracts/business-contract-edit` });
  // };

  // const rejectContract = (
  //   agencyId: any,
  //   contractId: any,
  //   businessContractFormId: any
  // ) => {
  //   dispatch(getByIdAndSetBusinessContractForm(businessContractFormId));
  //   if (window.confirm(`Poistetaanko ${currentBusinessContractForm.title}`)) {
  //     dispatch(refuseBusinessContractById(agencyId, contractId));
  //     dispatch(deleteBusinessContractForm(businessContractFormId, agencyId));
  //   }
  // };

  // const loadAndSendContract = (contractId: any) => {
  //   let status = "signed"
  //   dispatch(
  //     sendBusinessContract(
  //       contractId,
  //       status
  //     )
  //     // sendBusinessContract(
  //     //   agencyId,
  //     //   contractId,
  //     //   currentBusinessContractForm._id
  //     // )
  //   );
  //   dispatch(setAlert('Business contract form sent!', severity.Success));
  // };

  // // Print PDF
  // const handleTulostaLomaketta = async (formId: any) => {
  //   let businessContractForm: any =
  //     await businessContractFormService.fetchBusinessContractFormById(formId);
  //   console.log('businessContractForm ', businessContractForm);

  //   pdfMake.vfs = pdfFonts.pdfMake.vfs;

  //   // pdf content
  //   let content: any = [];

  //   let html = ReactDOMServer.renderToString(
  //     <Form currentForm={businessContractForm} />
  //   );
  //   let htmlForm: any = htmlToPdfmake(html);

  //   content.push(htmlForm);

  //   // pdf document
  //   var doc = {
  //     content: content,
  //   };

  //   pdfMake.createPdf(doc).download(businessContractForm.title);
  // };

  const [filter, setFilter] = React.useState('all')
  const handleChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
    event.preventDefault()
    setFilter(value)
  }

  const showContracts = (type: string) => {
    switch(type) {
      case 'all':
        return contracts.map((contract: any) => (
          <ContractAccordion key={contract._id} contract={contract} />
      ))
      default:
        return contracts.filter((contract) => {
          return contract.status === type
        })
        .map((contract: any) => (
          <ContractAccordion key={contract._id} contract={contract} />
      ))
    }
  }

  const contractStatuses = [
    {status: 'all'},
    {status: 'pending'},
    {status: 'signed'}
  ]

  if (contracts.length < 1) {
    return <p>{t('no_results')}</p>;
  } else
    return (
      <div>
        <div>
          <ToggleButtonGroup 
            classes={{ root: classes.buttonGroupRoot }}
            className={classes.buttonGroup}
            value={filter} 
            exclusive 
            onChange={handleChange}
            orientation='horizontal'
          >
            {contractStatuses.map(filter => (
              <ToggleButton key={filter.status} value={filter.status}>{filter.status}</ToggleButton>
            ))}
          </ToggleButtonGroup>
          <div>{showContracts(filter)}</div>
        </div>
      </div>
    );
};

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
}));

export default ListAccordionInBox;
