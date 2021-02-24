import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';

const Styleddiv = styled.div`
    {
        // height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 2px #007bff;
        .logo {
            color: #007bff;
            margin: 0;
            margin-left: 10px;
        }
    }
`

function Header() {
    return (
        <Styleddiv>
            <h2 className='logo'>DAMAN</h2>
            <Menu />
        </Styleddiv>
    )
}

export default Header
