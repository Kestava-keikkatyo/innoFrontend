import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import Typography from 'material-ui/styles/typography';
import React from 'react';

const ReceivedRequest: React.FC<any> = ({ workContracts }) => {
  if (workContracts.docs === undefined) return <div> no results </div>;

  return (
    <div>
      {workContracts?.docs.map((workContract: any) => (
        <div key={workContract._id}>
          {workContract?.contracts?.map((contract: any) => (
            <Accordion key={contract._id}>
              <AccordionSummary>{contract.headline}</AccordionSummary>
              <AccordionDetails>
                <p>worker count {contract.workerCount}</p>
                <br />
                <p>Gig details {contract.detailedInfo}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ReceivedRequest;
