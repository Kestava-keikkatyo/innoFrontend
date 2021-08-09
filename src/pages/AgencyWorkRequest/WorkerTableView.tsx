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

const WorkerTableView: React.FC<any> = ({agencyWorkers}) => {
  console.log(agencyWorkers)
    return (
        <TableContainer>
          <Table aria-label="searched workers">
            <TableHead>
              <TableRow>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">email</TableCell>
                <TableCell align="right">add</TableCell>
                <TableCell align="right">remove</TableCell>
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