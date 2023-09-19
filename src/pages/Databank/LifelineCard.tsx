import React from 'react'

export interface LifelineCardProps {
  step: any
}

const LifelineCard: React.FC<LifelineCardProps> = ({ step }) => {
  const getFormPart = () =>
    step.form ? (
      <>
        <p>{step.form.description}</p>
        <h1
          className='header6'
          style={{
            textTransform: 'uppercase',
            backgroundColor: '#F47D20',
            display: 'inline-block',
            padding: '5px',
          }}
        >
          Lomakkeet
        </h1>
      </>
    ) : (
      <></>
    )

  return <>{getFormPart()}</>
}

export default LifelineCard
