import React, { useEffect } from "react";
import {
  AccordionActions,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { getFormById } from "../../actions/formActions";
import { IRootState } from "../../utils/store";
import { sendBusinessContract, deleteBusinessContractById } from "../../actions/businessContractActions";
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from "html-to-pdfmake";
import ReactDOMServer from "react-dom/server";
import formServices from "../../services/formServices";
import Form from "../FormsPage/Form";

export interface BusinessContractsButtonsProps {
    formId?: string,
    contractId: string
}

const BusinessContractsButtons: React.FC<BusinessContractsButtonsProps> = ({formId, contractId}) => {

    

    const currentForm:any = useSelector((state: IRootState ) => state.form)
    const dispatch = useDispatch()
    /*
    useEffect(() => {
       dispatch(getFormById(formId))
      }, [dispatch])

      */
    const handleEsitteleLomaketta =  () => {
        console.log('currentForm', currentForm)

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

function setAlert(arg0: string): any {
  throw new Error("Function not implemented.");
}
function agencyId(_id: any, agencyId: any): (dispatch: any) => Promise<void> {
  throw new Error("Function not implemented.");
}

