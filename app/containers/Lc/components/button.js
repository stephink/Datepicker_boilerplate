import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        marginTop:40,
        marginLeft:520,
        marginRight:300,
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={props.onclick} color="secondary">
        {props.name}
      </Button>
    </div>
  );
}