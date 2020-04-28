import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';


// class MiniPalette extends PureComponent {

//     render() {
//         const { classes, colors, emoji, paletteName, id, onClick, openDialog } = this.props;
//         const miniColorBoxes = colors.map(color => (
//             <div
//                 key={color.name}
//                 className={classes.miniColorBox}
//                 style={{ backgroundColor: color.color }}
//             ></div>
//         ));
    
//         const handleClick = (evt) => {
//             onClick(id);
//         }
    
//         const handleClickDelete = (evt) => {
//             evt.stopPropagation();
//             openDialog(id);
//         }
//         console.log(`Rendering ${paletteName}`);
    
//         return (
//             <div className={classes.root} onClick={handleClick}>
//                 <DeleteIcon className={classes.delete} onClick={handleClickDelete} />
//                 <div className={classes.colors}>
//                     {miniColorBoxes}
//                 </div>
//                 <h5 className={classes.title}>
//                     {paletteName} <span className={classes.emoji}>{emoji}</span>
//                 </h5>
//             </div>
//         );
//     }
// }

// export default withStyles(styles)(MiniPalette);


// function MiniPaletteFunction(props) {
//     const { classes, colors, emoji, paletteName, id, onClick, openDialog } = props;
//     const miniColorBoxes = colors.map(color => (
//         <div
//             key={color.name}
//             className={classes.miniColorBox}
//             style={{ backgroundColor: color.color }}
//         ></div>
//     ));

//     const handleClick = (evt) => {
//         onClick(id);
//     }

//     const handleClickDelete = (evt) => {
//         evt.stopPropagation();
//         openDialog(id);
//     }
//     console.log(`Rendering ${paletteName}`);

//     return (
//         <div className={classes.root} onClick={handleClick}>
//             <DeleteIcon className={classes.delete} onClick={handleClickDelete} />
//             <div className={classes.colors}>
//                 {miniColorBoxes}
//             </div>
//             <h5 className={classes.title}>
//                 {paletteName} <span className={classes.emoji}>{emoji}</span>
//             </h5>
//         </div>
//     );
// }


// class MiniPalette extends PureComponent {
//     render() {
//         return <MiniPaletteFunction {...this.props}>{this.props.children}</MiniPaletteFunction>
//     }
// }
// export default withStyles(styles)(MiniPalette);

function MiniPalette(props) {
    const { classes, colors, emoji, paletteName, id, onClick, openDialog } = props;
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

    const handleClickDelete = (evt) => {
        evt.stopPropagation();
        openDialog(id);
    }
    console.log(`Optimization Opportunity -- Rendering ${paletteName}`);

    return (
        <div className={classes.root} onClick={handleClick}>
            <DeleteIcon className={classes.delete} onClick={handleClickDelete} />
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
