import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const Chit = () => (
    <React.Fragment>
            <CardDeck>
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
                <Card>
                    <Card.Body>
                        <Card.Title>Name: Iyer</Card.Title>
                        <Card.Text>Role:</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="#" variant="warning">Select</Button> 
                    </Card.Footer>
                </Card>
            </CardDeck><br />
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>Name: Baka</Card.Title>
                        <Card.Text>Role:</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="#" variant="warning">Select</Button> 
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Name: Tapu</Card.Title>
                        <Card.Text>Role:</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="#" variant="warning">Select</Button> 
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Name: Bapuji</Card.Title>
                        <Card.Text>Role:</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="#" variant="warning">Select</Button> 
                    </Card.Footer>
                </Card>
            </CardDeck><br/><br/>
            <Button variant="primary">Pick Chits</Button>
    </React.Fragment>
)