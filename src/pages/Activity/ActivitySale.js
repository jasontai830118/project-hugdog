import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

//引入自己的css
import '../../css/activity/activity.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function ActivitySale(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    const sId = props.match.params.sId
    // const cInfo = props.match.params.cInfo
    // console.log('propsdata:', props.match.params.cId)
    // props.getActivityClassDetail(cId)

    //fetch課程資料
    async function getActSaleata() {
      const req = new Request(`http://localhost:6001/activity_sale/${sId}`, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const res = await fetch(req)
      const data = await res.json()
      // console.log(data[0].cImg)
      setData(data[0])
      // setData(data[0].cInfo.split('\n').join())
    }
    getActSaleata()
  }, [])
  return (
    <>
      <div className="container activity-sale my-5">
        <div className="content">
          <h1 className="mb-4">{data.sName}</h1>
          <figure>
            <img
              src={require(`../../images/activity/activity-sale.jpg`)}
              alt=""
              className="img-fluid"
            />
          </figure>
          <div class="row info-content mb-3">
            <div class="col-2">活動日期 : </div>
            <div class="col"> 2020-01-18 ~ 2020-01-18 </div>
          </div>
          <div class="row info-content">
            <div class="col-2">活動資訊 : </div>
            <div class="col">
              新竹市星級動物收容教育園區即將啟用，為了讓狗狗和貓咪們可以開心入住，即將在108年1月18日舉辦「毛小孩入厝趴」啟用典禮，本次活動包含了許多跟動物保護相關的特技、劇場表演、寵物行為訓練師及寵物鮮食知識講座，也特別規劃了三場的寵物趣味競賽，歡迎市民朋友帶著毛小孩們一同共襄盛舉。
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ActivitySale)
