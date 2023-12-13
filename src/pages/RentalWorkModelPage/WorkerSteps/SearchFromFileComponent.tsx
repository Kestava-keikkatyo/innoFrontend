import React from 'react'
import { useTranslation } from 'react-i18next'
import InteractiveListComponent from './InteractiveListComponent'

type Props = {
  inputString: string
}

const SearchFromFileComponent: React.FC<Props> = ({ inputString }) => {
  const { t } = useTranslation()
  const WorkerResponsibilityArray = t(inputString, { returnObjects: true }) as string[]

  return <InteractiveListComponent arrayName={WorkerResponsibilityArray} />
}

export default SearchFromFileComponent
