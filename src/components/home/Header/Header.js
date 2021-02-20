import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';

const Styleddiv = styled.div`
    {
        // height: 100px;
    }
`

function Header() {
    return (
        <Styleddiv>
            <Menu />
        </Styleddiv>
    )
}

export default Header
