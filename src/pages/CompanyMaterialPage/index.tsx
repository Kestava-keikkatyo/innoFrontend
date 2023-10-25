import React, { useEffect, useState } from 'react'
import MaterialTable from './MaterialTable'
import FileChooser from './FileChooser'
import { getFilesByCreator, getFilesById } from '../../services/companyMaterialService'
import contracsService from '../../services/contractsService'
import { useSelector } from 'react-redux'
import { CompanyFile, roles } from '../../types/types'
import { IRootState } from '../../utils/store'

const CompanyMaterialsPage: React.FC = () => {
  const [files, setFiles] = useState<CompanyFile[]>([])
  const { data } = useSelector((state: IRootState) => state.user)
  const role = data.role

  {
    role === roles.Worker &&
      useEffect(() => {
        const filesFromServer: CompanyFile[] = []

        const fetchFiles = async () => {
          const agreementsFromServer =
            await contracsService.fetchEmploymentContractsAsWorkerOrBusiness()

          for (const i in agreementsFromServer) {
            filesFromServer.push(...(await getFilesById(agreementsFromServer[i].business._id)))
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
      {role !== roles.Worker && <FileChooser setFiles={setFiles} files={files} />}
      <MaterialTable files={files} />
    </div>
  )
}

export default CompanyMaterialsPage
