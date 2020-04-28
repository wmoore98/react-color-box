import React from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import PaletteMetaForm from './PaletteMetaForm';
import useStyles from "./styles/NewPaletteNavStyles";

  
function NewPaletteNav(props) {
    const classes = useStyles();
    const { open, palettes, handleSubmit, handleDrawerOpen } = props;

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    function showModal() {
        setIsModalOpen(true);
    }

    function hideModal() {
        setIsModalOpen(false);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="default"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Create A Palette
                    </Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                    <Link to="/">
                        <Button variant="contained" color="secondary">
                            Go back
                        </Button>
                    </Link>
                    <div>
                        <Button variant="contained" color="primary" onClick={showModal}>
                            Save
                        </Button>
                    </div>
                </div>
            </AppBar>
            { isModalOpen && <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideModal={hideModal}/> }
        </React.Fragment>
    );
}

export default NewPaletteNav;
