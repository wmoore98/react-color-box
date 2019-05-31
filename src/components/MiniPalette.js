import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
    const { classes, colors, emoji, paletteName, id, onClick } = props;
    const miniColorBoxes = colors.map(color => (
        <div
            key={color.name}
            className={classes.miniColorBox}
            style={{ backgroundColor: color.color }}
        ></div>
    ));

    const handleClick = (evt) => {
        onClick(id);
    }

    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);
