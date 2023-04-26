import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import NewCodeGeneration from './NewCodeGeneration';

const InviteCode = () => {
  const { t } = useTranslation();

  return (
    <div>
      <NewCodeGeneration />
    </div>
  );
};

export default InviteCode;
