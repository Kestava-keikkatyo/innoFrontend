import React from "react";
import {
  AccordionActions,
} from "@material-ui/core";

import Button from "@material-ui/core/Button";

const BusinessContractsButtons = () => {

    return (
        <AccordionActions>
        <Button>Hylkää sopimus</Button>
        <Button>Esikatsele lomaketta</Button>
        <Button>Tulosta pdf</Button>
        <Button>Lataa ja lähetä allekirjoitettu sopimus</Button>
      </AccordionActions>
    )

}
export default BusinessContractsButtons