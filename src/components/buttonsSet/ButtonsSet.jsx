import React from 'react';
import Button from '@mui/material/Button';

const ButtonsSet = ({onRemoveClick,onSaveClick}) => {
    return (
        <div style={{padding: 15, display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="contained" onClick={onRemoveClick}
                    style={{backgroundColor: 'red'}}>Удалить</Button>
            <Button variant="outlined" onClick={onSaveClick}>Сохранить</Button>
        </div>
    );
};

export default ButtonsSet;