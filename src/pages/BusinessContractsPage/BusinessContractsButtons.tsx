import React, { useEffect } from "react";
import {
  AccordionActions,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { getFormById } from "../../actions/formActions";
import { IRootState } from "../../utils/store";
import { useHistory } from "react-router"
import { deleteBusinessContractById, sendBusinessContract } from "../../actions/businessContractActions";
export interface BusinessContractsButtonsProps {
    formId: string,
    contractId: string
}

const BusinessContractsButtons: React.FC<BusinessContractsButtonsProps> = ({formId, contractId}) => {



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

    const rejectContract = () => {
      console.log('currentForm', currentForm)
      if (window.confirm(`Poistetaanko ${currentForm.title}`)) {
        dispatch(deleteBusinessContractById(contractId));
      }
    }


    const loadAndSendContract = () => {
        console.log("contract id ",contractId)
        dispatch(sendBusinessContract(contractId))
    }



    return (
        <AccordionActions>
        <Button onClick={rejectContract}>Hylkää sopimus</Button>
        <Button onClick={handleEsitteleLomaketta}>Esikatsele lomaketta</Button>
        <Button>Tulosta pdf</Button>
        <Button onClick={loadAndSendContract}>Lataa ja lähetä allekirjoitettu sopimus</Button>
      </AccordionActions>
    )

}
export default BusinessContractsButtons


