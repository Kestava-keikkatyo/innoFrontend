import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { submitEditedForm } from '../../actions/businessContractFormActions'
import { IRootState } from '../../utils/store'

/**
 * @component
 * @desc A header for preview page.
 */
const EditHeader: React.FC<any> = () => {

  const currentBusinssContractForm = useSelector((state: IRootState) => state.businessContractForm)

  const dispatch = useDispatch()

  const history = useHistory()

  const handleSave = () => {
    console.log("currentBusinssContractForm", currentBusinssContractForm)
    dispatch(submitEditedForm(currentBusinssContractForm._id, currentBusinssContractForm))
    history.push(`/business-contracts`)

  }


  return (
    <Grid container direction="row"
      justify="space-between">
        <Grid item xs={6}>
          <Typography variant="h4" color="secondary" >
            Edit Filled Business Contract
          </Typography>
        </Grid>
        <Grid item xs={6} >
          <Grid container direction="row-reverse">
            <Button>
              <Link to="/business-contracts">Back</Link>
            </Button>
            <Button onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default EditHeader