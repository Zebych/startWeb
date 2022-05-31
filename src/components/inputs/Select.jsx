import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';

export default function BasicSelect({statuses,value,label,setValue}) {

    const handleChange = (event) => {
        setValue(event.target.value)
    };

    return (
        <>
            <Box sx={{minWidth: 120,padding:'15px 0 15px'}}>
            <FormControl fullWidth style={{padding: 0}}>

                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={handleChange}
                    variant="filled"
                    style={{
                        minWidth: '200px',
                        paddingLeft: '5px',
                        paddingTop: '10px',
                        width: 'fit-content',
                        maxHeight:62,
                    }}
                >
                    {statuses && statuses.map((status, index) => {
                        return <MenuItem key={status + index}
                                         value={status} style={{display:'grid'}}>{status}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
            <Divider/>
        </>
    );
}
