import React, { useState, useEffect, useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//引入自己的css
import '../css/index/index.scss'
import CarouselPage from '../components/index/carousel'
import Header from '../components/Header'
function Home(props) {
  return (
    <>
      <div className="container home_login home_hide">
        <div className=" login-container">
          <div className="login">
            <div
              className="alertBox alert alert-danger disappear"
              role="alert"
            ></div>
            <img
              src={require('../images/logo-dark.svg')}
              alt="Background"
              className="text-center"
            />
            <hr />
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputAccount1"
                  aria-describedby="accountHelp"
                  placeholder="帳號"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="密碼"
                />
                <img
                  src={require('../images/member/hide_password.png')}
                  alt="Background"
                  className="show"
                />
                <img
                  src={require('../images/member/show_hide_password.png')}
                  alt="Background"
                  className="hide active"
                />
              </div>
              <Link class="form-group text-left">
                <p>忘記密碼?</p>
              </Link>
              <br />
              <Link
                type="submit"
                class="btn btn-primary btn-block login-btn"
                // to={'/member/'}
              >
                登入
              </Link>
              <div class="form-group d-flex justify-content-between register">
                <div>
                  <p>還沒有註冊帳號?</p>
                </div>
                <div>
                  <Link class="" to="/register">
                    <p>立即註冊→</p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="home">
        <CarouselPage />
        <div className="container">
          <div className="product-collection my-4">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                <figure className="collection1 position-relative">
                  <img
                    src={require('../images/index/collection5.jpg')}
                    alt=""
                  />
                </figure>
                <div className="collection-info1">
                  <h3 className="">Fall Apparel</h3>
                  <div className="">
                    <button type="button" className="btn btn-outline-theme1">
                      立即選購
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                <figure className="collection2 position-relative">
                  <img
                    src={require('../images/index/collection6.jpg')}
                    alt=""
                  />
                </figure>
                <div className="collection-info2">
                  <h3 className="">Fall Apparel</h3>
                  <div className="">
                    <button type="button" className="btn btn-outline-theme1">
                      立即選購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-center mb-4">每日精選</h3>
            <div className="row product-list">
              <div className="col-lg-3 col-6 col-md-4">
                <Link>
                  <div className="position-relative">
                    <figure className="product product1">
                      <img
                        src={require('../images/index/daily1-1.jpg')}
                        alt=""
                      />
                    </figure>
                    <figure className="product product-hover">
                      <img src={require('../images/index/daily1.jpg')} alt="" />
                    </figure>
                  </div>
                </Link>
              </div>
              <div className=" col-lg-3 col-6 col-md-4">
                <Link>
                  <div className="position-relative">
                    <figure className=" product product2">
                      <img
                        src={require('../images/index/daily2-1.jpg')}
                        alt=""
                      />
                    </figure>
                    <figure className="product product-hover">
                      <img src={require('../images/index/daily2.jpg')} alt="" />
                    </figure>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-6 col-md-4">
                <Link>
                  <div className="position-relative">
                    <figure className="product product3">
                      <img
                        src={require('../images/index/daily3-1.jpg')}
                        alt=""
                      />
                    </figure>
                    <figure className="product product-hover">
                      <img src={require('../images/index/daily3.jpg')} alt="" />
                    </figure>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-6 col-md-4">
                <Link>
                  <div className="position-relative">
                    <figure className="product product4">
                      <img
                        src={require('../images/index/daily4-1.jpg')}
                        alt=""
                      />
                    </figure>
                    <figure className="product product-hover">
                      <img src={require('../images/index/daily4.jpg')} alt="" />
                    </figure>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-6 col-md-4">
                <Link>
                  <div className="position-relative">
                    <figure className="product product5">
                      <img
                        src={require('../images/index/daily5-1.jpg')}
                        alt=""
                      />
                    </figure>
                    <figure className="product product-hover">
                      <img src={require('../images/index/daily5.jpg')} alt="" />
                    </figure>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-6 col-md-4">
                <Link>
                  <div className="position-relative">
                    <figure className="product product6">
                      <img
                        src={require('../images/index/daily6-1.jpg')}
                        alt=""
                      />
                    </figure>
                    <figure className="product product-hover">
                      <img src={require('../images/index/daily6.jpg')} alt="" />
                    </figure>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-6 col-md-4">
                <Link>
                  <div className="position-relative">
                    <figure className="product product7">
                      <img
                        src={require('../images/index/daily7-1.jpg')}
                        alt=""
                      />
                    </figure>
                    <figure className="product product-hover">
                      <img src={require('../images/index/daily7.jpg')} alt="" />
                    </figure>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-6 col-md-4">
                <Link>
                  <div className="position-relative">
                    <figure className="product product8">
                      <img
                        src={require('../images/index/daily8-1.jpg')}
                        alt=""
                      />
                    </figure>
                    <figure className="product product-hover">
                      <img src={require('../images/index/daily8.jpg')} alt="" />
                    </figure>
                  </div>
                </Link>
              </div>
            </div>
            <div align="center" className="my-3">
              <Link to="/products">
                <button type="button" className="btn btn-outline-theme">
                  全部商品
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid index-banner">
        <div className="container">
          <h1 className="mt-5">
            全館大特價
            <br /> 商品全面八折起
          </h1>
          <div className="mt-4">
            <button type="button" className="btn btn-theme">
              立即選購
            </button>
          </div>
        </div>
      </div>
      <div className="container home2 mb-4">
        <div className="">
          <h3 className="text-center mb-4">Pet Supplies</h3>
          <div className="row pet-supplies d-flex justify-content-between">
            <div className="col-12 col-sm-12 col-md-6">
              <figure className="supply supply1 position-relative">
                <img src={require('../images/index/sup1.jpg')} alt="" />
              </figure>
              <div className="supply-info">
                <h2 className="text-center">PARK TIME</h2>
                <div className="">
                  <button type="button" className="btn btn-outline-theme1">
                    Discover Dog Collars
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <figure className="supply supply2 position-relative">
                <img src={require('../images/index/sup2.jpg')} alt="" />
              </figure>
              <div className="supply-info">
                <h2 className="text-center">LEAD ME</h2>
                <div className="">
                  <button type="button" className="btn btn-outline-theme1">
                    Discover Dog Collars
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <figure className="supply-2 supply3">
                <img src={require('../images/index/sup8.jpg')} alt="" />
              </figure>
              <div className="supply-info-top">
                <h2>PARK TIME</h2>
              </div>
              <div className="supply-info2">
                <div className="">
                  <button type="button" className="btn btn-outline-theme1">
                    Discover Dog Collars
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <figure className="supply-2 supply4">
                <img src={require('../images/index/sup7.jpg')} alt="" />
              </figure>
              <div className="supply-info-top">
                <h2>PARK TIME</h2>
              </div>
              <div className="supply-info2">
                <div className="">
                  <button type="button" className="btn btn-outline-theme1">
                    Discover Dog Collars
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <figure className="supply-2 supply5">
                <img src={require('../images/index/sup13.jpg')} alt="" />
              </figure>
              <div className="supply-info-top">
                <h2>PARK TIME</h2>
              </div>
              <div className="supply-info2">
                <div className="">
                  <button type="button" className="btn btn-outline-theme1">
                    Discover Dog Collars
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-center my-4">Our Blog</h3>
        <div className="row blog-card">
          <div className="col-md-4">
            <Link>
              <figure className="blog-pic">
                <img src={require(`../images/index/blog1.jpg`)} alt="" />
              </figure>
            </Link>
            <div className="card-body">
              <figure className="card-icon-clock d-flex align-items-center">
                <img
                  src={require('../images/activity/activity-clock.svg')}
                  alt=""
                />
                <span className="ml-2 text-muted card-date">2020-02-22</span>
              </figure>
              <h5 className="card-title mt-2">
                毛孩有口臭並不是理所當然，該重視口腔保健了！
              </h5>
              <p>
                口腔問題大概是最常被獸醫師提起的犬貓疾病之一，
                原因在於很多毛爸媽都以為口臭是自然而然產生的。
              </p>
              <Link>閱讀更多</Link>
            </div>
          </div>
          <div className="col-md-4">
            <Link>
              <figure className="blog-pic">
                <img src={require(`../images/index/blog2.jpeg`)} alt="" />
              </figure>
            </Link>
            <div className="card-body">
              <figure className="card-icon-clock d-flex align-items-center">
                <img
                  src={require('../images/activity/activity-clock.svg')}
                  alt=""
                />
                <span className="ml-2 text-muted card-date">2020-02-22</span>
              </figure>
              <h5 className="card-title mt-2">
                毛孩有口臭並不是理所當然，該重視口腔保健了！
              </h5>
              <p>
                口腔問題大概是最常被獸醫師提起的犬貓疾病之一，
                原因在於很多毛爸媽都以為口臭是自然而然產生的。
              </p>
              <Link>閱讀更多</Link>
            </div>
          </div>
          <div className="col-md-4">
            <Link>
              <figure className="blog-pic">
                <img src={require(`../images/index/blog3.jpg`)} alt="" />
              </figure>
            </Link>
            <div className="card-body">
              <figure className="card-icon-clock d-flex align-items-center">
                <img
                  src={require('../images/activity/activity-clock.svg')}
                  alt=""
                />
                <span className="ml-2 text-muted card-date">2020-02-22</span>
              </figure>
              <h5 className="card-title mt-2">
                毛孩有口臭並不是理所當然，該重視口腔保健了！
              </h5>
              <p>
                口腔問題大概是最常被獸醫師提起的犬貓疾病之一，
                原因在於很多毛爸媽都以為口臭是自然而然產生的。
              </p>
              <Link>
                <div className="text-right">閱讀更多</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
