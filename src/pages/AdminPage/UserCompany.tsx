import React from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { IRootState } from "../../utils/store";



/**
 * @component
 * @desc A table to show all active work contracts.
 * @todo make table responsive
 */
const UserCompany = () => {
  const { data } = useSelector((state: IRootState) => state.user);
  //const dispatch = useDispatch();
  const workers = data;

  /*
  useEffect(() => {
    if (!workers.length) dispatch(s);
  }, [dispatch, workers.length]);
  */
  console.log("Työntekijät", workers);
  if (!workers.length)
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

  return (
    <TableContainer>
      <Table aria-label="searched workers">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Käyttäjänimi</TableCell>
            <TableCell align="right">Rooli</TableCell>
            <TableCell align="right">Sähköposti</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workers.map((workers: any) => (
            <TableRow key={workers._id}>
              <TableCell component="th" scope="row">
                {workers._id}
              </TableCell>
              <TableCell align="right">{workers.Käyttäjänimi}</TableCell>
              <TableCell align="right">{workers.Rooli}</TableCell>
              <TableCell align="right">{workers.Sähköposti}</TableCell>
              <TableCell padding="none" align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserCompany;

