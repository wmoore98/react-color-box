import React, { Component } from 'react';
import clsx from 'clsx';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { isCopying: false };
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy(evt) {
    if (this.state.isCopying) return;
    this.setState( { isCopying: true }, () => {
      setTimeout(() => this.setState({ isCopying: false }), 1500)
    });
  }

  render() {
    const { background, name, moreUrl, classes } = this.props;
    const { isCopying } = this.state;

    return (
      <CopyToClipBoard text={background} onCopy={this.handleCopy}>
        <div style={{ background }} className={classes.ColorBox}>
          <div style={{ background }} className={clsx(classes.copyOverlay, isCopying && 'show')}  />
          <div className={clsx(classes.copyMsg, isCopying && 'show')} >
          <h1>Copied</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {
            moreUrl &&
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          }
        </div>
      </CopyToClipBoard>
    );
  }
}

export default withStyles(styles)(ColorBox);
