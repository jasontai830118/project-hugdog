import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ActivityClass from './ActivityClass'
import { Card } from 'react-bootstrap'
import '../../css/activity/activity.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotorn from '../../components/activity/Jumbotron'
import ActCard from '../../components/activity/ActCard'

function Activity(props) {
  return (
    <>
      <Switch>
        <Route path="/activity/class">
          <ActivityClass />
        </Route>

        <div className="activity-main">
          <Jumbotorn />
          <div className="container">
            <section className="d-flex position-relative">
              <div className="col-5 event-icon d-flex">
                <div>
                  <img
                    src={require('../../images/activity/activity-date.svg')}
                    alt=""
                  />
                  <div>時間</div>
                </div>
                <div>
                  <img
                    src={require('../../images/activity/activity-category.svg')}
                    alt=""
                  />
                  <div>分類</div>
                </div>
                <div>
                  <img
                    src={require('../../images/activity/activity-loaction.svg')}
                    alt=""
                  />
                  <div>地點</div>
                </div>
                <div>
                  <img
                    src={require('../../images/activity/activity-search.svg')}
                    alt=""
                  />
                  <div>關鍵字</div>
                </div>
              </div>
              <div className="d-flex align-items-end position-absolute event-btn">
                <button type="button" className="btn btn-primary">
                  進階篩選
                </button>
              </div>
            </section>
            <div className="my-3 new-activity ">
              <h4>最新活動</h4>
              <div className="row">
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
              </div>
            </div>
            <div className="activity-class">
              <h4>課程報名</h4>
              <div className="row">
                <div className="col-lg-3">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-3">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-3">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-3">
                  <ActCard></ActCard>
                </div>
              </div>
            </div>
            <div className="activity-all">
              <h4>精選活動</h4>
              <div className="row">
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
              </div>
              <div align="center" className="mb-3">
                <button type="button" className="btn btn-outline-primary">
                  顯示更多活動
                </button>
              </div>
            </div>
          </div>
        </div>
      </Switch>
    </>
  )
}

export default Activity
