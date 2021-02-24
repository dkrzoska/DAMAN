import React from 'react';
import styled from 'styled-components';
import { colors } from '../../settings/settings';
import img from '../../../assets/logo512.png';
import Card from 'react-bootstrap/Card';
import Aboutme from '../Aboutme/Aboutme';

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
                        <Aboutme />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Styleddiv>
    )
}

export default Main