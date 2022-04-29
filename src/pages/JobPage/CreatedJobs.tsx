import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import {
  Typography, 
  Tooltip,
  useMediaQuery, 
  useTheme,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  IconButton,
  Box,
  TablePagination,
  
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';

import { DeleteJobById, fetchAllJobsForAgency } from "../../actions/jobActions";
import { setAlert } from '../../actions/alertActions';
import CollapsibleRow from '../../components/CollapsibleRow'
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const CreatedJobs: React.FC<any> = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { jobs } = useSelector((state: IRootState) => state.job || []);
  
  const [mobilePage, setMobilePage] = useState(0)
  const rowsPerPage = 10
  useEffect(() => {
    dispatch(fetchAllJobsForAgency());
  }, [dispatch]);

  const rows = jobs.map( (job: any) => {
    let formattedDate = job.createdAt.slice(0,10)
    job = {
      ...job, 
      createdAt: formattedDate,
    }
    return job
  })
  console.log('rows: ', rows)
  
  const handleDelete = (id: string) => {
    console.log(id);
    dispatch(DeleteJobById(id))
    dispatch(setAlert("Job was deleted successfully!"))
  }

  const handleMobilePageChange = (event: unknown, newPage: number) => {
    setMobilePage(newPage)
  }
  
  const columns = [
    {
        field: "title",
        headerName: (i18next.t("job_title")),
        flex: 2,
        renderCell: (params: any) => {
          return (
            <Tooltip title={params.row.title}>
              <Typography>
                {params.row.title}
              </Typography>
            </Tooltip>
          )
        }
    },
    { 
        field: "category", 
        headerName: (i18next.t("job_category")), 
        flex: 2,
        renderCell: (params: any) => {
          return (
            <Tooltip title={params.row.category}>
              <Typography>
                {params.row.category}
              </Typography>
            </Tooltip>
          )
        }
    },
    {
      field: "agency",
      headerName: (i18next.t("job_supplier")),
      flex: 2,
      renderCell: (params: any) => {
        //console.log(params.row);
        return (
          <Tooltip title={params.row.user.name}>
            <Typography>
              {params.row.user.name}
            </Typography>
          </Tooltip>
        )
      }
  },
    {
        field: "createdAt",
        headerName: (i18next.t("job_release_date")),
        flex: 1,
        maxWidth: 120, 
    },
    {
        field: "action",
        headerName: (i18next.t("job_action")),
        width: 100,
        renderCell: (params: any) => {
            return (
                <>
            <Link to={"/job/update"}>
                <span className={classes.update}>{t('job_update')}</span>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.id)}
              
            />
            </>
            );
        }
    },
  ];
  console.log('Jobs: ', jobs)
  const tableView = () => {
    return (
      <div style={{ height: 650, width: '100%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flex: 1 }}>
            
            <DataGrid
              getRowId={(row) => row._id}
              rows={rows}
              disableSelectionOnClick
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    )
  }


  // Pitäiskö olla collapsible table?
  const mobileView = () => {
    return (
      <>
        <Box sx = {{
          width: '100%',
          marginTop: '12px',
          border: '1px solid #E0E0E0',
          borderRadius: '4px',

        }}>
          <Table>
            <TableBody>
              {rows
              .slice(mobilePage * rowsPerPage, mobilePage * rowsPerPage + rowsPerPage )
              .map((row: any) => (
                <CollapsibleRow key={row._id} row={row}></CollapsibleRow>
                /*
                <Box key={row._id} sx={{
                  width: '100%',
                  marginTop: '12px',
                  border: '1px solid #E0E0E0',
                  borderRadius: 5,
                }}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        {row.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {row.category}
                      </Typography>
                    </AccordionDetails>
                    <AccordionActions>
                      <Tooltip title='edit' placement="top" arrow>
                        <IconButton
                          aria-label="preview"
                          onClick={() => console.log('click-edit')
                          }
                          size="large">
                            <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </AccordionActions>
                  </Accordion>
                </Box>
                */
              ))}
            </TableBody>
          </Table>
          <TablePagination
          rowsPerPageOptions = {[10]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={mobilePage}
          onPageChange={handleMobilePageChange}
          />
        </Box>
        
      </>
    )
  }
  return (
    <>
    <div>
      <Typography className={classes.title} color="primary" align="center" variant="h5">{t('job_your_job_ads')}</Typography>
    </div>
    {isMobile ? mobileView() : tableView()}
    </>
  );
}
const useStyles = makeStyles(() => ({
  update: {
    width: '100%',
    display: 'flex',
    marginRight: '20px',
    color: 'green',
  },
  userListDelete: {
    color: 'red',
    marginRight: '20px',
    cursor: 'pointer'
  },
  title: {
    marginTop: '25px',
    marginBottom: '15px',
}
}));

export default CreatedJobs;