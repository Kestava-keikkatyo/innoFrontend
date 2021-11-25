import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from "react-i18next";

const incidences = [
  {
    value: 'Uusimmat',
    label: 'Uusimmat',
  },
  {
    value: 'Vanhimmat',
    label: 'Vanhimmat',
  },
  {
    value: 'Sulkeutuvat',
    label: 'Sulkeutuvat',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

const JobsInsidence = () =>  {
  const classes = useStyles();
  const [incidence, setByIncidence] = React.useState('Uusimmat');
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setByIncidence(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="select-by-incidence"
          select
          value={incidence}
          onChange={handleChange}
          helperText={t('select_by_incidence')}
        >
          {incidences.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}

export default JobsInsidence