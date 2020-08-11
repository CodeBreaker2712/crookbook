import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

export const Chit = () => (
    <React.Fragment>
        <CardColumns>
            <Row>
                <Card>
                    <Card.Body>
                        <Card.Title>Name: 1 </Card.Title>
                        <Card.Text>Role:</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="#" variant="warning">Select</Button> 
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Name: 2 </Card.Title>
                        <Card.Text>Role:</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="#" variant="warning">Select</Button> 
                    </Card.Footer>
                </Card>
            </Row>
            <Row>
            <Card>
                    <Card.Body>
                        <Card.Title>Name: Jetha </Card.Title>
                        <Card.Text>Role:</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="#" variant="warning">Select</Button> 
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Name: Babita </Card.Title>
                        <Card.Text>Role:</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="#" variant="warning">Select</Button> 
                    </Card.Footer>
                </Card>
            </Row>
            <Row>
            <Card>
                    <Card.Body>
                        <Card.Title>Name: Jetha </Card.Title>
                        <Card.Text>Role:</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="#" variant="warning">Select</Button> 
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Name: Babita </Card.Title>
                        <Card.Text>Role:</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="#" variant="warning">Select</Button> 
                    </Card.Footer>
                </Card>
            </Row>
        </CardColumns>
        <br/><br/>
            <Button variant="primary">Pick Chits</Button>
    </React.Fragment>
)