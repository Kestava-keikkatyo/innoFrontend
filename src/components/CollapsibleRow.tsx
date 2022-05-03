import { Box, Collapse, IconButton, TableCell, TableRow, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';


//TODO: Add delete and edit buttons
/**CollapsibleRow is used in CreatedJobs -page in mobilevied. It represents 
 * one job ad in a table and can be opened for more info.
 */
const CollapsibleRow = ({row}: any) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <>
      {/*Header row*/}
      <TableRow 
        /**Clicking anywhere on the row opens the row. */
        onClick={() => setOpen(!open)}
        sx={{
          borderBottom: 'none',
          display: 'flex',
        }}
      >
        {/**Title */}
        <TableCell 
          padding='normal'
          sx={{
            border: 'none',
            flex: 1,
          }}
        >
          <Typography>
            {row.title}
          </Typography>
        </TableCell>

        {/**Open/close icon */}
        <TableCell 
          sx={{
            padding: '0',
            border: 'none',
            flex: 1,
            maxWidth: '56px',
            textAlign: 'right',
          }}
        >
          <IconButton
            aria-label='expand row'
            size='small'
            sx={{
              padding: '16px 16px 0 0',
            }}
          >
            {/**Show correct icon depending on open state. */}
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      {/*Details row */}
      <TableRow 
        /**Clicking anywhere on the job ad closes it. */
        onClick={() => setOpen(!open)}
        sx={{
          borderBottom: '1px solid #E0E0E0',
        }}
      >
        <TableCell
          padding='none'
          sx={{
            border: 'none'
          }}
        >
          {/**Collapsible part of the job ad content*/}
          <Collapse in={open} unmountOnExit>
            <Box sx={{
              color: '#6C6C6C',
              padding: '0 16px 16px 16px',
            }}>
              {/**Job ad info */}
              <Typography>
                {`${t('job_release_date')}: ${row.createdAt}`}
              </Typography>
              <Typography>
                {`${t('job_category')}: ${row.category}`}
              </Typography>
              <Typography>
                {`${t('job_supplier')}: ${row.user.name}`}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default CollapsibleRow