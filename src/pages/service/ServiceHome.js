import React from 'react'
import { Row, Col } from 'react-bootstrap'
//引入自己的scss
import '../../css/service/style.scss'

function ServiceHome() {
  // const location = useLocation()
  // const history = useHistory()
  // console.log(history.location.pathname)
  return (
    <>
      <div className="ServiceHome">
        <Row>
          <Col>
            <h4 className="my-4">服務主頁</h4>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ServiceHome
