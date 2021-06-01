import React, { useEffect } from "react";
import {
  AccordionActions,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { getFormById } from "../../actions/formActions";
import { IRootState } from "../../utils/store";
import { useHistory } from "react-router"

export interface BusinessContractsButtonsProps {
    formId: string
}

const BusinessContractsButtons: React.FC<BusinessContractsButtonsProps> = ({formId}) => {

    const currentForm:any = useSelector((state: IRootState ) => state.form)

    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
       dispatch(getFormById(formId))
      }, [dispatch, formId])

    const handleEsitteleLomaketta =  () => {
        console.log('currentForm', currentForm)
        history.push(`/business-contract-preview`)
    }

    return (
        <AccordionActions>
        <Button>Hylkää sopimus</Button>
        <Button onClick={handleEsitteleLomaketta}>
          Esikatsele lomaketta
        </Button>
        <Button>Tulosta pdf</Button>
        <Button>Lataa ja lähetä allekirjoitettu sopimus</Button>
      </AccordionActions>
    )

}
export default BusinessContractsButtons