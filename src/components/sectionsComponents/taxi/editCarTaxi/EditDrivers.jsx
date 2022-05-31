import React from 'react';
import Divider from '@mui/material/Divider';
import EditDriver from './EditDriver.jsx';

const EditDrivers = ({driversData, changeRowDriver}) => {
    return (
        <div style={{
            border: 'solid 1px #1976d2',
            borderRadius: 8,
            paddingTop: 15
        }}>
            {driversData.map((driver) => {
                return <div key={driver.id}>
                    <EditDriver data={driver} changeRowDriver={changeRowDriver}/>
                    <Divider/>
                </div>
            })}
        </div>
    );
};

export default EditDrivers;