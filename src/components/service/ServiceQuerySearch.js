import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
// import $ from 'jquery'
import { Button, Form, Row, Col, Card, Collapse } from 'react-bootstrap'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import $ from 'jquery'

function ServiceQuerySearch(props) {
  //評價分數
  const rating = [
    { id: 5, name: '極度好評(5分)' },
    { id: 4, name: '好評(4分)' },
    { id: 3, name: '普通(3分)' },
    { id: 2, name: '差評(2分)' },
    { id: 1, name: '極度差評(1分)' },
  ]
  const [queryValue, SetQueryValue] = useState({})
  const [open, setOpen] = useState(true)
  const [objChang, SetObjChang] = useState(0) //偵測勾選時變動
  // const [open, setOpen] = useState(false)

  const handelSelect = e => {
    queryValue[e.target.name] = e.target.value.toString()
    SetObjChang(objChang + 1)
  }

  const handelCheck = e => {
    // console.log(e.target.name)
    let checkbox = document.getElementsByName(e.target.name)
    let checkArr = [],
      checkInSql = ''
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        checkArr.push(checkbox[i].value)
      }
    }
    for (let i = 0; i < checkArr.length; i++) {
      checkInSql += `"${checkArr[i].toString()}"`
      if (i !== checkArr.length - 1) {
        checkInSql += `,`
      }
    }
    queryValue[e.target.name] = checkInSql
    SetObjChang(objChang + 1)
  }

  useEffect(() => {
    //設定回傳父元件資料
    // props.parentUserData(queryValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objChang])

  return (
    <>
      <Row className="mb-3">
        <Col className="d-flex justify-content-between">
          <Form.Control
            as="select"
            name="sort"
            className="w-auto"
            onChange={handelSelect}
          >
            <option value="">排序條件</option>
            <option value="ratingDesc">依評價排序 (高至低)</option>
            <option value="ratingAsc">依評價排序 (低至高)</option>
            <option value="yearDesc">依年資排序 (高至低)</option>
            <option value="yearAsc">依年資排序 (低至高)</option>
          </Form.Control>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {open ? (
              <FaChevronUp className="mr-1" />
            ) : (
              <FaChevronDown className="mr-1" />
            )}
            搜尋條件
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Collapse in={open}>
            <Card className="card-shadow" id="example-collapse-text">
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="search-col mb-4" md={4}>
                      <label className="title">服務地區</label>
                      <hr className="title" />
                      <Form.Control
                        as="select"
                        name="sCity"
                        required
                        onChange={handelSelect}
                      >
                        <option value="">縣市</option>
                        {props.sCity.length !== 0
                          ? props.sCity.map((v, i) => (
                              <option key={i} value={v.City}>
                                {v.City}
                              </option>
                            ))
                          : ''}
                      </Form.Control>
                    </Col>
                    <Col className="search-col mb-4" md={4}>
                      <label className="title">選擇服務</label>
                      <hr className="title" />
                      <Form.Control
                        as="select"
                        name="sType"
                        onChange={handelSelect}
                      >
                        <option value="">請選擇</option>
                        {props.sType.length !== 0
                          ? props.sType.map((v, i) => (
                              <option key={i} value={v.sTypeId}>
                                {v.sTypeName}
                              </option>
                            ))
                          : ''}
                      </Form.Control>
                    </Col>
                    <Col className="search-col mb-4" md={4}>
                      <label className="title">狗狗體型</label>
                      <hr className="title" />
                      <Row>
                        {props.sSize.length !== 0
                          ? props.sSize.map((v, i) => (
                              <Col lg={6} key={i}>
                                <Form.Check
                                  custom
                                  name="sSize"
                                  type="checkbox"
                                  value={v.sizeId}
                                  id={`sSize${i}`}
                                  label={v.sizeName}
                                  onChange={handelCheck}
                                />
                              </Col>
                            ))
                          : ''}
                      </Row>
                    </Col>
                    <Col className="search-col mb-4" md={4}>
                      <label className="title">評價分數</label>
                      <hr className="title" />
                      <Form.Control
                        as="select"
                        name="rating"
                        onChange={handelSelect}
                      >
                        <option value="">請選擇</option>
                        {rating.map(obj => (
                          <option value={obj.id} key={obj.id}>
                            {obj.name}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    {/* <Col className="search-col" md={4}>
                 <label className="title">價格區間</label>
                 <hr className="title" />
                 <input type="range" className="form-control-range" />
                 <Range />
               </Col> */}
                    <Col className="search-col mb-4" md={4}>
                      <label className="title">其他服務</label>
                      <hr className="title" />
                      <Row>
                        {props.sExtra.length !== 0
                          ? props.sExtra.map((v, i) => (
                              <Col lg={6} key={i}>
                                <Form.Check
                                  custom
                                  name="sExtra"
                                  type="checkbox"
                                  value={v.extraId}
                                  id={`sExtra${i + 1}`}
                                  label={v.extraName}
                                  onChange={handelCheck}
                                />
                              </Col>
                            ))
                          : ''}
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Collapse>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(ServiceQuerySearch)
