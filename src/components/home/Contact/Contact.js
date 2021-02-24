import React from 'react';
import styled from 'styled-components';
import { colors } from '../../settings/settings';
import img from '../../../assets/logo512.png';
import Card from 'react-bootstrap/Card';

const Styleddiv = styled.div`
    {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 10%;
        flex-wrap: wrap;
        min-height: calc(100vh - 110px);
        // background: ${colors.color_white};
        // background: url(${img}) no-repeat center;
        margin: auto;
        }
    }
`

function Contact() {
    return (
        <Styleddiv>
            <Card border='primary' className='m-1' style={{ width: '18rem', background: 'none' }}>
                <Card.Body>
                    <Card.Title>Kontakt</Card.Title>
                    <Card.Text>Damian Krzoska</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">tel. 505-770-847</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">e-mail: <Card.Link href='mailto:d.krzoska@gmail.com'>d.krzoska@gmail.com</Card.Link></Card.Subtitle>
                </Card.Body>
            </Card>
        </Styleddiv>
    )
}

export default Contact