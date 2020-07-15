import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop:40,
      marginLeft:350,
      marginRight:300,
      width: '50ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField  type={props.type} onChange={props.onchange} label={props.label} />

    </div>
  );
}