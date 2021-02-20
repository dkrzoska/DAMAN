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
            <Button variant="outline-primary"><Link to="/">Start</Link></Button>
            <Button variant="outline-primary"><Link to="/portfolio">Portfolio</Link></Button>
            <Button variant="outline-primary">CV</Button>
            <Button variant="outline-primary"><Link to="/contact">Kontakt</Link></Button>
        </Styledmenu>
    )
}

export default Menu