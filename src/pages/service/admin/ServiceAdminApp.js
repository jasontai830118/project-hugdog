import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { getDataFromServer } from '../../../utils/service/ServiceFunction'
// import { Link } from 'react-router-dom'
// import { FaDog } from 'react-icons/fa'
import ServiceAdminSidebar from '../../../components/service/admin/ServiceAdminSidebar'
// import ServiceAdminBreadcrumb from '../../../components/service/admin/ServiceAdminBreadcrumb'
//引入自己的scss
import '../../../css/service/style.scss'
import ServiceLoading from '../../../components/service/ServiceLoading'
//服務內部router設定
import ServiceAdminHome from './ServiceAdminHome'
import ServiceAdminProfile from './ServiceAdminProfile'
import ServiceAdminOrder from './ServiceAdminOrder'
import ServiceAdminOrderDetail from './ServiceAdminOrderDetail'
import ServiceAdminLoginChk from '../../../components/service/redirect/ServiceAdminLoginChk'
import ServiceAdminApplyChk from '../../../components/service/redirect/ServiceAdminApplyChk'
// import ServiceAdminMessage from './ServiceAdminMessage'
// import ServiceAdminMessageDetail from './ServiceAdminMessageDetail'

function ServiceAdminApp(props) {
  //判斷是否登入(模擬帶入會員id)
  const sMemberId = '40'
  //設定sId
  const [userId, setUserId] = useState('')
  //設定載入狀態
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    //取得個別保母資料
    const data = getDataFromServer(
      `http://localhost:6001/service/user/getmId?mId=${sMemberId}&dataSts=Y`
    )
    Promise.resolve(data).then(data => {
      //如果查詢有使用者資料則帶入資料
      if (data.length !== 0) {
        setUserId(data[0].id)
      } else {
        //否則為空物件
        setUserId('0')
      }
    })
  }, [])
  useEffect(() => {
    //載入畫面
    setLoaded(false)
    setTimeout(() => {
      setLoaded(true)
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.pathname])
  return (
    <>
      {loaded ? '' : <ServiceLoading />}
      {!!sMemberId ? (
        userId !== '0' ? (
          <div className="Service ServiceAdmin">
            <div className="container pt-3 pb-5">
              <Row>
                <Col md={3}>
                  <ServiceAdminSidebar />
                </Col>
                <Col md={9}>
                  <Route path="/service/admin/profile/">
                    <ServiceAdminProfile
                      sUserId={userId}
                      sMemberId={sMemberId}
                    />
                  </Route>
                  <Route path="/service/admin/order/:orderId">
                    <ServiceAdminOrderDetail sUserId={userId} />
                  </Route>
                  <Route exact path="/service/admin/order/">
                    <ServiceAdminOrder sUserId={userId} />
                  </Route>
                  {/* <Route path="/service/admin/message/:msgId">
                <ServiceAdminMessageDetail />
              </Route>
              <Route exact path="/service/admin/message/">
                <ServiceAdminMessage />
              </Route> */}
                  <Route exact path="/service/admin/">
                    <ServiceAdminHome sUserId={userId} />
                  </Route>
                </Col>
              </Row>
            </div>
          </div>
        ) : (
          <ServiceAdminApplyChk />
        )
      ) : (
        <ServiceAdminLoginChk />
      )}
    </>
  )
}

export default withRouter(ServiceAdminApp)
