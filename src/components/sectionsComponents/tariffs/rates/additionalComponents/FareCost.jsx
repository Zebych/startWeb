import React from 'react';
import NumberInput from '../../../../inputs/NumberInput.jsx';
import Divider from '@mui/material/Divider';

const FareCost = ({label,value,setValue,title}) => {
    return (
        <>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{width: 200}}>{title}:</span>
                <NumberInput label={label} value={value}
                             setValue={setValue}/>
            </div>
            <Divider/>
        </>
    );
};

export default FareCost;