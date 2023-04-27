import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAgreementCodesByCreator } from '../../services/codeService';
import { AgreementCode } from '../../types/types';
import CodeList from './CodeList';
import NewCodeGeneration from './NewCodeGeneration';

const InviteCode = () => {
  const { t } = useTranslation();

  const [unmarkedAgreementCodes, setUnmarkedAgreementCodes] = useState<Array<AgreementCode>>([]);
  const [markedAgreementCodes, setMarkedAgreementCodes] = useState<Array<AgreementCode>>([]);

  useEffect(() => {
    const fetchAgreementCodes = async () => {
      const codes = await getAgreementCodesByCreator();
      const unmarkedCodes: Array<AgreementCode> = [];
      const markedCodes: Array<AgreementCode> = [];

      codes.forEach(code => {
        if (code.marked) {
          markedCodes.push(code);
        } else {
          unmarkedCodes.push(code);
        }
      });

      setUnmarkedAgreementCodes(unmarkedCodes);
      setMarkedAgreementCodes(markedCodes);
    };

    fetchAgreementCodes();
  }, []);

  return (
    <div>
      <NewCodeGeneration />
      <h3>Unmarked Codes:</h3>
      <CodeList agreementCodes={unmarkedAgreementCodes} />
      <h3>Marked Codes:</h3>
      <CodeList agreementCodes={markedAgreementCodes} />
    </div>
  );
};

export default InviteCode;
