import React, { useState, useEffect } from 'react'
import { starRating } from '../../utils/service/ServiceFunction'
import { getDataFromServer } from '../../utils/service/ServiceFunction'

function ServiceDetailMainComment(props) {
  const [avatar, setAvatar] = useState(
    'http://localhost:6001/uploads/service/avatar/placeholder.png'
  ) //大頭貼(service_photo的資料)
  useEffect(() => {
    // setAvatar(
    //   reqiure(
    //     `../../images/member/member-img/m${props.sMemberId
    //       .toString()
    //       .padStart(3, '0')}.jpg`
    //   )
    // )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <li>
      <div className="d-flex p-2 p-sm-3">
        <div className="d-flex flex-column">
          <figure className="avatar mb-3">
            <img
              className="rounded-circle"
              src={require('../../images/member/member-img/m' +
                props.sMemberId.toString().padStart(3, '0') +
                '.jpg')}
              alt=""
            />
            <span>{props.sMemberImg}</span>
          </figure>
          <h5 className="text-center">{props.sMemberName}</h5>
        </div>
        <div className="d-flex flex-column pl-2 px-sm-4">
          <div className="mb-3">
            <div>{props.sComment.created_at.substring(0, 10)}</div>
            <div>{starRating(props.sComment.rating)}</div>
          </div>
          <div>{props.sComment.commentTxt}</div>
        </div>
      </div>
    </li>
  )
}

export default ServiceDetailMainComment
