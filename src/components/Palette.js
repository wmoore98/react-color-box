import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './styles/PaletteStyles';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: 'hex' };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    changeFormat(format) {
        this.setState({ format });
    }

    render() {
        const { paletteName, emoji, colors, id, classes } = this.props;
        const { level, format } = this.state;
        return (
            <div className={classes.Palette}>
                <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat}/>
                <div className={classes.colors}>
                    {colors[level].map(color =>
                        <ColorBox
                            key={color.id}
                            moreUrl={`/palette/${id}/${color.id}`}
                            background={color[format]}
                            name={color.name}
                        />)}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(Palette);
