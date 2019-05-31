import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import styles from './styles/PaletteStyles';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';


class SingleColorPalette extends Component {

  constructor(props) {
    super(props);
    this._shades = this.getShades(this.props);
    this.state = { format: 'hex' };
    this.changeFormat = this.changeFormat.bind(this);
  };
  

  getShades = ({ colorId, colors }) => {
    const result = Object.keys(colors).map(shade => colors[shade].filter(color => color.id === colorId)).flat();
    return result.slice(1);
  }

  changeFormat(format) {
    this.setState({ format });
  }

  render() {
    const { paletteName, emoji, id, classes } = this.props;
    const colorBoxes = this._shades.map(shade => (
      <ColorBox
        key={shade.name}
        background={shade[this.state.format]}
        name={shade.name}
        isSingleColorPalette
      />      
    ));

    return (
      <div className={classes.Palette}>
        <Navbar changeFormat={this.changeFormat} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
