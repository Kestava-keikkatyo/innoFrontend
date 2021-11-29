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
        <Accordion key={workContract._id}>
          <AccordionSummary>aaa</AccordionSummary>
          <AccordionDetails>
            {workContract?.contracts?.map((contract: any) => (
              <div key={contract._id}>
                <p>worker count {contract.workerCount}</p>
                <p>Gig details {contract.detailedInfo}</p>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default ReceivedRequest;
