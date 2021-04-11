import React from 'react';
import styled from 'styled-components';
import poland from '../../../assets/poland.png';
import UK from '../../../assets/united_kingdom.png';

const Styleddiv = styled.div`
    {
        display: flex;
        align-items: center;
        img {
            height: 40px;
            cursor: pointer;
        }
    }
`

function Language({changeLang}) {
    return (
        <Styleddiv>
            <img onClick={changeLang} src={UK} alt='EN' />
            <img onClick={changeLang} src={poland} alt='PL' />
        </Styleddiv>
    )
}

export default Language
