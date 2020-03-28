import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { MdAddShoppingCart, MdDelete } from 'react-icons/md'
import $ from 'jquery'

const List = (props) => {
  //清單狀態
  const [list, setList] = useState([])
  //從server拿清單
  async function getList() {
    const req = new Request(
      `http://localhost:6001/list/${props.match.params.mId}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    const res = await fetch(req)
    const data = await res.json()
    console.log(data)
    setList(data)
  }
  //return完後呼叫清單function;如果沒有監聽狀態,刪除商品後無法使商品列完整消失只會消失按鈕
  useEffect(() => {
    getList()
  }, [list])
  //刪除清單項目
  async function delList(itemId) {
    let mId = props.match.params.mId
    const req = new Request(`http://localhost:6001/list/${mId}/del/${itemId}`, {
      method: 'POST',
      credentials: 'include',
    })
    const res = await fetch(req)
    const data = await res.json()
    if (data.success) {
      alert('成功刪除' + data.result + '筆商品')
    } else {
      alert('刪除失敗')
    }
  }
  return (
    <>
      <Container className="list">
        <Row className="mt-5">
          <Col md={12}>
            <Row className="mt-5">
              <Col>
                {list.length === 0 ? (
                  <>
                    <h3>清單內沒有任何商品</h3>
                    <hr />
                    <Image
                      className="ad"
                      src={require('../../images/product/dog-ad.jpg')}
                      alt="..."
                    />
                    <Link to="/products">
                      <Button variant="primary" size="lg">
                        前往選購
                      </Button>
                    </Link>
                  </>
                ) : (
                  <h3>以下是你清單內的商品 共{list.length}件</h3>
                )}
                <hr />
              </Col>
            </Row>
            {list.map((value, index) => {
              return (
                <Row className="item align-items-center" key={value.pId}>
                  <Col md={4} className="text-center">
                    <Link to={'/productdetail/' + value.pId} className="p-0">
                      <Image
                        src={require('../../images/product/' +
                          value.pImg +
                          '.jpg')}
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                  </Col>
                  <Col md={2}>
                    <h4 className="font-weight-bold">{value.pName}</h4>
                  </Col>
                  <Col md={2} className="text-center">
                    <h4>庫存數量:{value.pQuantity}</h4>
                    <h4>價格:{value.pPrice}</h4>
                  </Col>
                  <Col md={2}>
                    <h4 className="text-center font-weight-bold">
                      NT${value.pQuantity * value.pPrice}
                    </h4>
                  </Col>
                  <Col md={2}>
                    <Button className="mb-2" variant="primary" size="md">
                      <MdAddShoppingCart className="mb-md-1" />
                      加入購物車
                    </Button>
                    <Button
                      className="mb-2"
                      variant="primary"
                      size="md"
                      onClick={(e) => {
                        delList(value.itemId)
                        $(e.currentTarget).parentsUntil('.item').fadeOut()
                      }}
                    >
                      <MdDelete className="mb-md-1" />
                      刪除商品
                    </Button>
                  </Col>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              )
            })}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h3>運貨與退貨通知</h3>
            <hr />
            <p className="px-3">
              如果你需要退貨，可以辦理免額外付費運送退貨商品。如果是符合退貨條件的產品，你可在收到訂單商品的14
              天內開始辦理退貨。只須登入你的帳戶，或撥打電話聯絡我們：0800-020-021。
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default withRouter(List)
