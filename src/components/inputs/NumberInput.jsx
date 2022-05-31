import React, {useState} from 'react';
import Divider from '@mui/material/Divider';
import {TextField} from '@mui/material';

const NumberInput = ({label,setValue,value}) => {
    const onBonusChange = (e) => {
        const value = e.currentTarget.value
        if (value >= 0) setValue(value)
    }

    return (
        <>
            <div style={{padding: '15px 0 15px 0'}}>
                <TextField
                    id="standard-read-only-input"
                    label={label}
                    // defaultValue={defaultValue}
                    value={value}
                    variant="filled"
                    type={'number'}
                    onChange={onBonusChange}
                />
            </div>
            <Divider/>
        </>
    );
};

export default NumberInput;