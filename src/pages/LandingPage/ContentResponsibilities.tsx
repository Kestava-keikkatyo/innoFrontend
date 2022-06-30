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
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import vastuualueet from '../../assets/tietopankki/vastuualueet.json';

export interface ContentResponsibilitiesProps {}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "fit-content",
  maxWidth: "50%",
  maxHeight: "90%",
  overflow: "auto",
  bgcolor: 'background.paper',
  p: 4,
};

const ContentResponsibilities: React.FC<ContentResponsibilitiesProps> = () => {
  const [open1, modal1] = React.useState(false);
  const [open2, modal2] = React.useState(false);
  const [open3, modal3] = React.useState(false);

  const handleOpen1 = () => modal1(true);
  const close1 = () => modal1(false);
  const handleOpen2 = () => modal2(true);
  const close2 = () => modal2(false);
  const handleOpen3 = () => modal3(true);
  const close3 = () => modal3(false);

  return (
    <Container style={{backgroundColor: "white"}}>
      <div className='spacing' />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h3">Vastuualueet</Typography>
        </Grid>
        <Grid item>
          <Link to="/databank" style={{ textDecoration: 'none' }}>
            <Button color="primary" variant="contained">
              Lue lisää vastuualueista
            </Button>
          </Link>
        </Grid>
      </Grid>
      <div style={{margin: "0.5rem"}} />
      <Grid container className="landing-part3">
        <Grid item xs={12} md={4} style={{marginBottom: "1rem"}}>
          <div className="responsibilty-card">
            <CardHeader
              action={
                <Button variant="outlined" color="primary" onClick={handleOpen1}>
                  Lue lisää
                </Button>
              }
              title="Työntekijä"
            />
            <CardContent>
              <List component="nav" aria-label="mailbox folders">
                <Divider />
                {vastuualueet.worker.map((e, i) => (
                  <ListItem key={i} divider>
                    <ListItemText primary={`${i + 1}. ${e.tip}`} />
                  </ListItem>
                ))}
              </List>
              {/* Worker Modal Start */}
              <Modal
              open={open1}
              onClose={close1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
                <Box sx={style} className={"modal"}>
                  {/* Add close button? */}
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Työntekijä
                  </Typography>
                  <List id="modal-modal-description">
                    <Divider />
                    {vastuualueet.worker2.map((e, i) => (
                      <ListItem key={i} divider>
                        <ListItemText primary={`${i + 1}. ${e.tip}`} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Modal>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{marginBottom: "1rem"}}>
          <div className="responsibilty-card">
            <CardHeader className="ContentContainer"
              action={
                <Button variant="outlined" color="primary" onClick={handleOpen2}>
                  Lue lisää
                </Button>
              }
              title="Käyttäjäyritys"
            />
            <CardContent>
              <List component="nav" aria-label="mailbox folders">
                <Divider />
                {vastuualueet.business.map((e, i) => (
                  <ListItem key={i} divider>
                    <ListItemText primary={`${i + 1}. ${e.tip}`} />
                  </ListItem>
                ))}
              </List>
              {/* Business Modal Start */}
              <Modal
              open={open2}
              onClose={close2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
                <Box sx={style} className={"modal"}>
                  {/* Add close button? */}
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Käyttäjäyritys
                  </Typography>
                  <List id="modal-modal-description">
                    <Divider />
                    {vastuualueet.business2.map((e, i) => (
                      <ListItem key={i} divider>
                        <ListItemText primary={`${i + 1}. ${e.tip}`} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Modal>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={{marginBottom: "1rem"}}>
          <div className="responsibilty-card">
            <CardHeader className="ContentContainer"
              action={
                <Button variant="outlined" color="primary" onClick={handleOpen3}>
                  Lue lisää
                </Button>
              }
              title="Vuokratyöyritys"
            />
            <CardContent>
              <List component="nav" aria-label="mailbox folders">
                <Divider />
                {vastuualueet.agency.map((e, i) => (
                  <ListItem key={i} divider>
                    <ListItemText primary={`${i + 1}. ${e.tip}`} />
                  </ListItem>
                ))}
              </List>
              {/* Agency Modal Start */}
              <Modal
              open={open3}
              onClose={close3}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
                <Box sx={style} className={"modal"}>
                  {/* Add close button? */}
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Vuokratyöyritys
                  </Typography>
                  <List id="modal-modal-description">
                    <Divider />
                    {vastuualueet.agency2.map((e, i) => (
                  <ListItem key={i} divider>
                    <ListItemText primary={`${i + 1}. ${e.tip}`} />
                  </ListItem>
                ))}
                  </List>
                </Box>
              </Modal>
            </CardContent>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentResponsibilities;
