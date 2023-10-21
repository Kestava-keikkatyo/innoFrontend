import React, { useEffect, useState } from 'react'
import { Box, Typography, InputLabel, IconButton, Input, List, ListItem } from '@mui/material'
import { Add } from '@mui/icons-material'
import MaterialTable from './MaterialTable'
import SearchBar from './SearchBar'
import FileChooser from './FileChooser'
import { getFilesByCreator, getFilesById } from '../../services/companyMaterialService'
import contracsService from '../../services/contractsService'
import { useSelector } from 'react-redux'
import { CompanyFile, roles } from '../../types/types'
import { IRootState } from '../../utils/store'
import { id } from 'date-fns/locale'

const CompanyMaterialsPage: React.FC = () => {
  const [files, setFiles] = useState<CompanyFile[]>([])
  const { data } = useSelector((state: IRootState) => state.user)
  const role = data.role

  {
    role === roles.Worker &&
      useEffect(() => {
        let filesFromServer: CompanyFile[]

        const fetchFiles = async () => {
          const agreementsFromServer =
            await contracsService.fetchEmploymentContractsAsWorkerOrBusiness()
          for (let i in agreementsFromServer) {
            let tempfiles = await getFilesById(agreementsFromServer[i].business)
            filesFromServer.push(...tempfiles)
          }

          setFiles(filesFromServer)
        }

        fetchFiles()
      }, [])
  }
  {
    role !== roles.Worker &&
      useEffect(() => {
        const fetchFiles = async () => {
          const filesFromServer = await getFilesByCreator()
          setFiles(filesFromServer)
        }

        fetchFiles()
      }, [])
  }

  return (
    <div>
      {role !== roles.Worker && <FileChooser />}
      <MaterialTable files={files} />
    </div>
  )
}

export default CompanyMaterialsPage
