import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { format } from 'date-fns';
import {
  AccordionActions,
  IconButton,
  makeStyles,
  Theme,
  Tooltip,
  Divider,
} from '@material-ui/core';
import GigModal from './GigModal';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useTranslation } from 'react-i18next';
import allUsersService from '../../services/allUsersService';

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    width: '45%',
    marginBottom: '1%',
  },
  accordion: {
    marginBottom: '1%',
  },
}));

const ReceivedRequest: React.FC<any> = ({ workContracts, agencyWorkers }) => {
  /*
    acceptedAgency: false
    acceptedBusiness: false
    acceptedWorkers: []
    createdAt: "2021-11-29T10:53:25.913Z"
    detailedInfo: "siivoja triplan kauppakeskukseen"
    headline: "siivooja"
    requestWorkers: []
    validityPeriod: {startDate: '2021-11-01T00:00:00.000Z', endDate: '2021-11-30T00:00:00.000Z'}
    workerCount: 2
    _id: "61a4b125f3f5e15910e4c04e"
*/

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const classes = useStyles();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [displayModal, setDisplayModal] = React.useState(false);
  const handleCooperationOpen = () => {
    setDisplayModal(true);
  };

  const { t } = useTranslation();

  if (workContracts.docs === undefined) return <div> no results </div>;
  return (
    <div>
      {workContracts?.docs.map((workContract: any) => (
        <div key={workContract._id}>
          {workContract?.contracts?.map((contract: any) => (
            <div key={contract._id}>
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {contract.headline}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    Ajalle:{' '}
                    {format(
                      new Date(contract.validityPeriod.startDate),
                      'dd.MM.yyyy'
                    )}{' '}
                    -{' '}
                    {format(
                      new Date(contract.validityPeriod.endDate),
                      'dd.MM.yyyy'
                    )}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Divider className={classes.divider} />
                  <Typography>Kuvaus: {contract.detailedInfo}</Typography>
                  <Typography>
                    Tarvittavien työntekijöiden määrä: {contract.workerCount}{' '}
                    kappaletta
                  </Typography>
                </AccordionDetails>
                <AccordionActions>
                  <Tooltip title="Valitse työntekijät" placement="top" arrow>
                    <IconButton onClick={() => setDisplayModal(true)}>
                      <AddReactionIcon />
                    </IconButton>
                  </Tooltip>
                </AccordionActions>
              </Accordion>
              <GigModal
                displayModal={displayModal}
                closeModal={() => setDisplayModal(false)}
                workContractId="{workContract._id}"
                contract="{contract}"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ReceivedRequest;
