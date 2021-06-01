import React, { useEffect } from "react";
import {
  AccordionActions,
} from "@material-ui/core";

import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { setFormById } from "../../actions/formActions";
import { IRootState } from "../../utils/store";

export interface BusinessContractsButtonsProps {
    formId: string
}

const BusinessContractsButtons: React.FC<BusinessContractsButtonsProps> = ({formId}) => {

    const currentForm:any = useSelector((state: IRootState ) => state.form)

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(setFormById(formId))
      }, [dispatch])

    const handleEsitteleLomaketta =  () => {
        console.log('currentForm', currentForm)


    }

    return (
        <AccordionActions>
        <Button>Hylkää sopimus</Button>
        <Button onClick={handleEsitteleLomaketta}>Esikatsele lomaketta</Button>
        <Button>Tulosta pdf</Button>
        <Button>Lataa ja lähetä allekirjoitettu sopimus</Button>
      </AccordionActions>
    )

}
export default BusinessContractsButtons