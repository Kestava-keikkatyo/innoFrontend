import React from 'react';
import { AgreementCode } from '../../types/types';
import CodeRow from './CodeRow';

interface CodeListProps {
  agreementCodes: Array<AgreementCode>;
}

const CodeList: React.FC<CodeListProps> = ({ agreementCodes }) => {
  return (
    <div>
      {agreementCodes.map((code, index) => (
        <CodeRow key={index} agreementCode={code} />
      ))}
    </div>
  );
};

export default CodeList;