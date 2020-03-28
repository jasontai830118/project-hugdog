import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// import { StickyContainer, Sticky } from 'react-sticky'
//引入自己的css
import '../../css/activity/activity.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Breadcrumb from '../../components/Breadcrumbs'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import getActivityClassDetail from '../../reducers/index'

function ActivityClass(props) {
  // const cId = props.data[0] ? props.data[0].cId : ''
  // const [actClassData, setActClassData] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [data, setData] = useState([])

  //課程加入收藏
  const addCollection = () => {
    // console.log('123')
    fetch(`http://localhost:6001/activity_collection/insertClass/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mId: 'm001',
        cId: props.match.params.cId,
      }),
    })
      .then((r) => r.json())
      .then((obj) => console.log(obj))

    // console.log(JSON.stringify(actCollectionData))

    // const response = await fetch(request)
    // const data = await response.json()
    // console.log(data)
    // callback()
  }

  //課程報名參加
  const joinClass = () => {
    console.log('報名參加')
    fetch(`http://localhost:6001/activity_successEvent/insertSuccessEvent/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mId: 'm001',
        LId: props.match.params.cId,
        LName: data.cName,
        LDate: data.cDate,
        LPeople: quantity + '',
      }),
    })
      .then((r) => r.json())
      .then((obj) => console.log(obj))
  }

  useEffect(() => {
    const cId = props.match.params.cId
    // const cInfo = props.match.params.cInfo
    // console.log('propsdata:', props.match.params.cId)
    // props.getActivityClassDetail(cId)

    //fetch課程資料
    async function getActClassData() {
      const req = new Request(`http://localhost:6001/activity_class/${cId}`, {
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
    getActClassData()
  }, [])

  return (
    <>
      <div className="container activity-class my-3">
        <Breadcrumb />
        <div className="row mt-3 left-right-container">
          <div className="col-lg-7 class-left">
            <figure className="classPic">
              {/* <img src={require(`../../images/activity/${data.cImg}`)} alt="" /> */}
            </figure>
            <div style={{ whiteSpace: 'pre-wrap' }}>
              <h5>活動內容</h5>
              <hr />
              {data.cInfo}
            </div>
            <div className="block-notice mt-3">
              <h5>注意事項</h5>
              <hr />
              <div>
                <p>
                  ① 活動注意事項：
                  <br />
                  1.若有任何忌口食物、或食物過敏原，還請事先告知。
                  <br />
                  2.因場地全區為實木地板，進入後請換上我們為您準備的拖鞋。
                  <br />
                  3.肺炎流行期間，請謹慎斟酌自身身體狀況，若有身體不適請勿報名參加。
                </p>
                <p>
                  ② 費用相關事項：
                  <br />
                  1.若您已經完成付款，欲臨時取消報名，退費原則如下：
                  <br />
                  [活動日7天前(含)取消：全額退費 / 活動日前7天內取消：恕不退費 ]
                  e.g. 您報名7/14週日場次 ... (7/7)週日(含)前取消 >> 全額退費
                  (7/8)週一(含)後取消 >> 恕不退費，請找人替補名額喔！
                  <br />
                  2.如遇天災等不可抗力因素取消活動，我們會主動與您聯繫，您可以選擇退費或轉班。
                  <br />
                  3. 活動取消與否，依活動地人事行政局停止上班公告為標準。
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 class-right">
            <div className="right-sticky">
              <h3 className="title">{data.cName}</h3>
              <div className="price">
                <span className="symbol">NT$ </span>
                <span className="amount">{data.cPrice}</span>
              </div>
              <hr />
              <div className="my-4">
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>請選擇活動規格</option>
                    <option>{data.cDate}</option>
                    <option>2020-04-17 (四) 13:00 ~ 15:00</option>
                    <option>2020-04-17 (四) 13:00 ~ 15:00</option>
                    <option>2020-04-17 (四) 13:00 ~ 15:00</option>
                  </select>
                </div>
                <div className="quantity">
                  <label>數量</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => {
                          setQuantity(quantity - 1)
                        }}
                      >
                        -
                      </button>
                    </div>
                    <input
                      type="text"
                      className="col-2 border-secondary form-control-plaintext text-center"
                      value={quantity}
                    />

                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => {
                          setQuantity(quantity + 1)
                        }}
                      >
                        +
                      </button>
                      <div className="ml-2 d-flex align-items-center">
                        部份規格剩最後 <span>1</span> 個名額
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <button
                    type="button"
                    className="btn btn-primary form-control"
                    onClick={joinClass}
                  >
                    立即報名
                  </button>
                </div>
                <div className="">
                  <button
                    type="button"
                    className="btn btn-outline-primary form-control"
                    onClick={addCollection}
                  >
                    加入收藏
                  </button>
                </div>
              </div>
              <hr />
              <div>
                <h5>活動資訊</h5>
                <div className="activity-info">
                  <div className="row info-item">
                    <div className="col-4 info-title">活動摘要</div>
                    <div className="col info-content">{data.cInfo2}</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">最近活動日期</div>
                    <div className="col info-content">{data.cDate}</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">預約須知</div>
                    <div className="col info-content">
                      活動日 1 天前需付款完成
                    </div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">活動所在地</div>
                    <div className="col info-content">{data.cLocation}</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">活動地址</div>
                    <div className="col info-content">{data.cAddress}</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">開放入場時間</div>
                    <div className="col info-content">活動開始前 15 分鐘</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">活動長度</div>
                    <div className="col info-content">{data.cTime}</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">剩餘名額</div>
                    <div className="col info-content">{data.cPeople}</div>
                  </div>
                </div>
              </div>
              <hr />
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
//   return bindActionCreators({ getActivityClassDetail }, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ActivityClass)

export default withRouter(ActivityClass)
