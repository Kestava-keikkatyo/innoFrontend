import React from 'react'

import { Grid, CircularProgress } from '@mui/material'

/**
 * @component
 * @desc Displays material-ui CircularProgress component in the center of the screen.
 * Used when page is loading content and there is nothing to show.
 * @example
 * if (user.loading) {
 *  return (
 *    <PageLoading />
 *  )
 * }
 */

const PageLoading: React.FC = () => {
  return (
    <Grid
      container
      justifyContent='center'
      spacing={0}
      alignItems='center'
      style={{ minHeight: '100vh' }}
    >
      <CircularProgress />
    </Grid>
  )
}

export default PageLoading
