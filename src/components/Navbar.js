import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Select, MenuItem, Snackbar, IconButton, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

import styles from './styles/NavbarStyles';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            format: 'hex',
            isOpen: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    };

    handleChange(evt) {
        const format = evt.target.value;
        this.setState({ format, isOpen: true });
        this.props.changeFormat(format);
    }

    closeSnackbar() {
        this.setState({ isOpen: false });
    }

    render() {
        const { level, changeLevel, classes } = this.props;
        const { format } = this.state;
        return (
          <nav className={classes.Navbar}>
            <div className={classes.logo}>
              <Link to='/'>ReactColorPicker</Link>
            </div>
            { level && changeLevel &&
              <div>
                <span>Level: {level}</span>
                <div className={classes.slider}>
                  <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={changeLevel}
                  />
                </div>
              </div>
            }
            <div className={classes.selectContainer}>
              <Select value={format} onChange={this.handleChange}>
                <MenuItem value="hex">HEX - #ffffff</MenuItem>
                <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                <MenuItem value="rgba">
                  RGBA - rgba(255,255,255,1.0)
                </MenuItem>
              </Select>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={this.state.isOpen}
                onClose={this.closeSnackbar}
                autoHideDuration={3000}
                message={
                <span id="message-id">
                    Format changed to {format.toUpperCase()}
                </span>
                }
                ContentProps={{ "aria-describedby": "message-id" }}
                action={[
                    <IconButton
                        onClick={this.closeSnackbar}
                        color='inherit'
                        key='close'
                        aria-label='close'
                    >
                        <CloseIcon />
                    </IconButton>
                ]}
            />
          </nav>
        );
    }
}

export default withStyles(styles)(Navbar);
