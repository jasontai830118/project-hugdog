import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import { Col, Card, Nav, Button, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { count } from '../actions/index'
import $ from 'jquery'
import '../../../css/product/productCard.scss'

const ProductCardSmall = (props) => {
  return (
    <Col md={3} className="mb-3 WNQcard">
      <Card className="shadow-sm text-center">
        <Link to={'/productdetail/' + props.data.pId}>
          <Image
            src={require('../../../images/product/' + props.data.pImg + '.jpg')}
            className="card-img-top mt-3"
            alt="..."
          />
        </Link>
        <Card.Body className="card-body">
          <Card.Title className="">{props.data.pName}</Card.Title>
          <Card.Text className="">{props.data.pInfo}</Card.Text>
          <Card.Text className="text-danger ">
            NTD {props.data.pPrice}元
          </Card.Text>
          <div className="d-flex justify-content-around mb-3">
            <FaPaw className="text-danger" /> <FaPaw /> <FaPaw /> <FaPaw />
            <FaPaw />
          </div>
          <div className="d-flex justify-content-around">
            <Button
              className=" p-1"
              onClick={() => {
                props.history.push('/productdetail/' + props.data.pId)
              }}
            >
              查看商品
            </Button>
            <Button
              className=" p-1"
              onClick={(e) => {
                if (
                  localStorage.getItem('mId') &&
                  localStorage.getItem('mId') !== '0'
                ) {
                  let item = {
                    pId: props.data.pId,
                    pName: props.data.pName,
                    pQuantity: 1,
                    pPrice: props.data.pPrice,
                    pImg: props.data.pImg,
                  }
                  let cart = []
                  cart.push(item)

                  if (localStorage.getItem('cart') === null) {
                    localStorage.setItem('cart', JSON.stringify(cart))
                  } else {
                    let currentCart = JSON.parse(localStorage.getItem('cart'))
                    if (
                      [...currentCart].find(
                        (value) => value.pId === props.data.pId
                      )
                    ) {
                      return alert('已加入購物車')
                    } else {
                      const newCart = [...currentCart, item]
                      props.count(newCart)
                      localStorage.setItem('cart', JSON.stringify(newCart))
                      $(e.currentTarget).parentsUntil('.col-md-3').fadeOut()
                    }
                  }
                  props.history.push('/cart')
                } else {
                  return alert('尚未登入')
                }
              }}
            >
              快速結帳
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ count }, dispatch)
}
export default withRouter(connect(null, mapDispatchToProps)(ProductCardSmall))
