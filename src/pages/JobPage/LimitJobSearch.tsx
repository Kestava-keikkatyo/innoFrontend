import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const locations = [
  {
    value: 'Helsinki',
    label: 'Helsinki',
  },
  {
    value: 'Espoo',
    label: 'Espoo',
  },
  {
    value: 'Vantaa',
    label: 'Vantaa',
  },
];

const fields = [
    {
      value: 'Palvelu',
      label: 'Palvelu',
    },
    {
      value: 'Hoitoala',
      label: 'Hoitoala',
    },
    {
      value: 'Markkinointi ja myynti',
      label: 'Markkinointi ja myynti',
    },
  ];

  const experiences = [
    {
      value: 'Harjoittelija',
      label: 'Harjoittelija',
    },
    {
      value: 'Kokenut',
      label: 'Kokenut',
    },
    {
      value: 'Ammattilainen',
      label: 'Ammattilainen',
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

export default function MultilineTextFields() {
  const classes = useStyles();
  const [location, setLocation] = React.useState('Helsinki');
  const [field, setField] = React.useState('Palvelu');
  const [experience, setExperience] = React.useState('Harjoittelija')

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setField(event.target.value);
  };

  const handleExperinceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setExperience(event.target.value)
  }


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="location"
          select
          label="SIJAINTI"
          value={location}
          onChange={handleLocationChange}
         
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="field"
          select
          label="TEHTÄVÄALUE"
          value={field}
          onChange={handleFieldChange}
         
        >
          {fields.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        id='experience'
        select
        label='KOKEMUS'
        value={experience}
        onChange={handleExperinceChange}
        >
        {experiences.map(option => (
            <MenuItem key={option.value} value={option.value}>
            {option.label}
            </MenuItem>
        ))}            
        </TextField>
        
      </div>
    </form>
  );
}