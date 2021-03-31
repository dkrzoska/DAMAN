import React from 'react';
import styled from 'styled-components';
// import { colors, fonts } from '../../settings/settings';
import Button from 'react-bootstrap/Button';

const Styledmenu = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    padding: 10px;
`;

function Menu() {
    return (
        <Styledmenu>
            <Button href='#/' variant="primary">Start</Button>
            <Button href='#/portfolio' variant="primary">Portfolio</Button>
            <Button href='https://www.daman.pl/cv.html' target='_blank' variant="primary">CV</Button>
            <Button href='#/contact' variant="primary">Kontakt</Button>
        </Styledmenu>
    )
}

export default Menu