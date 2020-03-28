import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Nav,
  Modal,
  Button,
  Form,
  Image,
} from 'react-bootstrap'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getPartner } from './actions/index'

import PartnerPost from './PartnerPost'
import '../../components/Knowledge/knowledge.scss'

import PartnerNowon from './PartnerNowon'

// import { Container } from 'react-bootstrap/lib/Tab'

function Partner(props) {
  useEffect(() => {
    console.log(props)
    props.getPartner()
  }, [])

  const Swal = require('sweetalert2')
  function post() {
    Swal.fire({
      icon: 'success',
      title: '發問成功',
    })
  }
  //發問視窗
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    //   setTimeout(() => {
    //     post()
    //   }, 400)
  }
  const handleShow = () => setShow(true)

  //確認判斷
  const [validated, setValidated] = useState(false)
  const handleSubmit = event => {
    const form = event.currentTarget
    console.log(form)
    console.log('form.checkValidity()', form.checkValidity())
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else if (form.checkValidity() === true) {
      setShow(false)
      post()
    }
    setValidated(true)
  }

  return (
    <>
      <Container className="partner">
        <div>
          <Button className="mt-4 mb-4 ml-2">我要開活動</Button>
        </div>
        <div>
          <Tabs
            defaultActiveKey="open"
            id="uncontrolled-tab-example"
            className="m-2"
          >
            <Tab eventKey="open" title="進行中">
              <Col xs={12} className="justify-content-center mb-2">
                {props.post &&
                  props.post.map((value, index) => {
                    return <PartnerNowon key={index} data={props.post[index]} />
                  })}
              </Col>
            </Tab>
            <Tab eventKey="Closed" title="預告">
              <Row></Row>
            </Tab>
          </Tabs>
        </div>
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
