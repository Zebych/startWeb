import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import AccardionBlocks from './AccardionBlocks.jsx';

const ListValue = ({block,sections}) => {
    return (
            <List>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                    }}
                >
                    <AccardionBlocks block={block} sections={sections}/>
                </ListItemButton>
            </List>
    );
};

export default ListValue;