import React, { useState } from 'react'
// import { StickyContainer, Sticky } from 'react-sticky'

//引入自己的css
import '../../css/activity/activity.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Breadcrumb from '../../components/Breadcrumbs'

function ActivityClass(props) {
  const [quantity, setQuantity] = useState(1)
  return (
    <>
      <div className="container activity-class my-3">
        <Breadcrumb />
        <div className="row mt-3 left-right-container">
          <div className="col-lg-7 class-left">
            <figure className="classPic">
              <img src={require('../../images/activity/class-p1.jpg')} alt="" />
            </figure>
            <div>
              <h5>活動內容</h5>
              <hr />
              <p>▍課程理念</p>
              <p>
                不論你是剛養狗，還是養狗一段時間了，難免會遇到狗狗無法配合你生活的習慣，而造成你的困擾，像是狗狗無法在你需要的時候乖乖等待、一開門就衝到不見狗影、散步時狗狗一直爆衝訓練你的二頭肌等。
              </p>
              <p>▍課程對象</p>
              <p>
                適合10週以上，6個月以下的幼犬課程。
                包括個人及團體課程（2隻狗以上）。
              </p>
              <p>▍課程內容</p>
              <p>
                在這個課程，你可以和你的愛犬一起用正向的方式，不打不罵，輕鬆學到下列內容：
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
              </p>
            </div>
            <div className="block-notice">
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
              <h3 className="title">犬基礎生活訓練課程</h3>
              <div className="price">
                <span className="symbol">NT$ </span>
                <span className="amount">1800</span>
              </div>
              <hr />
              <div className="my-4">
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>請選擇活動規格</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
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
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <button
                    type="button"
                    className="btn btn-primary form-control"
                  >
                    立即報名
                  </button>
                </div>
                <div className="">
                  <button
                    type="button"
                    className="btn btn-outline-primary form-control"
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
                      摩卡壺是非常容易入門的咖啡沖煮器具，只要掌握沖煮的訣竅，在家也能煮出濃郁、不焦苦的義式濃縮(Espresso)咖啡！課程中還會教你，如何利用espresso咖啡，變化出拿鐵、維也納、焦糖瑪其朵等各具特色的義式咖啡飲品喔！
                    </div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">最近活動日期</div>
                    <div className="col info-content">2020/03/07 (六)</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">預約須知</div>
                    <div className="col info-content">
                      活動日 1 天前需付款完成
                    </div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">活動所在地</div>
                    <div className="col info-content">台灣 / 台北市</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">活動地址</div>
                    <div className="col info-content">
                      台北市中山區龍江路342巷15號
                    </div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">開放入場時間</div>
                    <div className="col info-content">活動開始前 15 分鐘</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">活動長度</div>
                    <div className="col info-content">2.5 小時</div>
                  </div>
                  <div className="row info-item">
                    <div className="col-4 info-title">剩餘名額</div>
                    <div className="col info-content">2</div>
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

export default ActivityClass
