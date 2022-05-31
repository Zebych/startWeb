import React from 'react';
import Typography from '@mui/material/Typography';
import {handleActiveSection} from '../../../navigateRoute/namingSectionsAndBlocks/sectionsNavigate';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom';

const Section = ({section}) => {
    const navigate = useNavigate()

    const onSectionClick = (section) => {
        const active = handleActiveSection(section)
        if (active) {
            navigate(active, {replace: true})
        }
    }

    const onAddClick = (section) => {
        const active = handleActiveSection(section)
        if (active) {
            navigate(`${active}add/`, {replace: true})
        }
    }

    return (
        <Typography style={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <div onClick={() => onSectionClick(section)}
                 style={{wordWrap: 'break-word', maxWidth: '100px'}}>
                {section}
            </div>
            <div style={{color: '#1976d2'}}>
                <AddIcon onClick={() => onAddClick(section)}/>
            </div>
        </Typography>
    );
};

export default Section;