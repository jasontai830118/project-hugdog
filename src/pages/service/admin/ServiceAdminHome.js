import React, { useState, useEffect } from 'react'
// import { Row, Col, Card } from 'react-bootstrap'
// import ServiceAdminBreadcrumb from '../../../components/service/admin/ServiceAdminBreadcrumb'
//引入自己的scss
import '../../../css/service/style.scss'

function ServiceAdminHome(props) {
  //設定載入狀態
  useEffect(() => {}, [props])
  return (
    <>
      <div className="ServiceAdminHome">home</div>
    </>
  )
}

export default ServiceAdminHome
