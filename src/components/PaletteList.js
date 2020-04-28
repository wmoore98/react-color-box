import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';

function PaletteList(props) {

    const goToPalette = (id) => {
        props.history.push(`/palette/${id}`);
    }

    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [idToDelete, setIdToDelete] = React.useState(null);

    const handleDelete = function() {
        onClickDelete(idToDelete);
        closeDialog();
    }

    const openDialog = function(id) {
        setIsDialogOpen(true);
        setIdToDelete(id);
    }

    const closeDialog = function() {
        setIsDialogOpen(false);
        setIdToDelete(null);
    }

    const { palettes, classes, onClickDelete } = props;
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Color Palettes</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <TransitionGroup className={classes.palettes}>
                    {palettes.map(palette =>
                        <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                            <MiniPalette key={palette.id} {...palette} onClick={goToPalette} openDialog={openDialog} />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
            <Dialog open={isDialogOpen} aria-labelledby='delete-dialog-title' onClose={closeDialog}>
                <DialogTitle id='delete-dialog-title'>Are you sure you want to delete this palette?</DialogTitle>
                <List>
                    <ListItem button onClick={handleDelete}>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>Yes, delete it</ListItemText>
                    </ListItem>
                    <ListItem button onClick={closeDialog}>
                        <ListItemAvatar>
                        <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>No, keep it</ListItemText>
                    </ListItem>
                </List>


            </Dialog>
        </div>

    );
};

export default withStyles(styles)(PaletteList);