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
        }
    }
`

function PortfolioIT() {
    return (
        <Styleddiv>
            <CardIT
                title='BestShop'
                description={<>
                    Projekt wykonany wg projektu <a href='https://xd.adobe.com/view/31804ad0-5f57-46e0-6edf-a5f54c37078a-47b1/grid/'>AdobeXd</a><br/>
                    Wykorzystałem tu znajomość HTML, SCSS, JavaScript oraz RWD.
                </>}
                link='/bestshop/bestshop.html'
                github='https://github.com/dkrzoska/BestShop'
            />
            <CardIT
                title='Moje CV'
                description='Wg własnego projektu'
                link='https://www.daman.pl/cv.html'
                github='https://github.com/dkrzoska/CV2020'
            />
            <CardIT
                title='Kalendarz ToDo'
                description={<>
                    Projekt jest mojego pomysłu zrobiony zupełenie od podstaw.<br/>
                    Jest to kalendarz, w którym można dodawać i usuwać zadania do wykonania w danym dniu i o danej godzinie.
                </>}
                link='/calendar/calendar.html'
                github='https://github.com/dkrzoska/Application'
            />
            <CardIT
                title='Give to good hands'
                description={<>
                    Strona z pełnym użyciem Reacta.<br/>
                    Bez RWD z wewnętrznym stylowanie w komponentach React.
                </>}
                link='/give_to_good_hands/give_to_good_hands.html'
                github='https://github.com/dkrzoska/Give_to_good_hands'
            />
            <CardIT
                title='Movie search engine'
                description='Strona mojego pomysłu z użyciem darmowego API'
                link='/find_movie/find_movie.html'
                github='https://github.com/dkrzoska/find_movie'
            />
            <CardIT
                title='Strona DAMAN'
                description='Strona na, której się znajdujesz'
                link='https://www.daman.pl'
                github='https://github.com/dkrzoska/DAMAN'
                linktf={false}
            />
        </Styleddiv>
    )
}

export default PortfolioIT