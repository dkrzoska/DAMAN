import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardIT({ title, description, link, github, linktf=true, buttonName }) {
    return (
        // <Card border='primary' style={{ width: '18rem', alignSelf: 'stretch', background: 'none' }}>
        <Card border='primary' className='m-1' style={{ width: '18rem', background: 'none' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                    {description}
                </Card.Text>
                {linktf && <Button className='m-1' target='_blank' href={link} variant="primary">{buttonName}</Button>}
                <Button className='m-1' target='_blank' href={github} variant="primary">GitHub</Button>
            </Card.Body>
        </Card>
    )
}

export default CardIT
