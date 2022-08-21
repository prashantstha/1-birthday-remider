import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
const List = ({people}) => {
    return (
        <>
        <h3 className='list-title'>List Component</h3>
        <Row xs={1}className="g-4">
        {people.map((people)=>{
            const {id, name, age, image} = people;
            return (
                <Col>
                    <Card style={{flexDirection: 'row', alignItems: 'center', padding: '0 10px'}}>
                        <Figure style={{marginBottom: '0'}}>
                            <Figure.Image
                                width={50}
                                height={50}
                                alt={name}
                                src={image}
                                roundedCircle
                                fluid={false}
                                style={{marginBottom: '0'}}
                            />
                        </Figure>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <span>Age: </span>{age} years
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            );
        })}
                </Row>
        </>
    )
};
export default List;