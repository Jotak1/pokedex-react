
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  }
}));

export default function Appbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
          <ListItemLink href="/home" >
            <ListItemText primary='Home'></ListItemText>
          </ListItemLink>
          <ListItemLink href='/pokedex'  >
            <ListItemText primary='Pokedex' />
          </ListItemLink>
          <ListItemLink href="/about" >
            <ListItemText  primary='About' />
          </ListItemLink>
        
      </List>
      
    </div>
  );  

  

  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer('left', true)} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            Pokedex
          </Typography>
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}