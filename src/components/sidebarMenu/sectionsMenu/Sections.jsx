import React from 'react';
import Section from './Section.jsx';

const Sections = ({sections}) => {
    return (
        sections.map((section, index) => {
            return <div key={section + index} >
                <Section section={section}/>
            </div>
        })
    );
};

export default Sections;