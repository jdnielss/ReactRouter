import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Routes from '../routes/routes'
import Sidebar from './Sidebar'
import {BrowserRouter as  Router } from 'react-router-dom'

function Content() {
  return(
    <Container fluid>
      <Router>
        <Row>
          <Col sm="2">
            <Sidebar/>
          </Col>
          <Col sm="10">
            <Routes/>
          </Col>
        </Row>
      </Router>
    </Container>
  )
}

export default Content