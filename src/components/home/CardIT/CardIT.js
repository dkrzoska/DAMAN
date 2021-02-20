import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardIT({ title, description, link }) {
    return (
        <Card border='primary' style={{ width: '18rem', background: 'none' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                    {description}
                </Card.Text>
                <Button className='m-1' href='#' variant="outline-primary">Strona</Button>
                <Button className='m-1' target='_blank' href={link} variant="outline-primary">GitHub</Button>
            </Card.Body>
        </Card>
    )
}

export default CardIT
