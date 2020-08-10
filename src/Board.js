import React from 'react'
import Container from 'react-bootstrap/Container'
import { Chit } from './components/Chit'
import {ScoreBoard} from './components/ScoreBoard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Board = () => (
    <React.Fragment>
        <Container>
            <Row>
                <Col lg={7}><Chit /></Col>
                <Col lg={5}><ScoreBoard /></Col>
            </Row>
        </Container>
    </React.Fragment>
)