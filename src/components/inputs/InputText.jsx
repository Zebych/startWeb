import React, {useState} from 'react';
import Divider from '@mui/material/Divider';
import {TextField} from '@mui/material';

const InputText = ({label, inputValue,setInputValue}) => {

    const onInputChange = (e) => {
        setInputValue(e.currentTarget.value)
    }

    return (
        <>
            <div style={{padding: '15px 0 15px 0'}}>
                <TextField
                    id="standard-read-only-input"
                    label={label}
                    value={inputValue}
                    /*  InputProps={{
                          readOnly: true,
                      }}*/
                    variant="filled"
                    onChange={onInputChange}
                />
            </div>
            <Divider/>
        </>
    );
};

export default InputText;