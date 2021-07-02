import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
//import Link from '@material-ui/core/Link';
import { useSelector } from 'react-redux';
import { BreadcrumbLink } from '../types/types';
import { IRootState } from '../utils/store';
import { Link } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

/**
 * @component
 * @desc Renders a path and links in path. Uses breadcrumbReducer and
 * brearcrumbActions to handle its state.
 * @see {@link breadcrumbReducer}
 * @see {@link breadcrumbActions}
 */
const ActiveLastBreadcrumb: React.FC = () => {
  const links = useSelector((state: IRootState) => state.breadcrumb);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          style={{ marginLeft: 14, color: '#757575', textDecoration: 'none' }}
          to="/home"
        >
          Home
        </Link>
        {links.map((l: BreadcrumbLink, key: number) =>
          l.name !== 'Home' ? (
            <Link
              key={key}
              style={{ color: '#757575', textDecoration: 'none' }}
              to={l.link}
              aria-current="page"
            >
              {l.name}
            </Link>
          ) : null
        )}
      </Breadcrumbs>

      {/*<Breadcrumbs aria-label="breadcrumb" id="breadcrumbs">
      <Link
        style={{ marginLeft: 5 }}
        color="textPrimary"
        href="/home"
        aria-current="page"
      >
        Home
      </Link>
      {links.map((l: BreadcrumbLink, key: number) => (
        <Link
          key={key}
          style={{ border: '1px red solid' }}
          color="textPrimary"
          href={l.link}
          aria-current="page"
        >
          {l.name}
        </Link>
      ))}
      </Breadcrumbs>*/}
    </div>
  );
};

export default ActiveLastBreadcrumb;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      display: 'flex',
      width: '100%',
      maxWidth: '100%',
    },
  })
);
