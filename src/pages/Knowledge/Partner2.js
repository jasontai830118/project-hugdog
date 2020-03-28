import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Card,
  Button,
  Badge,
  Image,
} from 'react-bootstrap'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getPartner } from './actions/index'

import PartnerNowon from './PartnerNowon'
import PartnerClosed from './PartnerClosed'
import '../../components/Knowledge/knowledge.scss'

// import { Container } from 'react-bootstrap/lib/Tab'

function Partner(props) {
  useEffect(() => {
    console.log(props)
    props.getPartner()
  }, [])
  return (
    <>
      <div className="knowledgebanner"></div>
      <Container className="partner">
        <Row>
          <Col xs={12} md={12} className="mt-3 ">
            <Tabs defaultActiveKey="open" id="uncontrolled-tab-example">
              <Tab eventKey="open" title="進行中">
                <Row xs={12} md={6} className="justify-content-center">
                  {props.post &&
                    props.post.map((value, index) => {
                      return (
                        <PartnerNowon key={index} data={props.post[index]} />
                      )
                    })}
                </Row>
              </Tab>
              <Tab eventKey="Closed" title="預告">
                <Row>
                  <Col xs={12} md={6}>
                    <PartnerClosed />
                  </Col>

                  <Col xs={12} md={6}>
                    <PartnerClosed />
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const mapStateToProps = store => {
  return { post: store.getPartner }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPartner }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Partner))
