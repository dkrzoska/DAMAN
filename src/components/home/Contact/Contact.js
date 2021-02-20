import React from 'react';
import styled from 'styled-components';
import { colors } from '../../settings/settings';
import img from '../../../assets/logo512.png';

const Styleddiv = styled.div`
    {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 10%;
        flex-wrap: wrap;
        min-height: calc(100vh - 104px);
        width: 100vw;
        // background: ${colors.color_white};
        background: #dddfd4 url(${img}) no-repeat center;
        margin: auto;
        }
    }
`

function Contact() {
    return (
        <Styleddiv>

        </Styleddiv>
    )
}

export default Contact