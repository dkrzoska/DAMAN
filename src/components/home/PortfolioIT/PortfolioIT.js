import React from 'react';
import styled from 'styled-components';
import { colors } from '../../settings/settings';
import CardIT from '../CardIT/CardIT';
import img from '../../../assets/logo512.png';

const Styleddiv = styled.div`
    {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 7%;
        min-height: calc(100vh - 110px);
        // background: ${colors.color_white};
        // background: url(${img}) no-repeat center;
        margin: auto;
        padding: 15px 0;
        }
    }
`

function PortfolioIT({ portfolio, buttonName }) {
    let cards = [];
    let i = 0;
    for (const el of portfolio) {
        cards.push(<CardIT
            key={i}
            title={el.title}
            description={el.description}
            link={el.link}
            github={el.github}
            linktf={el.linktf}
            buttonName={buttonName}
        />)
        i++;
    }
    return (
        <Styleddiv>
            {cards}
        </Styleddiv>
    )
}

export default PortfolioIT