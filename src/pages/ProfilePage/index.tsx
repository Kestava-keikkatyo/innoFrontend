import {
  makeStyles
} from "@material-ui/core";
import React from "react";

import { useHistory } from "react-router-dom";
export interface InductionPageProps {}

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText("#eb5a00"),
    backgroundColor: "#eb5a00",
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  contact: {
    display: "flex",
    flexDirection: "row",
  },
  contactButton: {
    marginLeft: "1%",
  },
}));

const InductionPage: React.FC<InductionPageProps> = () => {
  const classes = useStyles();
  const history = useHistory();

  const editProfile = () => {
    history.push("/profile-edit");
  };

  return <></>;
};

export default InductionPage;
