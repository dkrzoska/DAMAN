import React from 'react';
import styled from 'styled-components';

const Styleddiv = styled.div`
    {
        border-top: solid 2px #007bff;
        .copyright {
            text-align:center;
            font-size: 18px;
            line-height: 44px;
            margin: 0;
        }
    }
`

function Footer() {
    return (
        <Styleddiv>
            <p className='copyright'>Copyright by DAMAN</p>
        </Styleddiv>
    )
}

export default Footer