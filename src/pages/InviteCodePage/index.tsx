import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  addAgreementCodes,
  getAgreementCodesByCreator,
  updateAgreementCodeMarkedValue,
} from '../../services/codeService'
import { AgreementCode } from '../../types/types'
import CodeList from './CodeList'
import NewCodeGeneration from './NewCodeGeneration'

const InviteCode = () => {
  const { t } = useTranslation()

  const [unmarkedAgreementCodes, setUnmarkedAgreementCodes] = useState<Array<AgreementCode>>([])
  const [markedAgreementCodes, setMarkedAgreementCodes] = useState<Array<AgreementCode>>([])

  useEffect(() => {
    const fetchAgreementCodes = async () => {
      const codes = await getAgreementCodesByCreator()
      const unmarkedCodes: Array<AgreementCode> = []
      const markedCodes: Array<AgreementCode> = []

      codes.forEach((code) => {
        if (code.marked) {
          markedCodes.push(code)
        } else {
          unmarkedCodes.push(code)
        }
      })

      setUnmarkedAgreementCodes(unmarkedCodes)
      setMarkedAgreementCodes(markedCodes)
    }

    fetchAgreementCodes()
  }, [])

  const handleGenerateNewCode = async (numberOfCodes: number) => {
    const newCodes = await addAgreementCodes(numberOfCodes)
    setUnmarkedAgreementCodes([...unmarkedAgreementCodes, ...newCodes])
  }

  const toggleMarkedStatus = async (index: number, marked: boolean) => {
    try {
      const codeToUpdate = marked ? markedAgreementCodes[index] : unmarkedAgreementCodes[index]
      if (codeToUpdate) {
        const updatedCode = await updateAgreementCodeMarkedValue(codeToUpdate._id, !marked)

        // Move the updated code between the unmarked and marked arrays
        if (marked) {
          setMarkedAgreementCodes(markedAgreementCodes.filter((_, i) => i !== index))
          setUnmarkedAgreementCodes([...unmarkedAgreementCodes, updatedCode])
        } else {
          setUnmarkedAgreementCodes(unmarkedAgreementCodes.filter((_, i) => i !== index))
          setMarkedAgreementCodes([...markedAgreementCodes, updatedCode])
        }
      } else {
        console.error('Agreement code not found')
      }
    } catch (error) {
      console.error('Error updating agreement code marked status:', error)
    }
  }

  return (
    <Box>
      <NewCodeGeneration onGenerateNewCode={handleGenerateNewCode} />
      <Typography variant='h5'>{t('unmarkedCodes')}:</Typography>
      <CodeList agreementCodes={unmarkedAgreementCodes} onToggleMarked={toggleMarkedStatus} />
      <Typography variant='h5'>{t('markedCodes')}:</Typography>
      <CodeList agreementCodes={markedAgreementCodes} onToggleMarked={toggleMarkedStatus} />
    </Box>
  )
}

export default InviteCode
