import { Chip } from '@mui/material'
import React from 'react'

export interface LifelineCardProps {
  step: any
}

const LifelineCard: React.FC<LifelineCardProps> = ({ step }) => {
  const getFormPart = () =>
    step.form ? (
      <>
        <h1 className='header6'>Lomake</h1>
        <Chip label={step.form.formName} />
        <h2 className='header6'>{step.form.title}</h2>
        <p>{step.form.description}</p>
      </>
    ) : (
      <></>
    )

  return (
    <>
      <div>
        Osapuolet:
        <Chip label={step.parties[0]} />
        <Chip label={step.parties[1]} />
      </div>
      {getFormPart()}
      <h1 className='header6'>{step.subtitle}</h1>
      <ul>
        {step.details.map((e: string, i: number) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      {step.notes ? (
        <>
          <h2 className='header6'>Notes:</h2>
          <ul>
            {step.notes.map((e: string, i: number) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default LifelineCard
