import React from 'react'

import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@material-ui/core'

const VisitorHome = () => {

  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          paddingBottom={2}
          display="flex"
          flexDirection="row"
          justifyContent="space-between">
        </Box>
        <Typography>Visitor</Typography>
      </CardContent>
    </Card>
  )
}

export default VisitorHome