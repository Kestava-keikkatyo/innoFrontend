import React from 'react'

import vastuualueet from '../../assets/tietopankki/vastuualueet.json'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  List,
  CardContent,
  ListItem,
  ListItemText,
  Divider,
  CardHeader,
  Button,
  Grid,
} from '@material-ui/core'

const AgencyHome = () => {
  const useStyles = makeStyles({})

  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Card variant="outlined">
          <CardHeader
            action={
              <Button variant="outlined" color="primary">
                Lue lisää
              </Button>
            }
            title="Vastuualue"
            subheader="Vuokrayritys"
          />
          <CardContent>
            <List component="nav" aria-label="mailbox folders">
              <Divider />
              {vastuualueet.agency.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${i + 1}. ${e}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AgencyHome
