import React from 'react';
import styled from 'styled-components';
// import { colors, fonts } from '../../settings/settings';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Styledmenu = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 10px;
`;

function Menu() {
    return (
        <Styledmenu>
            <Button variant="outline-primary"><Link to="/" style={{ textDecoration: 'none' }}>Start</Link></Button>
            <Button variant="outline-primary"><Link to="/portfolio" style={{ textDecoration: 'none' }}>Portfolio</Link></Button>
            <Button href='https://www.daman.pl/cv.html' target='_blank' variant="outline-primary">CV</Button>
            <Button variant="outline-primary"><Link to="/contact" style={{ textDecoration: 'none' }}>Kontakt</Link></Button>
        </Styledmenu>
    )
}

export default Menu