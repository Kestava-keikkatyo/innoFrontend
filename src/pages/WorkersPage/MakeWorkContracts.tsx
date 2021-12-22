import React from "react"
import { Table, TableRow, TableContainer, TableCell, TableHead, TableBody, IconButton, Typography } from "@material-ui/core"
import { Add } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'

const MakeWorkContracts:React.FC<{madeContracts:[],addWorker:Function}> = ({madeContracts,addWorker}) => {
  const contracts = madeContracts 
  const { t } = useTranslation()
  if (!contracts.length) {
      return (
        <Typography style={{ padding: '1rem' }} variant="h6" align="center" className="text-secondary">
          {t("no_results")}
        </Typography>
      )
  }

  return (
    <TableContainer>
      <Table aria-label="searched workers">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">add</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts.map((worker: any) => (
            <TableRow key={worker._id}>
              <TableCell component="th" scope="row">{worker._id}</TableCell>
              <TableCell align="right">{worker.name}</TableCell>
              <TableCell align="right">{worker.email}</TableCell>
              <TableCell padding="none" align="right">
                <IconButton
                  aria-label="add to organization"
                  color="secondary"
                  onClick={() => addWorker(worker)}>
                  <Add />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

}

export default MakeWorkContracts