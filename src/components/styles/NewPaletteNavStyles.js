import { makeStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH } from '../../constants';

const drawerWidth = DRAWER_WIDTH;

const useStyles = makeStyles(theme => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    navBtns: {
        display: 'flex',
        marginRight: '2rem',
        '& button': {
            margin: '0 0.5rem'
        },
        '& a': {
            textDecoration: 'none'
        }
    }
}));

export default useStyles;
