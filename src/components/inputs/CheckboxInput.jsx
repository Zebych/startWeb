import React from 'react';
import {Checkbox} from '@mui/material';

const CheckboxInput = ({checked,setChecked}) => {
    const label = {inputProps: {'aria-label': 'Checkbox demo'}};

    const onBonusCheckboxChange = (e) => {
        setChecked(e.currentTarget.checked)
    }

    return (
        <div>
            <Checkbox
                checked={checked}
                {...label}
                onChange={onBonusCheckboxChange}
            />
        </div>
    );
};

export default CheckboxInput;