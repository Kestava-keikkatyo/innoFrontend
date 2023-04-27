import React from 'react';
import { AgreementCode } from '../../types/types';

interface CodeRowProps {
  agreementCode: AgreementCode;
}

const CodeRow: React.FC<CodeRowProps> = ({ agreementCode }) => {
  return (
    <div>
      <p>Code: {agreementCode.code}</p>
      <p>Created At: {agreementCode.createdAt.toLocaleString()}</p>
    </div>
  );
};

export default CodeRow;