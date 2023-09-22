import React, { useEffect } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
  Box,
  InputBase,
  Divider,
  Theme,
  useTheme,
  useMediaQuery,
  Tooltip,
} from '@mui/material'
import withStyles from '@mui/styles/withStyles'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'
import { useSelector } from 'react-redux'
import { Accordion, AccordionDetails, AccordionSummary, AccordionActions } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
//import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveAltIcon from '@mui/icons-material/SaveAlt'
import { useDispatch } from 'react-redux'
import { DeleteFormById, getFormById } from '../../actions/formActions'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import { setAlert } from '../../actions/alertActions'
import { fetchFormList } from '../../actions/formListActions'
import { Search } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import VisibilityIcon from '@mui/icons-material/Visibility'
/**
 * @component
 * @desc A table to get and search for my forms.
 */
const MyFormsTable: React.FC<any> = ({ handleDownload }) => {
  let forms = useSelector((state: any) => state.formList.myForms)
  const myForms: any[] = Array.from(forms)

  const [filter, setFilter] = React.useState('')

  const dispatch = useDispatch()

  const history = useHistory()

  const classes = useStyles()

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md')) // sm: korkeintaan 960px

  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchFormList())
  }, [dispatch])

  // handle user input in the search field
  const handleFilterchange = (event: any) => {
    setFilter(event.target.value)
  }

  const handleEdit = (formId: any) => {
    dispatch(getFormById(formId))
    history.push(`/forms/edit-form`)
  }

  const handleDelete = (formId: any) => {
    dispatch(DeleteFormById(formId))
    dispatch(setAlert('Form deleted successfully!'))
  }

  const handlePreview = (formId: any) => {
    dispatch(getFormById(formId))
    history.push({ pathname: '/forms/preview' })
  }

  // Table head styles
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        color: '#CA4F02',
      } /* #EB5A02 */,
    }),
  )(TableCell)

  // Table row styles
  const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }),
  )(TableRow)

  // Table view for desktop devices
  const tableView = () => {
    return (
      <TableContainer style={{ overflow: 'auto' }}>
        <Table aria-label='searched workers'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='left'>{t('title')}</StyledTableCell>
              <StyledTableCell align='left'>{t('description')}</StyledTableCell>
              <StyledTableCell align='left'>{t('preview')}</StyledTableCell>
              <StyledTableCell align='left'>{t('edit')}</StyledTableCell>
              <StyledTableCell align='left'>{t('delete')}</StyledTableCell>
              <StyledTableCell align='left'>{t('download')}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myForms &&
              myForms
                .filter((form: any) => form.title.toLowerCase().includes(filter.toLowerCase()))
                .map((form: any) => (
                  <StyledTableRow key={form._id}>
                    <TableCell align='left'>{form.title}</TableCell>
                    <TableCell align='left'>{form.description}</TableCell>

                    <TableCell padding='none' style={{ paddingLeft: 16 }}>
                      <IconButton
                        aria-label='preview'
                        onClick={() => handlePreview(form._id)}
                        size='large'
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>

                    <TableCell padding='none' align='center'>
                      <IconButton
                        aria-label='add to favorites'
                        onClick={() => handleEdit(form._id)}
                        size='large'
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>

                    <TableCell padding='none' align='center'>
                      <IconButton
                        aria-label='share'
                        onClick={() => handleDelete(form._id)}
                        size='large'
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>

                    <TableCell padding='none' align='center'>
                      <IconButton
                        aria-label='share'
                        onClick={() => handleDownload(form._id)}
                        size='large'
                      >
                        <SaveAltIcon />
                      </IconButton>
                    </TableCell>
                  </StyledTableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  // Accordion view for mobile devices
  const accordionView = () => {
    return (
      myForms &&
      myForms
        .filter((form: any) => form.title.toLowerCase().includes(filter.toLowerCase()))
        .map((form: any) => (
          <div key={form._id} className={classes.accordionDiv}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography className={classes.heading}>{form.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.description}>{form.description}</Typography>
              </AccordionDetails>
              <AccordionActions>
                <Tooltip title={t('form_tooltip_preview') as string} placement='top' arrow>
                  <IconButton
                    aria-label='preview'
                    onClick={() => handlePreview(form._id)}
                    size='large'
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title={t('form_tooltip_edit') as string} placement='top' arrow>
                  <IconButton onClick={() => handleEdit(form._id)} size='large'>
                    <EditIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title={t('form_tooltip_delete') as string} placement='top' arrow>
                  <IconButton onClick={() => handleDelete(form._id)} size='large'>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title={t('form_tooltip_download') as string} placement='top' arrow>
                  <IconButton onClick={() => handleDownload(form._id)} size='large'>
                    <SaveAltIcon />
                  </IconButton>
                </Tooltip>
              </AccordionActions>
            </Accordion>
          </div>
        ))
    )
  }

  if (!myForms)
    return (
      <Typography
        style={{ padding: '1rem' }}
        variant='h6'
        align='center'
        className='text-secondary'
      >
        {t('no_results')}
      </Typography>
    )

  return (
    <div>
      {/**Search box */}
      <Box display='flex' justifyContent='flex-start' alignItems='center' flexWrap='wrap'>
        <form>
          <Box display='flex' alignItems='center'>
            <label htmlFor='search' style={{ display: 'none' }}>
              {t('search_by_title')}
            </label>
            <InputBase
              id='search'
              placeholder={t('search_by_title')}
              value={filter}
              onChange={handleFilterchange}
              aria-label='search'
            />
            <IconButton size='large' aria-label='search icon'>
              <Search />
            </IconButton>
          </Box>
        </form>
      </Box>
      <Divider />
      {/**Strangely named check for displaying accordionview on narrow displays (mobile).*/}
      {matches ? accordionView() : tableView()}
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionDiv: {
      width: '100%',
      marginTop: 12,
      border: '1px solid #E0E0E0',
      borderRadius: 5,
    },
    heading: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular,
    },
    description: {
      fontSize: theme.typography.pxToRem(13),
      color: '#6C6C6C',
    },
  }),
)

export default MyFormsTable
