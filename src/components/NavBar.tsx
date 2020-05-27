import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';
// TODO: Fix the rules to make this work properly
// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import DrawerOptions from './DrawerOptions';
import { getMenuOptions } from '../actions/user';
import { getBusinessInfo } from '../actions/business';
import { getSessionInfo } from '../utils/session';

const drawerWidth = 240,
  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
      },
      drawer: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        justifyContent: 'flex-end',
      },
      drawerSubHeader: {
        textAlign: 'center',
      },
      logo: {
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
          height: 56,
        },
        height: 64,
        marginRight: 10,
      },
      content: {
        marginTop: 64,
        width: '100%',
        [theme.breakpoints.down('xs')]: {
          marginTop: 56,
        },
      },
    })
  );

const NavBar = (props: any) => {
  const classes = useStyles(),
    dispatch = useDispatch(),
    userStore = useSelector((state: any) => state.user),
    businessStore = useSelector((state: any) => state.business),
    [isOpen, setIsOpen] = React.useState(false),
    { username = '', businessId = '' } = getSessionInfo(),
    handleDrawerToggle = () => {
      setIsOpen(!isOpen);
    };

  useEffect(() => {
    dispatch(getMenuOptions(username, businessId));
    dispatch(getBusinessInfo(businessId));
  }, [businessId, username, dispatch]);

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {businessStore.name}
            {businessStore.ccName ? ` - ${businessStore.ccName}` : ''}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>{props.children}</div>
      <Drawer
        classes={{
          paper: classes.drawer,
        }}
        variant="temporary"
        open={isOpen}
        onClose={handleDrawerToggle}
      >
        <div className={classes.drawerHeader}>
          <img
            className={classes.logo}
            src={`/assets/bpstec_logo.jpg`}
            alt={'Logo BPSTEC'}
          />
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div className={classes.drawerSubHeader}>
          <b>{username}</b>
        </div>
        <Divider />
        <DrawerOptions userMenuOptions={userStore.menuOptions} />
      </Drawer>
    </div>
  );
};

export default NavBar;
