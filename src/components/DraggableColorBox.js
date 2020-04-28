import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
    const classes = useStyles();
    const { color, name, deleteColor } = props;

    const handleDeleteColor = () => {
        deleteColor(name);
    }

    return (
        <div className={classes.root}style={{ backgroundColor: color }}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleDeleteColor}/>
            </div>
        </div>
    );
});

export default DraggableColorBox;
