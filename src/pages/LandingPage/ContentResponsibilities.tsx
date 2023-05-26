import {
  Button,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Modal,
  Box,
  IconButton,
  IconButtonProps,
  Collapse,
} from '@mui/material';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import responsibilities_fi from '../../assets/tietopankki/vastuualueet.json';
import responsibilities_en from '../../assets/tietopankki/vastuualueet_en.json';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import {styled} from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  maxWidth: '50%',
  maxHeight: '90%',
  overflow: 'auto',
  bgcolor: 'background.paper',
  p: 4,
};

const ContentResponsibilities: React.FC = () => {
  const [workerModal, setWorkerModal] = useState(false);
  const [agencyModal, setAgencyModal] = useState(false);
  const [businessModal, setBusinessModal] = useState(false);
  const [workerExpand, setWorkerExpand] = useState(window.innerWidth >= 900);
  const [agencyExpand, setAgencyExpand] = useState(window.innerWidth >= 900);
  const [businessExpand, setBusinessExpand] = useState(window.innerWidth >= 900);

  const handleWorkerModal = () => setWorkerModal(!workerModal);
  const handleAgencyModal = () => setAgencyModal(!agencyModal);
  const handleBusinessModal = () => setBusinessModal(!businessModal);
  const handleWorkerExpand = () => setWorkerExpand(!workerExpand);
  const handleAgencyExpand = () => setAgencyExpand(!agencyExpand);
  const handleBusinessExpand = () => setBusinessExpand(!businessExpand);

  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const { t } = useTranslation();
  const responsibilities = i18next.language === 'en' ? responsibilities_en : responsibilities_fi;

  return (
    <Container style={{backgroundColor: 'white'}}>
      <div className='spacing' />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h3" className="landing-title">{t('areas_of_responsibility')}</Typography>
        </Grid>
        <Grid item>
          <Link to="/databank/lifeline" style={{ textDecoration: 'none' }}>
            <Button color="primary" variant="contained">
              {t('areas_of_responsibility_button')}
            </Button>
          </Link>
        </Grid>
      </Grid>
      <div style={{margin: '0.5rem'}} />
      <Grid container>
        <Grid item xs={12} md={4} style={{marginBottom: '1rem'}}>
          <div className="responsibilty-card">
            <div style={{ display: 'flex' }} onClick={handleWorkerExpand}>
              <CardHeader title={t('worker')} />
              <ExpandMore
                  expand={workerExpand}
                  aria-expanded={workerExpand}
                  aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </div>
            <Collapse in={workerExpand} timeout="auto" unmountOnExit>
              <CardContent>
                <List component="nav" aria-label="mailbox folders">
                  <Divider />
                  {responsibilities.worker.map((e, i) => (
                      <ListItem key={i} divider>
                        <ListItemText primary={`${i + 1}. ${e.tip}`} />
                      </ListItem>
                  ))}
                  <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="outlined" color="primary" onClick={handleWorkerModal}>
                      {t('read_more')}
                    </Button>
                  </ListItem>
                </List>
                {/* Worker Modal Start */}
                <Modal
                    open={workerModal}
                    onClose={handleWorkerModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                  <Box sx={style} className={'modal'}>
                    {/* Add close button? */}
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                      {t('worker')}
                    </Typography>
                    <List id="modal-modal-description">
                      <Divider />
                      {/* Worker responsibilities list */}
                      {responsibilities.worker2.map((e, i) => (
                          <ListItem key={i} divider>
                            <ListItemText primary={`${i + 1}. ${e.tip}`} />
                          </ListItem>
                      ))}
                    </List>
                  </Box>
                </Modal>
              </CardContent>
            </Collapse>
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{marginBottom: '1rem'}}>
          <div className="responsibilty-card">
            <div style={{ display: 'flex' }} onClick={handleBusinessExpand}>
              <CardHeader className="ContentContainer" style={{ textAlign: 'center' }} title={t('business')} />
              <ExpandMore
                  expand={businessExpand}
                  aria-expanded={businessExpand}
                  aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </div>
            <Collapse in={businessExpand} timeout="auto" unmountOnExit>
              <CardContent>
                <List component="nav" aria-label="mailbox folders">
                  <Divider />
                  {responsibilities.business.map((e, i) => (
                      <ListItem key={i} divider>
                        <ListItemText primary={`${i + 1}. ${e.tip}`} />
                      </ListItem>
                  ))}
                  <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="outlined" color="primary" onClick={handleBusinessModal}>
                      {t('read_more')}
                    </Button>
                  </ListItem>
                </List>
                {/* Business Modal Start */}
                <Modal
                    open={businessModal}
                    onClose={handleBusinessModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                  <Box sx={style} className={'modal'}>
                    {/* Add close button? */}
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                      {t('business')}
                    </Typography>
                    <List id="modal-modal-description">
                      <Divider />
                      <Typography variant="h6" component="h2">
                        {t('shared_responsibilities')}
                      </Typography>
                      <Divider />
                      {/* Yhtenäiset vastuut lista */}
                      {responsibilities.yhtenäinen.map((e, i) => (
                          <ListItem key={i} divider>
                            <ListItemText primary={`${i + 1}. ${e.tip}`} />
                          </ListItem>
                      ))}
                      <Typography variant="h6" component="h2">
                        {t('business_responsibilities')}
                      </Typography>
                      <Divider />
                      {/* Business responsibilities list */}
                      {responsibilities.business2.map((e, i) => (
                          <ListItem key={i} divider>
                            <ListItemText primary={`${i + 1}. ${e.tip}`} />
                          </ListItem>
                      ))}
                    </List>
                  </Box>
                </Modal>
              </CardContent>
            </Collapse>
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{marginBottom: '1rem'}}>
          <div className="responsibilty-card">
            <div style={{ display: 'flex' }} onClick={handleAgencyExpand}>
              <CardHeader className="ContentContainer" style={{ textAlign: 'center' }} title={t('agency')} />
              <ExpandMore
                  expand={agencyExpand}
                  aria-expanded={agencyExpand}
                  aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </div>
            <Collapse in={agencyExpand} timeout="auto" unmountOnExit>
              <CardContent>
                <List component="nav" aria-label="mailbox folders">
                  <Divider />
                  {responsibilities.agency.map((e, i) => (
                      <ListItem key={i} divider>
                        <ListItemText primary={`${i + 1}. ${e.tip}`} />
                      </ListItem>
                  ))}
                  <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="outlined" color="primary" onClick={handleAgencyModal}>
                      {t('read_more')}
                    </Button>
                  </ListItem>
                </List>
                {/* Agency Modal Start */}
                <Modal
                    open={agencyModal}
                    onClose={handleAgencyModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                  <Box sx={style} className={'modal'}>
                    {/* Add close button? */}
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                      {t('agency')}
                    </Typography>
                    <List id="modal-modal-description">
                      <Divider />
                      <Typography variant="h6" component="h2">
                        {t('shared_responsibilities')}
                      </Typography>
                      <Divider />
                      {/* Yhtenäiset vastuut lista */}
                      {responsibilities.yhtenäinen.map((e, i) => (
                          <ListItem key={i} divider>
                            <ListItemText primary={`${i + 1}. ${e.tip}`} />
                          </ListItem>
                      ))}
                      <Typography variant="h6" component="h2">
                        {t('agency_responsibility')}
                      </Typography>
                      <Divider />
                      {/* Agency responsibilities list */}
                      {responsibilities.agency2.map((e, i) => (
                          <ListItem key={i} divider>
                            <ListItemText primary={`${i + 1}. ${e.tip}`} />
                          </ListItem>
                      ))}
                    </List>
                  </Box>
                </Modal>
              </CardContent>
            </Collapse>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentResponsibilities;
