import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core"
import React from "react"

const ReceivedRequest: React.FC<any> = ({ workContracts }) => {
  if (workContracts.docs === undefined) return <div> no results </div>

  return (
    <div>
      {workContracts?.docs.map((workContract: any) => (
        <Accordion key={workContract._id}>
          <AccordionSummary>aaa</AccordionSummary>
          <AccordionDetails>{workContract.docs}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

export default ReceivedRequest
