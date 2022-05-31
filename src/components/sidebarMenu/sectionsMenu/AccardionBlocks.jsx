import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from 'react';
import Sections from './Sections.jsx';

export default function AccardionBlocks({block, sections}) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{width: '100%'}}>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{width: '33%', flexShrink: 0}}>
                        {block}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {sections && <Sections sections={sections}/>}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
