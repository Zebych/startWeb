import React from 'react';
import Divider from '@mui/material/Divider';
import TaxiCar from './TaxiCar.jsx';

const TaxiCars = ({taxiCarsData, changeRowTaxiCars}) => {
    return (
        <div style={{
            border: 'solid 1px #1976d2',
            borderRadius: 8,
            paddingTop: 15
        }}>{taxiCarsData.map((taxiCar) => {
            return <div key={taxiCar.id}>
              <TaxiCar data={taxiCar} changeRowTaxiCars={changeRowTaxiCars}/>
                <Divider/>
            </div>
        })}
        </div>
    );
};

export default TaxiCars;