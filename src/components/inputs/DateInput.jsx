import React from 'react';
import {TextField} from '@mui/material';

const DateInput = ({label, value, setValue}) => {
    const handleChange = (e) => {
        setValue(e.currentTarget.value);
    }

    return (
        <div>
            <TextField
                id="date"
                label={label}
                type="date"
                value={value}
                onChange={handleChange}
                style={{width: 250}}
                InputLabelProps={{
                    shrink: true,
                }}
            />

            {/*<LocalizationProvider dateAdapter={AdapterDateFns}>*/}
            {/*   <DesktopDatePicker
                dateAdapter={AdapterDateFns}
                label={label}
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />*/}
            {/*</LocalizationProvider>*/}
        </div>
    );
};

export default DateInput;