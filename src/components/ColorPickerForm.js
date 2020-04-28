import React from 'react';

import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

import useStyles from './styles/ColorPickerFormStyles';
  
function ColorPickerForm(props) {
    const classes = useStyles();
    const [currentColor, setCurrentColor] = React.useState(props.defaultColor);
    const [newColorName, setNewColorName] = React.useState('');
    const { addNewColor, paletteIsFull, colors } = props;

    React.useEffect(() => {
        ValidatorForm.addValidationRule('isColorUnique', value => (
            colors.every(({ color }) => color !== currentColor)
        ));

        ValidatorForm.addValidationRule('isColorNameUnique', value => (
            colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
        ));
    });

    function handleChangeColor(newColor) {
        setCurrentColor(newColor.hex);
    }

    function handleChangeColorName(evt) {
        setNewColorName(evt.target.value)
    }

    function handleSubmit() {
        addNewColor({ color: currentColor, name: newColorName });
        setNewColorName('');
    }

    return (
        <React.Fragment>
            <ChromePicker
                color={currentColor}
                onChangeComplete={handleChangeColor}
                className={classes.picker}
            />
            <ValidatorForm onSubmit={handleSubmit}>
                <TextValidator
                    value={newColorName}
                    onChange={handleChangeColorName}
                    placeholder='Please enter color name'
                    className={classes.colorNameInput}
                    variant='filled'
                    margin='normal'
                    validators={[
                        "required",
                        "isColorNameUnique",
                        "isColorUnique"
                    ]}
                    errorMessages={[
                        "Color Name is required",
                        "Color Name must be unique",
                        "Color already used"
                    ]}
                />
                <Button
                    variant="contained"
                    color={"primary"}
                    style={{
                        backgroundColor: paletteIsFull ? "lightgray" : currentColor
                    }}
                    type="submit"
                    disabled={paletteIsFull}
                    className={classes.addColor}
                >
                    {paletteIsFull ? "Palette Full" : "Add Color"}
                </Button>
            </ValidatorForm>
        </React.Fragment>
    );
}

ColorPickerForm.defaultProps = {
  defaultColor: 'rgb(196, 64, 64)'
}

export default ColorPickerForm;
