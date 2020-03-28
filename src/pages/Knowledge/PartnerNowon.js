import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Card, Button, Row, Col, Image, Collapse } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { FaRegCalendarAlt, FaRegHeart, FaHeart } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { MdLocationOn } from 'react-icons/md'
import $ from 'jquery'

function PartnerNowon(props) {
  const [open, setOpen] = useState(false)
  const [heart, setHeart] = useState(true)

  $('.trun').click(function() {
    document.getElementById('trun').innerHTML = <FaHeart />
  })

  return (
    <>
      <Card
        className="partnercard m-3"
        // style={{ width: '33rem' }}
      >
        <Card.Header className="justify-content-between d-flex">
          <IconContext.Provider value={{ size: '1.2rem' }}>
            <div class="d-inlined-inline-block">
              <FaRegCalendarAlt />
              <span className="carddate mr-3 text-danger">
                {' '}
                {props.data.pDate}
              </span>
              <FiClock />
              <span className="cardtime text-danger"> {props.data.pTime}</span>
            </div>

            <div class="d-inline-block">
              <MdLocationOn />
              <span className="cardtime ">
                活動地點：
                <span className="text-danger ">
                  {' '}
                  {props.data.pLocation}{' '}
                </span>{' '}
              </span>
            </div>
          </IconContext.Provider>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <div>
                <Card.Img
                  className="partnerImg"
                  variant="top"
                  src={require('../../images/knowledge/partner/p001.jpg')}
                  alt=""
                />
              </div>
            </Col>
            <br />
            <Col>
              <div className=" d-flex align-items-center ">
                <p>
                  <strong>活動發起人：</strong>
                </p>
                <div className=" align-self-center ml-3">
                  <div className="">
                    <Image
                      className="partnerMemberImg m-1"
                      src={require('../../images/knowledge/question/q019.jpeg')}
                      alt=""
                      roundedCircle
                    />
                  </div>
                </div>
                <p className=" ml-3">白白</p>
              </div>
              <div className="d-flex mt-3 justify-content-between">
                <p className="">
                  <strong> 主題：</strong>
                  {props.data.pTitle}
                </p>
                <p className="pr-3">
                  <strong> 費用：</strong> {props.data.pPrice}
                </p>
              </div>
              <hr />
              <div>
                <p className="">
                  <strong>活動內容：</strong>
                </p>
                <h6>{props.data.pDes}</h6>
              </div>
            </Col>
          </Row>
          <Row className=" pt-4">
            <Col>
              <div>
                <div className="p-1">
                  <strong>成團人數：</strong> 15 人
                </div>
                <div>
                  <strong className="p-1">已報名人數：</strong> 10人
                </div>
              </div>
            </Col>
            <Col className="">
              <div className="text-right align-items-end justify-content-end mt-2 d-flex">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className="mr-2"
                >
                  我要參加+1
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  className="text-danger btn-white"
                  onClick={() => setHeart(!heart)}
                  id="heart"
                >
                  加入最愛{heart ? <FaRegHeart /> : <FaHeart />}
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Collapse in={open}>
              <Col
                id="example-collapse-text"
                className="mt-2 p-2 bg-light"
                md={{ span: 6, offset: 6 }}
              >
                <div> 已報名：</div>
                <div> 會員</div>
              </Col>
            </Collapse>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default PartnerNowon
