import React from 'react';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';

import styles from './styles/PaletteListStyles';

function PaletteList(props) {
    const goToPalette = (id) => {
        props.history.push(`/palette/${id}`);
    }

    const { palettes, classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Color Palettes</h1>
                    <span>Create Palette</span>
                </nav>
                <div className={classes.palettes}>
                    {palettes.map(palette =>
                        <MiniPalette key={palette.id} {...palette} onClick={goToPalette} />
                    )}
                </div>
            </div>
        </div>

    );
};

export default withStyles(styles)(PaletteList);