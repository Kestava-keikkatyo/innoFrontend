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
import { useTranslation } from 'react-i18next'


/**
 * @component
 * @desc A table to show all active work contracts.
 * @todo make table responsive
 */
const Agency = () => {
  const { data } = useSelector((state: IRootState) => state.user);
  //const dispatch = useDispatch();
  const workers = data;
  const { t } = useTranslation()
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
        {t("no_results")}
      </Typography>
    );

  return (
    <TableContainer>
      <Table aria-label="searched workers">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">{t("username")}</TableCell>
            <TableCell align="right">{t("role")}</TableCell>
            <TableCell align="right">{t("email")}</TableCell>
            <TableCell align="right">{t("remove")}</TableCell>
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

export default Agency;