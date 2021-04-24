import {
  Button,
  Container,
  fade,
  Grid,
  InputBase,
  makeStyles,
} from '@material-ui/core'
import { SearchIcon } from '@material-ui/data-grid'
import React from 'react'
import JobLifeline from './JobLifeline'

export interface DatabankProps {}

const Databank: React.FC<DatabankProps> = () => {
  const classes = useStyles()

  return (
    <div>
      <div className="databank-top-container relative">
        <div className="databank-banner" />
        <div className="databank-logo" />
      </div>
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className="databank-nav"
        >
          <Grid item>
            <Button color="inherit">Artikkelit</Button>
            <Button color="inherit">Työn elinkaari</Button>
            <Button color="inherit">Vastuualueet</Button>
            <Button color="inherit">Hyvät käytännöt</Button>
          </Grid>
          <Grid item>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            {/* <Button color="inherit">Rekistöröidy</Button> */}
          </Grid>
        </Grid>
        <JobLifeline />
      </Container>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default Databank
