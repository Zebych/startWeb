import React from 'react';
import Divider from '@mui/material/Divider';
import {TextareaAutosize} from '@mui/material';

const TextareaInput = ({placeholder,value,setValue}) => {
    const onTextareaChange=(e)=>{
        setValue(e.currentTarget.value)
    }
    return (
        <>
            <div style={{padding: '15px 0 15px 0'}}>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder={placeholder}
                    style={{width: 400}}
                    value={value}
                    onChange={onTextareaChange}
                />
            </div>
            <Divider/>
        </>
    );
};

export default TextareaInput;