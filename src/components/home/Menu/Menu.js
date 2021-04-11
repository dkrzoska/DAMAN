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

function Menu({menu}) {
    return (
        <Styledmenu>
            <Button href='#/' variant="primary">{menu[0]}</Button>
            <Button href='#/portfolio' variant="primary">{menu[1]}</Button>
            <Button href='https://www.daman.pl/cv.html' target='_blank' variant="primary">{menu[2]}</Button>
            <Button href='#/contact' variant="primary">{menu[3]}</Button>
        </Styledmenu>
    )
}

export default Menu