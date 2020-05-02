import React, { Fragment } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'


function Sidebar(){
  return(
      <Fragment>
        <ListGroup>
          <ListGroupItem>
            <Link to="/guests">Guest Book</Link>
          </ListGroupItem>
        </ListGroup>
      </Fragment>
  )
}

export default Sidebar