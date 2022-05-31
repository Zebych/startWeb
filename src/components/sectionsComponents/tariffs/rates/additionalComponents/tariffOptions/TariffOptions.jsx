import React from 'react';
import TariffOption from './TariffOption.jsx';
import Divider from '@mui/material/Divider';

const TariffOptions = ({tariffOptionsData, changeRowTariffOptions}) => {
    return (
        <div style={{
            border: 'solid 1px #1976d2',
            borderRadius: 8,
            paddingTop: 15
        }}>
            {tariffOptionsData.map((tariffOption) => {
                return <div key={tariffOption.id}>
                    <TariffOption tariffOption={tariffOption}
                                  changeRowTariffOptions={changeRowTariffOptions}/>
                    <Divider/>
                </div>
            })}
        </div>
    );
};

export default TariffOptions;