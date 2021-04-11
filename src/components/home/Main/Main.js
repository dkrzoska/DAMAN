import React from 'react';
import styled from 'styled-components';
import { colors } from '../../settings/settings';
import img from '../../../assets/logo512.png';
import myPhoto from '../../../assets/myPhoto.jpg';
import Card from 'react-bootstrap/Card';
// import Aboutme from '../Aboutme/Aboutme';

const Styleddiv = styled.div`
    {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 8%;
        min-height: calc(100vh - 110px);
        // background: ${colors.color_white};
        // background: url(${img}) no-repeat center;
        padding: 50px;
        }
        .poster {
            width: 46%;
            min-width: 300px;
            padding-bottom: 20px;
            img {
                display: block;
                width: 300px;
                border-radius: 5px;
                margin: 0 auto;
            }
            .myName {
                text-align: center;
                line-height: 300%;
            }
        }
        .welcome {
            width: 46%;
            min-width: 300px;
            .title {
                text-align: center;
            }
        }
    }
`

function Main({ main }) {
    return (
        <Styleddiv>
            <div className='poster'>
                <img src={myPhoto} alt='my photo' />
                <h3 className='myName'>{main[0]}</h3>
            </div>
            <div className='welcome'>
                <h1 className='title'>{main[1]}</h1>
                <Card border='primary' className='m-1' style={{background: 'none' }}>
                    <Card.Body>
                        <Card.Title>{main[2]}</Card.Title>
                        <Card.Text>
                            {main[3]}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Styleddiv>
    )
}

export default Main