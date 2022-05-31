import React from 'react';
import {TextField} from '@mui/material';

const DisableDateInput = ({label, value}) => {

    return (
        <div>
            <TextField
                label={label}
                value={value}
                style={{width: 200}}
            />
        </div>
    );
};

export default DisableDateInput;