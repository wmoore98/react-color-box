import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const GET_PALETTE_NAME = 1;
const PICK_EMOJI = 2;
  
function PaletteMetaForm(props) {
    const { palettes, handleSubmit, hideModal } = props;

    const [newPaletteName, setNewPaletteName] = React.useState('');
    const [step, setStep] = React.useState(GET_PALETTE_NAME);
    
    React.useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => (
            palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        ));
    });

    function handleClose() {
        hideModal();
    }
        
    function handleChangePaletteName(evt) {
        setNewPaletteName(evt.target.value)
    }

    function handleNextStep() {
        const nextStep = step + 1;
        setStep(nextStep);
    }

    function handlePickEmoji({ native: emoji }) {
        handleSubmit({ paletteName: newPaletteName, emoji });
        setStep(0);
    }

    return (
        <React.Fragment>
            <Dialog open={step === PICK_EMOJI} onClose={handleClose} aria-labelledby="emoji-picker-dialog-title">
                <DialogTitle id="emoji-picker-dialog-title">Choose an Emoji</DialogTitle>
                <Picker onSelect={handlePickEmoji} title='Pick a Palette Emoji'/>
            </Dialog>
            <Dialog open={step === GET_PALETTE_NAME} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                <ValidatorForm onSubmit={handleNextStep}>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for your palette. Make sure name is unique.
                        </DialogContentText>
                            <TextValidator
                                label="Palette Name"
                                fullWidth
                                margin='normal'
                                value={newPaletteName}
                                onChange={handleChangePaletteName}
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={[
                                    "Palette Name is required",
                                    "Palette Name must be unique"
                                ]}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" type="submit">
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </React.Fragment>
    );
}

export default PaletteMetaForm;
