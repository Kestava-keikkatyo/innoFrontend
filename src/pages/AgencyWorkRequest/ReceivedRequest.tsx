import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core"
import React from "react"

const ReceivedRequest: React.FC<any> = ({ contracts }) => {
  return (
    <div>
      {contracts.map((contract: any) => (
        <Accordion>
          <AccordionSummary>aaa</AccordionSummary>
          <AccordionDetails>{contract}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

export default ReceivedRequest
