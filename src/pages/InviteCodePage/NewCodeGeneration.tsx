import React, { useState } from 'react'
import { addAgreementCodes } from '../../services/codeService'
import { Button, TextField, Box, Typography, IconButton } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

interface NewCodeGenerationProps {
  onGenerateNewCode: (numberOfCodes: number) => void
}

const NewCodeGeneration: React.FC<NewCodeGenerationProps> = ({ onGenerateNewCode }) => {
  const [numberOfCodes, setNumberOfCodes] = useState<number>(0)
  const { t } = useTranslation()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10)

    if (!isNaN(newValue) && newValue >= 0 && newValue <= 100) {
      setNumberOfCodes(newValue)
    }
  }

  const increment = () => {
    setNumberOfCodes((prev) => Math.min(prev + 1, 100))
  }

  const decrement = () => {
    setNumberOfCodes((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = () => {
    if (numberOfCodes > 0) {
      onGenerateNewCode(numberOfCodes)
      setNumberOfCodes(0)
    } else {
      alert(t('invalidNumberOfCodes'))
    }
  }

  return (
    <div>
      <Typography variant='h4' component='h1' gutterBottom>
        {t('invitecodes_create')}
      </Typography>
      <Box display='flex' alignItems='center'>
        <Typography variant='h6' component='label' htmlFor='number-of-codes' gutterBottom>
          {t('numberOfCodes')}:
        </Typography>
        <TextField
          id='number-of-codes'
          type='text'
          inputProps={{ pattern: '\\d*' }}
          value={numberOfCodes}
          onChange={handleChange}
          variant='standard'
          sx={{ marginLeft: '1rem', width: '5rem' }}
        />
        <Box ml={1}>
          <IconButton onClick={increment} color='primary' size='small'>
            <Add />
          </IconButton>
          <IconButton onClick={decrement} color='primary' size='small'>
            <Remove />
          </IconButton>
        </Box>
        <Box ml={2}>
          <Button onClick={handleSubmit} variant='contained' color='primary'>
            {t('invitecodes_create')}
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default NewCodeGeneration
