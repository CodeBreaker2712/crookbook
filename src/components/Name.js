import React from 'react'
import Container from 'react-bootstrap/Container'
import Button  from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export const Name = () => (
    <React.Fragment>
        <Container>
            <form>
                Name: <input type="text" required /><br />
                <Button variant="danger"><Link to="/game">Enter</Link></Button>
            </form>
        </Container>
    </React.Fragment>
)