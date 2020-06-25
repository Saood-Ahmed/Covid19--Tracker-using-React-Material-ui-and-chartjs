import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: 20
  },
  paperConfirmed: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'linear-gradient(to right, #00d2ff, #3a7bd5)'
  },
  paperRecovered: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    // color: theme.palette.text.secondary,
    background: 'linear-gradient(to right, #76b852, #8dc26f)'
  },
  paperDeath: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    background: 'linear-gradient(to right, #e52d27, #b31217)'
  },
  confirmed: {
      borderBottom: '5px solid blue',
      
  },
  recovered: {
    borderBottom: '5px solid green',
},
  deaths: {
    borderBottom: '5px solid red',
}
}));

export const Card = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} className={classes.confirmed}>
          <Paper className={classes.paperConfirmed}>
              <Typography variant="h4">Confirmed:</Typography>
             
              <Typography variant="h5">
                  <CountUp start={0} end={props.confirmed} separator=","/>
                </Typography>
              <Typography variant="h6">Last Updated:{props.update}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} className={classes.recovered}>
          <Paper className={classes.paperRecovered}>
              <Typography variant="h4">Recovered:</Typography>
              <Typography variant="h5">
              <CountUp start={0} end={props.recovered} separator=","/>
                  </Typography>
              <Typography variant="h6">Last Updated:{props.update}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} className={classes.deaths}>
          <Paper className={classes.paperDeath}>
              <Typography variant="h4">Deaths:</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={props.death} separator=","/>
                </Typography>
              <Typography variant="h6">Last Updated:{props.update}</Typography>
          </Paper>
        </Grid>
      </Grid>
  
    </div>
  );
}
