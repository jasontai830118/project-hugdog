import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import $ from 'jquery'
import { Card } from 'react-bootstrap'
import '../../css/activity/activity.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotorn from '../../components/activity/Jumbotron'
import ActClassCard from '../../components/activity/ActClassCard'
import ActLectureCard from '../../components/activity/ActLectureCard'
import ActSaleCard from '../../components/activity/ActSaleCard'

function Activity(props) {
  const [activityClassData, setActivityClassData] = useState([])
  const [activityLectureData, setActivityLectureData] = useState([])
  const [activitySaleData, setActivitySaleData] = useState([])
  const [activityQueryData, setActivityQueryData] = useState([])
  const [search, setSearch] = useState('')

  // useEffect(() => {
  //     console.log(search)
  //     setSearch('')
  //   }, [search])

  useEffect(() => {
    // console.log(search)
    setSearch(search)
  }, [search])

  //fetch搜尋資料
  async function getActQueryData() {
    // alert('aaa')
    console.log('set', search)
    const req = new Request(`http://localhost:6001/activity_querySearch/`, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const res = await fetch(req)
    const data = await res.json()
    console.log('搜尋資料', data)

    setActivityQueryData(data)
  }
  useEffect(() => {
    // Your code here
    $('.event-icon .icon-time').mouseover(function () {
      $('.icon-dropdown-menu').removeClass('active')
      $('.icon-dropdown-menu1').addClass('active')
    })
    $('.event-icon .icon-categories').mouseover(function () {
      $('.icon-dropdown-menu').removeClass('active')
      $('.icon-dropdown-menu2').addClass('active')
    })
    $('.event-icon .icon-location').mouseover(function () {
      $('.icon-dropdown-menu').removeClass('active')
      $('.icon-dropdown-menu3').addClass('active')
    })
    $('.event-icon .icon-keyword').mouseover(function () {
      $('.icon-dropdown-menu').removeClass('active')
      $('.icon-dropdown-menu4').addClass('active')
    })
    $('.event-icon').mouseleave(function () {
      $('.icon-dropdown-menu').removeClass('active')
    })
    $('.icon-dropdown-menu').mouseover(function () {
      $(this).addClass('active')
    })
    $('.icon-dropdown-menu').mouseleave(function () {
      $(this).removeClass('active')
    })

    //fetch課程資料
    async function getActClassData() {
      const req = new Request(`http://localhost:6001/activity_class/`, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const res = await fetch(req)
      const data = await res.json()
      // console.log(data)
      setActivityClassData(data)
    }
    getActClassData()

    //fetch講座資料
    async function getActLectureData() {
      const req = new Request(`http://localhost:6001/activity_lecture/`, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const res = await fetch(req)
      const data = await res.json()
      // console.log(data)
      setActivityLectureData(data)
    }
    getActLectureData()

    //fetch優惠活動
    async function getActSaleData() {
      const req = new Request(`http://localhost:6001/activity_sale/`, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const res = await fetch(req)
      const data = await res.json()
      // console.log(data)
      setActivitySaleData(data)
    }
    getActSaleData()

    // getActQueryData()
  }, [])

  return (
    <>
      {/* <Route path="/activity/class">
          <ActivityClass />
        </Route> */}
      {/* <Route path="/activity/lecture">
        <ActivityLecture />
      </Route> */}

      <div className="activity-main">
        <Jumbotorn />
        <div className="container">
          <section className="d-flex position-relative mb-2">
            <div className="col-5 event-icon d-flex">
              <div className="icon icon-time">
                <Link href="">
                  <img
                    src={require('../../images/activity/activity-date.svg')}
                    alt=""
                  />
                  <div className="text-center">時間</div>
                </Link>
              </div>
              <div className="icon icon-categories">
                <Link href="">
                  <img
                    src={require('../../images/activity/activity-category.svg')}
                    alt=""
                  />
                  <div className="text-center">分類</div>
                </Link>
              </div>
              <div className="icon icon-location">
                <Link href="">
                  <img
                    src={require('../../images/activity/activity-loaction.svg')}
                    alt=""
                  />
                  <div className="text-center">地點</div>
                </Link>
              </div>
              <div className="icon icon-keyword">
                <Link href="">
                  <img
                    src={require('../../images/activity/activity-search.svg')}
                    alt=""
                  />
                  <div className="text-center">關鍵字</div>
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-end position-absolute event-btn">
              <button type="button" className="btn btn-primary">
                進階篩選
              </button>
            </div>
          </section>
          <div className="position-relative">
            <div className="col-6 icon-dropdown-menu icon-dropdown-menu1 position-absolute   p-4 ">
              <div className="d-flex justify-content-around ">
                <Link className="align-items-center">
                  <div className=" ">全部</div>
                </Link>
                <Link>
                  <div className="">進行中</div>
                </Link>
                <Link>
                  <div className="">預告中</div>
                </Link>
                <Link>
                  <div className="">已截止</div>
                </Link>
              </div>
            </div>
            <div className="col-6 icon-dropdown-menu icon-dropdown-menu2 position-absolute p-4">
              <div className="d-flex justify-content-around">
                <Link>
                  <div className="">優惠活動</div>
                </Link>
                <Link>
                  <div className="">講座活動</div>
                </Link>
                <Link>
                  <div className="">課程活動</div>
                </Link>
                <Link>
                  <div className="">寵物活動</div>
                </Link>
              </div>
            </div>
            <div className="col-6 icon-dropdown-menu icon-dropdown-menu3 position-absolute p-4">
              <div className="">678</div>
            </div>
            <div className="col-6 icon-dropdown-menu icon-dropdown-menu4 position-absolute p-4">
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  placeholder="請輸入搜尋關鍵字"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(search) => getActQueryData(search)}
                >
                  送出
                </button>
              </div>
            </div>
          </div>
          <div className="my-3 new-activity position-relative">
            <h4>最新活動</h4>
            <div className="row">
              {activitySaleData.map((v, i) => (
                <div className="col-lg-4" key={i}>
                  <ActSaleCard data={v} />
                </div>
              ))}
            </div>
          </div>
          <div className="activity-class">
            <h4>課程報名</h4>
            <div className="row">
              {activityClassData.map((v, i) => (
                <div className="col-lg-4" key={i}>
                  <ActClassCard data={v} />
                </div>
              ))}
            </div>
          </div>
          <div className="activity-all">
            <h4>精選活動</h4>
            <div className="row">
              {activityLectureData.map((v, i) => (
                <div className="col-lg-4" key={i}>
                  <ActLectureCard data={v} />
                </div>
              ))}
            </div>
            <div align="center" className="mb-3">
              <button type="button" className="btn btn-outline-theme">
                顯示更多活動
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// const mapStateToProps = store => {
//   return { data: store.getActivityClassDetail }
// }
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({}, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Activity)

export default Activity
