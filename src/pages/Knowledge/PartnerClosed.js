import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'

function PartnerClosed() {
  return (
    <>
      <Card className="partnercard" style={{ width: '33rem' }}>
        <Card.Header className="justify-content-between d-flex">
          <IconContext.Provider value={{ size: '1.2rem' }}>
            <div>
              <FaRegCalendarAlt />
              <span className="carddate"> 活動日期：2020/05/07</span>
            </div>
            <div className="right">
              <FiClock />
              <span className="cardtime"> 時間：15:00-16:00</span>
            </div>
          </IconContext.Provider>
        </Card.Header>
        <Card.Img
          variant="top"
          src="http://fakeimg.pl/1300x400/eeeeee/EAE0D0/"
        />
        <Card.Body>
          <Card.Title>
            <Link to>基礎正向行為養成班／輕鬆打造快樂狗生活</Link>
          </Card.Title>
          <Card.Text>
            針對毛孩教養時發生的日常行為問題，特別開設「正向行為禮貌養成班」，協助飼主引導毛孩學會基礎服從指令
          </Card.Text>
          <div className="text-right">
            <Button
              className="justify-right"
              variant="outline-primary"
              onClick={function() {
                Swal.fire({
                  title: '尚未開始報名',
                  icon: 'warning',
                  showCancelButton: false,
                  confirmButtonColor: '#3085d6',
                  confirmButtonText: '確定',
                })
              }}
            >
              尚未開始報名
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default PartnerClosed
