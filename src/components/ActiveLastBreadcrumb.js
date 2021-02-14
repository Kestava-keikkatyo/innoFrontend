import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';

const ActiveLastBreadcrumb = () => {
  const { links } = useSelector(state => state.breadcrumb)

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" id="breadcrumbs">
        <Link
            color="textPrimary"
            href="/"
            aria-current="page"
          >
            Home
          </Link>
        { links.map( (l, key) => 
          <Link
            key={key}
            color="textPrimary"
            href={l.link}
            aria-current="page"
          >
            {l.name}
          </Link>
        )}
      </Breadcrumbs>
    </Container>
  );
}

export default ActiveLastBreadcrumb
