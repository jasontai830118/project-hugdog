import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Col, Image, Badge } from 'react-bootstrap'
import { FiClock } from 'react-icons/fi'
import { bindActionCreators } from 'redux'

function BlogArticleSm(props) {
  return (
    <>
      <Col md={3}>
        <div className="header d-flex align-items-center justify-content-between mb-1 mr-2">
          <span className="icn-time">
            <FiClock /> {props.data.dDate}
          </span>
        </div>
        <div className="blogTitle">
          <Link to={'/knowledge/blog/' + props.data.aId}>
            <h4 className="text-secondary">{props.data.aTitle}</h4>
          </Link>
        </div>
        {/* <div className="blogtxt">
          <Link to={'/knowledge/blog/' + props.data.aId} className=""></Link>
        </div> */}
      </Col>
      111111
    </>
  )
}

// export default withRouter(BlogArticleSm)
export default withRouter(BlogArticleSm)
