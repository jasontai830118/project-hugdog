import React from 'react'
import { Card } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'

function ActCard(props) {
  return (
    <>
      <Card className="my-3">
        <Link to="/activity/class">
          <Card.Img
            variant="top"
            src={require('../../images/activity/activity-sale.jpg')}
          />
        </Link>
        <Card.Body>
          <figure className="card-icon-clock d-flex align-item-end">
            <img
              src={require('../../images/activity/activity-clock.svg')}
              alt=""
            />
            <span className="ml-2 text-muted card-date">2020-03-26</span>
          </figure>
          <Card.Text>
            {/* <IconContext.Provider
                value={{ size: '1.5rem', verticalAlign: 'top' }}
              >
                <FiClock />
                2020-03-26
              </IconContext.Provider> */}
          </Card.Text>
          <Card.Title>清潔用品特賣會開始啦</Card.Title>
        </Card.Body>
        <Card.Footer bg="primary">
          <Link to="/activity/class">#優惠活動</Link>
          <Link to="/activity/lecture">#講座活動</Link>
        </Card.Footer>
      </Card>
    </>
  )
}
export default ActCard
