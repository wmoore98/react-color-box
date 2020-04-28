import React from 'react';

import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import NewPaletteNav from './NewPaletteNav';
import ColorPickerForm from './ColorPickerForm';
import DraggableColorList from './DraggableColorList';

import useStyles from './styles/NewPaletteFormStyles';

import seedColors from '../seedColors';

function NewPaletteForm(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [colors, setColors] = React.useState(seedColors[0].colors);

    function handleDrawerOpen() {
      setOpen(true);
    }
  
    function handleDrawerClose() {
      setOpen(false);
    }

    function addNewColor(newColor) {
      setColors([...colors, newColor]);
    }

    function deleteColor(colorToDelete) {
      setColors(colors.filter(color => color.name !== colorToDelete));
    }

    function arrayMove(array, oldIndex, newIndex) {
      const result = [...array];
      const item = result.splice(oldIndex, 1)[0];
      result.splice(newIndex, 0, item);
      return result;
    }

    function reorderColors({ oldIndex, newIndex }) {
        setColors(arrayMove(colors, oldIndex, newIndex));
    }

    function handleClearPalette() {
      setColors([]);
    }

    function handleRandomColor() {
      const allColors = props.palettes.map(palette => palette.colors).flat();
      let randomColor = {};

      const isNotUnique = () => (
        colors.some(({ name }) => name.toLowerCase() === randomColor.name.toLowerCase())
        || colors.some(({ color }) => color === randomColor.color)
        );

      do {
        randomColor = allColors[Math.floor(Math.random() * allColors.length)];
      } while (isNotUnique());

      // Add color to palette
      addNewColor(randomColor);

    }
    
    function handleSubmit({ paletteName, emoji = '🎨' }) {
      props.savePalette({
        paletteName,
        id: paletteName.toLowerCase().replace(' ', '-'),
        emoji,
        colors
      });
      props.history.push('/');
    }


    const paletteIsFull = colors.length === props.maxColors;
  
    return (
      <div className={classes.root}>
        <NewPaletteNav
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          palettes={props.palettes}
          handleSubmit={handleSubmit}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>Design Your Palette</Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClearPalette}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleRandomColor}
                disabled={paletteIsFull}
                className={classes.button}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              addNewColor={addNewColor}
              paletteIsFull={paletteIsFull}
              colors={colors}
            />

          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            deleteColor={deleteColor}
            axis="xy"
            onSortEnd={reorderColors}
          />
        </main>
      </div>
    );
}

NewPaletteForm.defaultProps = {
  maxColors: 20
}

export default NewPaletteForm;

/*
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
*/
