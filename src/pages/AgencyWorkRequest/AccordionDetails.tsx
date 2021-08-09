import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import { AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Typography}  from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
  })
);


const RequestInfo: React.FC<any> = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label=""
          />
          <Typography className={classes.heading}>Corsair</Typography>
          
          <Typography>Siivooja yrityksellemme</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Etsimme siivoojaa kesäksi ajalle 1.5.2021 - 1.8.2021
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography variant="body2">
            Tarkoituksena olisi löytää siivooja, jolla työkokemusta ainakin
            2-vuotta
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography variant="body2">
            Siivojan työ koostuu 8h päivistä, joissa käydään läpi omistamiamme
            kiinteistöjen siivoamista
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography variant="body2">
            Aikaisemmin meillä on työskennellyt Jarmo Test ja voisitko kysyä
            onko hän vielä vapaana?
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography variant="body2">
            Viestiä voi laittaa sähköpostiin: test@test.com ja Viestiä numeroon:
            040 000 12
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RequestInfo;
