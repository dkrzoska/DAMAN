import React from 'react';
import styled from 'styled-components';
import Language from '../Language/Language';
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
        .menu-and-language{
            display: flex;
            gap: 20px;
        }
    }
`

function Header({ menu, changeLang }) {
    return (
        <Styleddiv>
            <h2 className='logo'>DAMAN</h2>
            <div className='menu-and-language'>
                <Menu
                    menu={menu}

                />
                <Language
                    changeLang={changeLang}
                />
            </div>
        </Styleddiv>
    )
}

export default Header
