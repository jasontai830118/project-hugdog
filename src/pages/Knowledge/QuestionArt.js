import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import {
  Col,
  Collapse,
  Card,
  Button,
  Badge,
  Image,
  Figure,
} from 'react-bootstrap'
import { FaDog } from 'react-icons/fa'
import { GiDogBowl } from 'react-icons/gi'
import { TiPipette } from 'react-icons/ti'

function QuestionArt(props) {
  let showQuestionColor = ''
  if (props.data.qClassify === 'a') {
    showQuestionColor = 'success'
  } else if (props.data.qClassify === 'b') {
    showQuestionColor = 'info'
  } else {
    showQuestionColor = 'danger text-white'
  }

  let showQuestionType = ''
  if (props.data.qType === '1') {
    showQuestionType = '食慾/精神不濟'
  } else if (props.data.qType === '2') {
    showQuestionType = '排泄異常'
  } else if (props.data.qType === '3') {
    showQuestionType = '營養與處方'
  } else {
    showQuestionType = '其他'
  }

  let showPic = ''
  if (props.data.qClassify === 'a') {
    showPic = <FaDog />
  } else if (props.data.qClassify === 'b') {
    showPic = <TiPipette />
  } else {
    showPic = <GiDogBowl />
  }

  const [open, setOpen] = useState(false)

  return (
    <>
      <Col>
        {/* <div className="bg-light p-1 m-1"> */}
        <div className="mb-3 mt-2 bg-light p-3" style={{ width: '33rem' }}>
          <div className="d-flex">
            <div>
              <Image
                className="questionImg m-1"
                src={require('../../images/knowledge/question/' +
                  props.data.qId +
                  '.jpg')}
                alt=""
                roundedCircle
              />
            </div>
            <div>
              <h6 className="m-3">
                發問飼主：<strong>{props.data.mName}</strong>{' '}
              </h6>
              <h6 className="m-3">
                寵物年紀：<strong>{props.data.qAge}</strong> 歲
              </h6>
            </div>
          </div>
          <div className="text-right mr-2">
            <h6>
              {''}
              <Badge variant={showQuestionColor} className="p-2">
                {showPic} {''} {showQuestionType}
              </Badge>
            </h6>
          </div>
          <Card>
            <Card.Body>
              <Card.Title>
                <strong>{props.data.qTitle}</strong>
              </Card.Title>

              <Card.Text>{props.data.qDes}</Card.Text>
              <div className="text-right">
                {props.data.qAns === '' ? (
                  <Button variant="secondary" size="sm" disabled>
                    未回答
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    看回答
                  </Button>
                )}
              </div>
              <Collapse in={open}>
                <div id="example-collapse-text" className="mt-2 p-2">
                  <hr />
                  <div className="d-flex">
                    <div>
                      <p className="m-3 text-primary">{props.data.qAns}</p>
                    </div>
                    <div>
                      <Image
                        className="questionImg m-1"
                        src={require('../../images/knowledge/question/dr001.jpg')}
                        alt=""
                        roundedCircle
                      />
                    </div>
                  </div>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </div>
        {/* </div> */}
      </Col>
    </>
  )
}

export default withRouter(QuestionArt)
