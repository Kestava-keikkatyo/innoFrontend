import React from 'react';
import { useTranslation } from 'react-i18next';
import InterActiveListComponent from './GoodPractices/InterActiveListComponent';

type Props = {
    inputString: string,
  }

const WorkerResponsibility: React.FC <Props> = ({inputString}) => {
    const { t } = useTranslation();
    const WorkerResponsibilityArray = (t(inputString, {returnObjects: true}) as string[]);
  
    return (
      <InterActiveListComponent arrayName={WorkerResponsibilityArray}/> 
    );
    }

export default WorkerResponsibility;