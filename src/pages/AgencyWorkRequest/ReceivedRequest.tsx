import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { format } from "date-fns"

const ReceivedRequest: React.FC<any> = ({ workContracts }) => {
  /*
    acceptedAgency: false
    acceptedBusiness: false
    acceptedWorkers: []
    createdAt: "2021-11-29T10:53:25.913Z"
    detailedInfo: "siivoja triplan kauppakeskukseen"
    headline: "siivooja"
    requestWorkers: []
    validityPeriod: {startDate: '2021-11-01T00:00:00.000Z', endDate: '2021-11-30T00:00:00.000Z'}
    workerCount: 2
    _id: "61a4b125f3f5e15910e4c04e"
*/

  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }
  if (workContracts.docs === undefined) return <div> no results </div>
  return (
    <div>
      {workContracts?.docs.map((workContract: any) => (
        <div key={workContract._id}>
          {workContract?.contracts?.map((contract: any) => (
            <Accordion
              key={contract._id}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {contract.headline}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Ajalle:{" "}
                  {format(
                    new Date(contract.validityPeriod.startDate),
                    "dd.MM.yyyy"
                  )}{" "}
                  -{" "}
                  {format(
                    new Date(contract.validityPeriod.endDate),
                    "dd.MM.yyyy"
                  )}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Kuvaus: {contract.detailedInfo}</Typography>
                <Typography>
                  Tarvittavien työntekijöiden määrä: {contract.workerCount}{" "}
                  kappaletta
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ReceivedRequest
