import { Chip } from '@material-ui/core'
import React from 'react'

export interface LifelineCardProps {
  step: any
}

const LifelineCard: React.FC<LifelineCardProps> = ({ step }) => {
  const getFormPart = () =>
    step.form ? (
      <>
        <h4>Lomake</h4>
        <Chip label={step.form.formName} />
        <h5>{step.form.title}</h5>
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
      <h4>{step.subtitle}</h4>
      <ul>
        {step.details.map((e: string, i: number) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      {step.notes ? (
        <>
          <h4>Notes:</h4>
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
