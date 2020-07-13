import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft:500,
    marginTop:40,
    marginRight:200,
    width: 200,
  },
}));

export default function DateAndTimePickers(props) {
  const classes = useStyles();

  return (
   
      <TextField
        id={props.id}
        label={props.label}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

  );
}