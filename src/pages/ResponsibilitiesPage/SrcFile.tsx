import React from 'react';
import { useTranslation } from 'react-i18next';
import ExpandableList from './ExpandableList';
import { createTheme } from '@mui/material';

type Props = {
  inputString: string,
  inputIndex: number,
}

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, serif',
    fontSize: 15,
    allVariants: {
      color: "black"
    },
  },
});

const SrcFile: React.FC<Props> = ({ inputString, inputIndex }) => {
  const { t } = useTranslation();
  const WorkerResponsibilityArray = (t(inputString, { returnObjects: true }) as string[]);
  const number = (inputIndex);
  return (
    <ExpandableList arrayName={WorkerResponsibilityArray} indexNumber={number} />
  );
}

export default SrcFile;