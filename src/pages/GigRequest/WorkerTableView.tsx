import React from 'react'
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@material-ui/core/";
import { AddIcon } from '@material-ui/data-grid';
import ClearIcon from '@material-ui/icons/Clear';
import { useTranslation } from 'react-i18next'

const WorkerTableView: React.FC<any> = ({agencyWorkers}) => {
  const { t } = useTranslation()

  console.log(agencyWorkers)
  
    return (
        <TableContainer>
          <Table aria-label="searched workers">
            <TableHead>
              <TableRow>
                <TableCell align="right">{t('name')}</TableCell>
                <TableCell align="right">{t('email')}</TableCell>
                <TableCell align="right">{t('add')}</TableCell>
                <TableCell align="right">{t('remove')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {agencyWorkers.map((value: any) => (  
                <TableRow key={value._id}>
                  <TableCell align="right">{value.name}</TableCell>
                  <TableCell align="right">{value.email}</TableCell>
                  <TableCell padding="none" align="right">
                    <IconButton
                      aria-label="add"
                      color="secondary"
                      onClick={() => console.log("clicked")}
                    >
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell padding="none" align="right">
                    <IconButton
                      aria-label="add"
                      color="secondary"
                      onClick={() => console.log("clicked")}
                    >
                      <ClearIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    };


export default WorkerTableView