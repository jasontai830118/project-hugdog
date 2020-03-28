import React, { useState, useEffect } from 'react'
// import { StickyContainer, Sticky } from 'react-sticky'
import { withRouter } from 'react-router-dom'

//引入自己的css
import '../../css/activity/activity.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Breadcrumb from '../../components/Breadcrumbs'

function ActivityLecture(props) {
  const [quantity, setQuantity] = useState(1)
  const [data, setData] = useState([])

  //講座加入收藏
  const addCollection = () => {
    console.log('加入收藏')
    fetch(`http://localhost:6001/activity_collection/insertLecture/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mId: 'm001',
        LId: props.match.params.LId,
      }),
    })
      .then((r) => r.json())
      .then((obj) => console.log(obj))
  }

  //講座報名參加
  const joinLecture = () => {
    console.log('報名參加')
    fetch(`http://localhost:6001/activity_successEvent/insertSuccessEvent/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mId: 'm001',
        eId: props.match.params.LId,
        eName: data.LName,
        eDate: data.LDate,
        ePeople: quantity + '',
      }),
    })
      .then((r) => r.json())
      .then((obj) => console.log(obj))
  }

  useEffect(() => {
    const LId = props.match.params.LId
    // const cInfo = props.match.params.cInfo
    // console.log('propsdata:', props.match.params.cId)
    // props.getActivityClassDetail(cId)

    //fetch課程資料
    async function getActClassData() {
      const req = new Request(`http://localhost:6001/activity_lecture/${LId}`, {
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
      <div className="container activity-lecture my-3">
        <Breadcrumb />
        <div className="row mt-3 left-right-container">
          <div className="col-lg-7 lecture-left">
            <figure className="lecturePic">
              <img
                src={require('../../images/activity/lecture01.jpg')}
                alt=""
              />
            </figure>
            <div style={{ whiteSpace: 'pre-wrap' }}>
              <h5>講座內容</h5>
              <hr />
              {data.LInfo}
              {/* <p>▍講座理念</p>
              <p>
                為了受虐的動物，我們應該站出來!動物虐待案件充斥在你我的生活周遭，但是大多數的人遇到時，卻沒有個管道可以著手幫忙。我們雖然擁有管道及方法，但動物虐待案件數量太龐大，一年內平均會收到700-900件通報案件，人力有限的情況下，時常需要仰賴在地調查志工協助了解實際狀況及蒐證，必要時，需要與飼主進行溝通以及勸導，以提昇動物福利，因此調查部門正招募全台的有志人士，在合法、合理、合情的方式下，一同拯救需要幫助的動物。
              </p>
              <p>▍講座對象</p>
              <p>適合10週以上，6個月以下的幼犬講座。</p>
              <p>▍講座內容</p>
              <p>
                在這個講座，你可以和你的愛犬一起用正向的方式，不打不罵，輕鬆學到下列內容：
              </p>
              <p>
                坐下
                <br />
                趴下
                <br />
                等待、長距離及長時間等待
                <br />
                喚回
                <br />
                鬆繩隨行散步
                <br />
              </p> */}
            </div>
            <div className="block-notice mt-3">
              <h5>注意事項</h5>
              <hr />
              <div>
                <p>
                  ① 活動注意事項：
                  <br />
                  講座費用包含午餐，請攜帶環保杯以及環保餐具！
                  <br />
                  肺炎流行期間，請謹慎斟酌自身身體狀況，若有身體不適請勿報名參加。
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
          <div className="col-lg-5 lecture-right">
            <div className="right-sticky">
              <h3 className="title">{data.LName}</h3>
              <div className="price">
                <span className="symbol">NT$ </span>
                <span className="amount">200</span>
              </div>
              <hr />
              <div className="my-4">
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>請選擇活動規格</option>
                    <option>{data.LDate}</option>
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
                    onClick={joinLecture}
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
                    <div className="col info-content">
                      {data.LInfo2}
                      {/* 如果您的內心也是「為了生活我可以忍，但虐待動物就不行！
                      」請您踴躍報名台北場專業調查志工培訓，調查志工培訓課程將傳授動保知識及調查技巧，能實際參與、協助協會調查員處理受虐案件。 */}
                    </div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">最近活動日期</div>
                    <div className="col info-content">{data.LDate}</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">預約須知</div>
                    <div className="col info-content">
                      活動日 1 天前需付款完成
                    </div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">活動所在地</div>
                    <div className="col info-content">{data.LLocation}</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">活動地址</div>
                    <div className="col info-content">{data.LAddress}</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">開放入場時間</div>
                    <div className="col info-content">活動開始前 15 分鐘</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">活動長度</div>
                    <div className="col info-content">{data.LTime}小時</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">剩餘名額</div>
                    <div className="col info-content">{data.LPeople}</div>
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

export default withRouter(ActivityLecture)
