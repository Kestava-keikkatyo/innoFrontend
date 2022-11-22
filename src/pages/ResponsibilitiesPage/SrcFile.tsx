import React from 'react';
import { useTranslation } from 'react-i18next';
import KlickForMoreInfoListComponent from './KlickForMoreInfoListComponent';

type Props = {
    inputString: string,
    inputIndex: number,
  }

const SrcFile: React.FC <Props> = ({inputString, inputIndex}) => {
    const { t } = useTranslation();
    const WorkerResponsibilityArray = (t(inputString, {returnObjects: true}) as string[]);
    const number=(inputIndex);

  
  
    return (
      <KlickForMoreInfoListComponent arrayName={WorkerResponsibilityArray} indexNumber={number}/> 
   
    );
    }

export default SrcFile;