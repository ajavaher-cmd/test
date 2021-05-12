
import './App.css';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperConfig: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'white',
    color: theme.palette.primary.main
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'black',
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [checkedDetails, setCheckedDetails] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChangeDetails = (event) => {
    setCheckedDetails(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Trader's desk
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        {/* <div className={classes.toolbar} /> */}
        <img src="tradersplatform(2).png" alt="text"/>
        {/* <Divider /> */}
        <List>
          {['Inbox', 'Smart trading', 'Copy-trading', 'Invite'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={{color: 'purple'}}/> : <MailIcon style={{color: 'purple'}}/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <Grid container spacing={3}>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
              <TradingViewWidget
              symbol="NASDAQ:MSFT"
              theme={Themes.DARK}
              locale="en"
              // autosize
              height={500}
              width={'100%'}
              details={checkedDetails}
              hide_side_toolbar={!checked}
              withdateranges={true}
              
            />
          </Paper>
        </Grid>
        <Grid item xs={2}>
            <Paper className={classes.paperConfig} style={{height:532}}>
              <div>
                <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Typography style={{display:'inline'}}>Sidebar Menu</Typography>
              </div>
              <div>
                <Checkbox
                checked={checkedDetails}
                onChange={handleChangeDetails}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Typography style={{display:'inline'}}>Details</Typography>
              </div>
            </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
          
          </Paper>
        </Grid> */}
        <Grid container item spacing={3} direction='row' justify='flex-start' alignItems='flex-start' >
          
          <Grid item xs={4} >
            <Paper style={{height:300, padding:20}}>
              <Typography style={{fontWeight: 'bold', marginBottom: 20}}>Set Trade</Typography>
              <ButtonGroup size="large" color="primary" fullWidth>
                <Button>Buy Limit</Button>
                <Button variant='contained'>Buy Market</Button>
              </ButtonGroup>
              <Typography variant="caption" display="block" style={{folat: 'left', marginTop: 20}}>Units</Typography>
              <Typography style={{display: 'inline', float: 'left'}}>0.23</Typography>
              <Typography style={{display: 'inline', float: 'right'}}>BTC</Typography>
              <Divider style={{marginTop:25}}/>
              <Typography variant="caption" display="block" style={{folat: 'left', marginTop: 20}}>Price</Typography>
              <Typography style={{display: 'inline', float: 'left'}}>0.00234</Typography>
              <Typography style={{display: 'inline', float: 'right'}}>USD</Typography>
              <Divider style={{marginTop:25}}/>
              <Box style={{marginTop:20}}>
              <Typography variant="caption" color="secondary" display="inline">Bid:</Typography>
              <Typography display="inline">123 BTC</Typography>
              <Box style={{float: 'right'}}>
                <Typography variant="caption" style={{color: 'green'}} display="inline">Ask:</Typography>
                <Typography display="inline">2345USD</Typography>
              </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid container item  direction='column' alignItems='space-between' justify='space-between' xs={4} style={{width:200}}>
            <Grid item >
              <Paper style={{height:130, padding: 20, }}>
                <Box style={{display: "block"}}>
                  <Box style={{float: 'left'}}>
                  <div style={{ height: 5, width: 5, borderRadius: '50%', display: 'inline-block', backgroundColor: 'green'}}></div>
                  <Typography style={{ display: 'inline', marginLeft: 5}}>Take profit limit order</Typography>
                  </Box>  
                  <Box style={{float: 'right', }}>
                    <FormControlLabel
                    control={<Switch color='primary' label='On' labelPlacement='start'/> } label='On' labelPlacement='start'
                    />
                  </Box>
                </Box>
                <Box style={{marginTop:50}}> 
                <Button
                  variant="contained"
                  color="secondary"
                  // className={classes.button}
                  startIcon={<ArrowDropDownIcon />}
                >
                  Bids
                </Button>
                <Box style={{display: 'inline',marginLeft:30}}>
                  <Typography style={{display: 'inline',marginLeft:10 }}>.0987</Typography>
                  <Typography style={{display: 'inline',float: 'right'}}>BTC</Typography>
                  <Divider style={{marginLeft:130}}/>
                </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item >
              <Paper className={classes.paper} style={{height:150, marginTop:8}}>xs=3</Paper>
            </Grid>
            <Grid item >
              <Paper style={{height:90, marginTop:8, padding: 30}}>
              <Box style={{display: "block"}}>
                  <Box style={{float: 'left'}}>
                  <Typography style={{ display: 'inline', marginLeft: 5}}>Stop Profit Time-out</Typography>
                  </Box>  
                  <Box style={{float: 'right', }}>
                    <FormControlLabel
                    control={<Switch color='primary' label='On' labelPlacement='start'/> } label='On' labelPlacement='start'
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Grid container item  direction='column'  xs={4} style={{width:200}}>
            <Grid item >
              <Paper  style={{height:130, padding:30}}>
              <Box style={{display: "block"}}>
                  <Box style={{float: 'left'}}>
                  <div style={{ height: 5, width: 5, borderRadius: '50%', display: 'inline-block', backgroundColor: 'red'}}></div>
                  <Typography style={{ display: 'inline', marginLeft: 5}}>Stop Loss Limit Order</Typography>
                  </Box>  
                  <Box style={{float: 'right', }}>
                    <FormControlLabel
                    control={<Switch color='primary' label='On' labelPlacement='start'/> } label='On' labelPlacement='start'
                    />
                  </Box>
                </Box>
                <Box style={{marginTop:50}}> 
                <Button
                  variant="contained"
                  color="secondary"
                  // className={classes.button}
                  startIcon={<ArrowDropDownIcon />}
                >
                  Bids
                </Button>
                <Box style={{display: 'inline',marginLeft:30}}>
                  <Typography style={{display: 'inline',marginLeft:10 }}>.0987</Typography>
                  <Typography style={{display: 'inline',float: 'right'}}>BTC</Typography>
                  <Divider style={{marginLeft:130}}/>
                </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item >
              <Paper style={{height:90, marginTop:8, padding: 30}}>
              <Box style={{display: "block"}}>
                  <Box style={{float: 'left'}}>
                  <Typography style={{ display: 'inline', marginLeft: 5}}>Trailing Stop Loss</Typography>
                  </Box>  
                  <Box style={{float: 'right', }}>
                    <FormControlLabel
                    control={<Switch color='primary' label='On' labelPlacement='start'/> } label='On' labelPlacement='start'
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item >
              <Paper className={classes.paper} style={{height:150, marginTop:8}}>xs=3</Paper>
            </Grid>
          </Grid>
        

        </Grid>
      </Grid>

      </main>
    </div>
  );
}


     
  

        
      
  