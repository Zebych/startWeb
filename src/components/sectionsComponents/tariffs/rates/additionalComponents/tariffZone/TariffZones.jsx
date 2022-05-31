import React, {useEffect, useState} from 'react';
import RowTariffZone from './RowTariffZone.jsx';
import Divider from '@mui/material/Divider';

const TariffZones = ({dataTariffZones, changeRowTariffZone}) => {

    return (

        <div style={{
            border: 'solid 1px #1976d2',
            borderRadius: 8,
            paddingTop: 15
        }}>{dataTariffZones.map((tariffZone) => {
            return <div key={tariffZone.id}>
                <RowTariffZone data={tariffZone}
                               changeRowTariffZone={changeRowTariffZone}/>
                <Divider/>
            </div>
        })}
        </div>
    );
};

export default TariffZones;