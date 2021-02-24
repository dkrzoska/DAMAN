import React from 'react';
import styled from 'styled-components';
import { colors } from '../../settings/settings';
import img from '../../../assets/logo512.png';
import Card from 'react-bootstrap/Card';

const Styleddiv = styled.div`
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 110px);
        // background: ${colors.color_white};
        // background: url(${img}) no-repeat center;
        }
        .title {
            flex-grow: 0.1;
        }
    }
`

function Main() {
    return (
        <Styleddiv>
            <h1 className='title'>Witaj na stronie DAMAN</h1>
            <Card border='primary' className='m-1' style={{ maxWidth: '70%', background: 'none' }}>
            <Card.Body>
                <Card.Title>O mnie</Card.Title>
                <Card.Text>
                    Obecnie poszukuję pracy na stanowisko "Junior Front-End Developer (React)".
                    Mimo, że jestem konstruktorem maszyn od 9 lat to poszukuje nowego wyzwania.<br/>
                    Przypomniałem sobie jak około 20 lat temu próbwałem tworzyć strony internetowe używając takich edytorów jak
                    Front-Page i Pajączek. Postanowiłem odnowić więdzę na ten temat, dlatego skończyłem w zeszłym roku kurs
                    "JavaScript Fron-End Developer " w szkole Coders Lab. Kurs obejmował naukę HTML, CSS, Java Script oraz React.
                    Użycie takich narzędzi jak IDE (ja używam Visual Studio Code), node, gulp i webpack. Zapoznanie ze środowiskami Git czy Trello.
                    W dziale portfolio jest kilka moich projektów stworzonych podczas tego kursu.<br/>
                    Obecnie jestem w trakcie kursu Node.js, żeby dowiedzieć się jak wygląda połączenie Front-Endu z&nbsp;Back&#8209;Endem.
                </Card.Text>
            </Card.Body>
        </Card>
        </Styleddiv>
    )
}

export default Main