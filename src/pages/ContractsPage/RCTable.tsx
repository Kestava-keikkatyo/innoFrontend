import React from "react";
import {
  Typography,
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableRow,
  TableBody,
  IconButton,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import InfoModal from './InfoModal'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
      padding: theme.spacing(1),


    },
    buttonProperties: {
      color: "#f50057",
    },
    companyHeader: {
      textAlign: "center",
    },
  })
);

const RCTable = (prop: {
  contracts: [];
  contractId: string;
  acceptContract: Function;
  declineContract: Function;
}) => {
  const classes = useStyles();

  const [displayModal, setDisplayModal] = React.useState(false)

  const handleOpen = () => {
    setDisplayModal(true)
  };

  const { contracts, contractId, acceptContract, declineContract } = prop;

  if (!contracts.length)
    return (
      <Typography
        style={{ padding: "1rem" }}
        variant="h6"
        align="center"
        className="text-secondary"
      >
        no results
      </Typography>
    );
  else
    return (
      <TableContainer>
        <Table aria-label="searched workers">
          <TableHead>
            <TableRow>
              <TableCell align="center">Accept</TableCell>
              <TableCell align="center">Info</TableCell>
              <TableCell align="center">Lähetä takaisin</TableCell>
              <TableCell align="center">Decline</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log("contracts",contracts)}
            {contracts.map((contract: any) => (
              <TableRow key={contract._id}>

                <TableCell padding="none" align="center">
                  <IconButton
                    aria-label="accept contract"
                    color="secondary"
                    onClick={() =>
                      acceptContract(
                        contractId,
                        contract.businessId._id,
                        contract.formId
                      )
                    }
                  >
                    <DoneIcon />
                  </IconButton>
                </TableCell>

                <TableCell align="center">
                    <IconButton type="button" onClick={handleOpen}>
                      <NotificationsIcon className={classes.buttonProperties} />
                    </IconButton>
                    <InfoModal
                      displayModal={displayModal}
                      closeModal={() => setDisplayModal(false)}
                      contract={contract}
                    />
                </TableCell>
                <TableCell padding="none" align="center">
                  <IconButton
                    aria-label="decline contract"
                    color="secondary"
                    onClick={() =>
                      declineContract(contractId, contract.businessId._id)
                    }
                  >
                    <ClearIcon />
                  </IconButton>
                </TableCell>

                <TableCell align="right">{contract.businessId.name}</TableCell>

                <TableCell align="right">{contract.businessId.email}</TableCell>
                <TableCell align="right">{contract.businessId.userType}</TableCell>
                <TableCell align="right">{"Pending"}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default RCTable;
